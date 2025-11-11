const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// Configurar multer para upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Usar o nome do produto como nome do arquivo
    const produto = req.body.produto;
    const ext = path.extname(file.originalname);
    cb(null, `${produto}${ext}`);
  }
});

const upload = multer({ storage: storage });

// Rota para upload de imagem
app.post('/upload', upload.single('imagem'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhuma imagem enviada' });
  }

  res.json({
    message: 'Imagem enviada com sucesso',
    filename: req.file.filename,
    produto: req.body.produto
  });
});

// Rota para obter lista de produtos com imagens
app.get('/produtos', (req, res) => {
  const uploadsDir = path.join(__dirname, 'uploads');

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler diretório de uploads' });
    }

    // Agrupar imagens por produto
    const produtosComImagens = {};

    files.forEach(file => {
      const produto = path.parse(file).name;
      if (!produtosComImagens[produto]) {
        produtosComImagens[produto] = [];
      }
      produtosComImagens[produto].push({
        nome: file,
        serverFilename: file,
        dataURL: `/uploads/${file}`
      });
    });

    res.json(produtosComImagens);
  });
});

// Rota para servir imagens
app.get('/uploads/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.params.filename);
  res.sendFile(filePath);
});

// Rota para remover imagem
app.delete('/upload/:produto', (req, res) => {
  const produto = req.params.produto;
  const uploadsDir = path.join(__dirname, 'uploads');

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler diretório de uploads' });
    }

    const fileToDelete = files.find(file => path.parse(file).name === produto);

    if (!fileToDelete) {
      return res.status(404).json({ error: 'Imagem não encontrada' });
    }

    const filePath = path.join(uploadsDir, fileToDelete);

    fs.unlink(filePath, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao remover imagem' });
      }

      res.json({ message: 'Imagem removida com sucesso' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
