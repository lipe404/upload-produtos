// === LISTA DE PRODUTOS ===
const produtos = [
  "Parafina kg",
  "Hidratante Corporal com Ureia Kg",
  "Hidratante Corporal com Rosa Mosqueta kg",
  "Base creme hidratante corporal 1/4 kg",
  "Creme Capilar kg",
  "Sabonete Esfoliante Lt",
  "Sabonete corporal mousse Lt",
  "Sabonete líquido perolado para mãos Lt",
  "Sabonete líquido transparente para mãos Lt",
  "Perfume Capilar Lt",
  "Base glicerina branca sabonete",
  "Loção pós barba Lt",
  "Sabonete líquido íntimo lt",
  "Base shampoo perolado 1/5 lt",
  "Creme capilar sem enxague Kg",
  "Base sabonete líquido 1/5 lt",
  "Espuma para banho Lt",
  "Sais de banho e escaldas pés Kg",
  "Sabonete líquido com gliter Lt",
  "Água de passar Lt",
  "Água de passar 500 ml",
  "Base de perfume Lt",
  "Óleo vegetal germe de trigo 100 ml",
  "Óleo vegetal coco 100 ml",
  "Óleo vegetal macadâmia 100 ml",
  "Óleo vegetal abacate 100 ml",
  "Óleo vegetal semente uva 100 ml",
  "Extrato camomila 100 ml",
  "Extrato babosa camomila 100 ml",
  "Cânfora 100 gr",
  "Ácido citrico 100 gr",
  "Base amaciante 500 gr",
  "Percabonato de sódio Kg",
  "Limpa alumínio Lt",
  "Alcool de cereais Lt",
  "Sabão liquido roupas Lt",
  "Manteiga de Karitê 100 gr",
  "Vaselina Sólida 100 gr",
  "Cera de abelha 100 gr",
  "Mentol 20 gr",
  "Base de desinfetante lt",
  "Lauril lt",
  "Base de body Splash Lt",
  "Vermiculita Kg",
  "Propilenoglicol Lt",
  "Glicerina Lt",
  "Óleo mineral Lt",
  "Base detergente Lt",
  "Multi uso Lt",
  "Alcool de cereais 500 ml",
  "Base de desinfetante 500 ml",
  "Álcool 70%",
  "Cloreto de sódio sem Iodo Kg",
  "Frasco nossa senhora",
  "Enfeite buda",
  "Enfeite elefante",
  "Repelente natural 100 ml",
  "Enfeite urso",
  "Vela aromática lata dourada 150 gr",
  "Óleo essencial menta 10 ml",
  "Óleo essencial eucalipto 10 ml",
  "Óleo essencial alecrim 10 ml",
  "Óleo essencial copaiba 10 ml",
  "Óleo essencial Melaleuca 10 ml",
  "Óleo essencial laranja doce 10 ml",
  "Óleo essencial limão siciliano 10 ml",
  "Óleo essencial lavanda 10 ml",
  "Óleo essencial bergamota 10 ml",
  "Frasco square com sabonete liquido 250 ml",
  "Frasco square com aromatizador 250 ml",
  "Essências perfumaria 30 ml",
  "Óleo de eucalipto 100 ml",
  "Hipoclorito de sódio 5 kg",
  "Sabonete liquido erva doce lt",
  "Sabonete líquido cereja e avelã lt",
  "Sabonete liquido jasmim lt",
  "Provador de carro 10 ml",
  "Pavio pacote 10 metros",
  "Porta perfume alumínio spray 10 ml",
  "Frasco amostra 5 ml",
  "Pote 15 gr",
  "Pote 110 gr",
  "Pote 300 gr",
  "Pote 500 gr",
  "Pote 1 kg",
  "Pote 180 gr",
  "Pingente perola",
  "Pingente corda",
  "Pingente laço verde",
  "Pingente flor",
  "Pingente laço rosa",
  "Pingente laço marrom",
  "Pingente laço branco",
  "Pingente flor verde",
  "Pingente franja",
  "Caixa papel 16x12",
  "Caixa papel 12x12",
  "Caixa coração 14x12",
  "Caixa bombom dourada",
  "Copo medidor",
  "Kits presentes caixa papel",
  "Corante de vela liquido 100 ml",
  "Corante de vela em pó 10 gr",
  "Vela palito grande pacote",
  "Vela palito menor pacote",
  "Mini velas pacote com 10 unidades",
  "Mini velas pacote com 30 unidades",
  "Vela coração",
  "Rechaud para vela",
  "Incensos pacote",
  "Difusor elétrico porcelana",
  "Frasco spray 20 ml",
  "Valvula spray reparador r.18",
  "Valvula spray r.18",
  "Varetas comum 18 cm",
  "Varetas comum 25 cm",
  "Frasco seta lt",
  "Frasco seta 500 ml",
  "Frasco saboneteira redondo 350 ml",
  "Enfeite laço rústico",
  "Hidratante mamãe bebê 2 lt",
  "Saquinho organza com mini sabonete",
  "Kit sabonete pezinho",
  "Caixa acrílica coração vermelha GR",
  "Vareta passarinho 25 cm",
  "Vareta de flor branca 25 cm",
  "Vareta strass vermelho 25 cm",
  "Vareta fibra 25 cm",
  "Vareta flor de madeira 25 cm",
  "Vareta cristal 25 cm",
  "Vareta ratan 25 cm",
  "Vareta parafinada flor 25 cm",
  "Vareta bola rústica 25 cm",
  "Vareta flor branca 25 cm",
  "Vareta cristal 25 cm",
  "Vareta pérola 25 cm",
  "Vareta bola dourada 25 cm",
  "Vareta perola strass 25 cm",
  "Vareta flor cristal 25 cm",
  "Bandejas espelhadas",
  "Válvula bico de pato dourada r.28",
  "Válvula bico de pato branca r.28",
  "Válvula bico de pato preta r.28",
  "Válvula bico de pato rose r.28",
  "Válvula bico de pato bronze r.28",
  "Válvula bico de pato prata r.28",
  "Tampa aromatizador bronze r.28",
  "Tampa aromatizador prata/dourada r.20",
  "Tampa aromatizador prata r.28",
  "Tampa aromatizador dourada r.28",
  "Tampa aromatizador rose r.28",
  "Tampa aromatizador prata r.24",
  "Válvula spray prata r.28",
  "Frasco saboneteira cilindrico 200 ml r.28",
  "Frasco saboneteira carelis 350 ml r.28",
  "Pote rolha 50 ml",
  "Garrafinha rolha 50 ml",
  "Frasco espumador 100 ml",
  "Frasco bico fino 100 ml",
  "Frasco tampa push 100 ml",
  "Frasco flip top 60 ml r.18",
  "Frasco vidro perfume 50 ml",
  "Frasco mini aromatizador 30 ml",
  "Frasco cilindrico spray litro",
  "Frasco cilindrico spray 500 ml",
  "Galão azul/rosa 2 litros",
  "Frasco shampoo 350 ml",
  "Frasco saboneteira cilindrico 250 ml r.28",
  "Frasco molho 150 ml",
  "Frasco molho 200 ml",
  "Frasco spray fosco 100 ml",
  "Frasco spray fosco 60 ml",
  "Frasco spray transparente 100 ml",
  "Frasco spray 30 ml",
  "Forma de silicone",
  "Frasco aromatizadores/sabonete",
  "Frasco vidro sem tampa 500 ml",
];

// === CONFIGURAÇÃO DO SERVIDOR LOCAL ===
const SERVER_URL = "http://localhost:3000";

// === ESTADO DA APLICAÇÃO ===
let produtosComImagens = {};
let filtroAtual = "todos";

// === ELEMENTOS DO DOM ===
const grid = document.getElementById("produtosGrid");
const searchInput = document.getElementById("searchInput");
const btnEnviarTodos = document.getElementById("btnEnviarTodos");
const btnLimpar = document.getElementById("btnLimpar");
const statusDiv = document.getElementById("status");
const modal = document.getElementById("modalPreview");
const modalTitulo = document.getElementById("modalTitulo");
const modalImagens = document.getElementById("modalImagens");
const closeModal = document.querySelector(".close");

// === INICIALIZAÇÃO ===
async function init() {
  await carregarProdutosComImagens();
  renderizarProdutos();
  attachEventListeners();
  atualizarEstatisticas();
}

// === RENDERIZAR CARDS DE PRODUTOS ===
function renderizarProdutos(filtro = "") {
  grid.innerHTML = "";

  const produtosFiltrados = produtos.filter((prod) =>
    prod.toLowerCase().includes(filtro.toLowerCase())
  );

  produtosFiltrados.forEach((produto, index) => {
    const card = criarCardProduto(produto, index);

    // Aplicar filtro de abas
    if (filtroAtual === "pendentes" && produtosComImagens[produto]) {
      card.style.display = "none";
    } else if (filtroAtual === "completos" && !produtosComImagens[produto]) {
      card.style.display = "none";
    }

    grid.appendChild(card);
  });
}

function criarCardProduto(produto, index) {
  const card = document.createElement("div");
  card.className = "produto-card";
  card.dataset.produto = produto;

  if (produtosComImagens[produto]) {
    card.classList.add("tem-imagem");
  }

  card.innerHTML = `
        <div class="produto-nome">${produto}</div>
        <div class="upload-area" data-produto="${produto}">
            <div class="upload-icon">📷</div>
            <div class="upload-text">Clique para adicionar imagens</div>
            <input type="file"
                   id="file-${index}"
                   accept="image/*"
                   multiple
                   style="display: none;"
                   data-produto="${produto}">
        </div>
        <div class="preview-container" id="preview-${index}"></div>
        ${
          produtosComImagens[produto]
            ? `<div class="contador-imagens">${produtosComImagens[produto].length} imagem(ns)</div>`
            : ""
        }
    `;

  // Event listener para abrir o seletor de arquivos
  const uploadArea = card.querySelector(".upload-area");
  const fileInput = card.querySelector(`#file-${index}`);

  uploadArea.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (e) => {
    handleFileSelect(e, produto, index);
  });

  // Renderizar preview se já tiver imagens
  if (produtosComImagens[produto]) {
    renderizarPreview(produto, index);
  }

  return card;
}

// === MANIPULAR SELEÇÃO DE ARQUIVOS ===
async function handleFileSelect(event, produto, index) {
  const files = Array.from(event.target.files);

  if (files.length === 0) return;

  if (!produtosComImagens[produto]) {
    produtosComImagens[produto] = [];
  }

  for (const file of files) {
    const formData = new FormData();
    formData.append("produto", produto);
    formData.append("imagem", file);

    try {
      const response = await fetch(`${SERVER_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        produtosComImagens[produto].push({
          file: file,
          dataURL: URL.createObjectURL(file),
          nome: file.name,
          serverFilename: data.filename,
        });
        renderizarPreview(produto, index);
        atualizarEstatisticas();
        salvarNoLocalStorage();
        mostrarStatus(`Imagem "${file.name}" enviada com sucesso!`, "success");
      } else {
        mostrarStatus(`Erro ao enviar imagem "${file.name}"`, "error");
      }
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      mostrarStatus(`Erro ao enviar imagem "${file.name}"`, "error");
    }
  }

  // Atualizar visual do card
  const card = document.querySelector(`[data-produto="${produto}"]`);
  card.classList.add("tem-imagem");
}

// === RENDERIZAR PREVIEW DAS IMAGENS ===
function renderizarPreview(produto, index) {
  const previewContainer = document.getElementById(`preview-${index}`);
  previewContainer.innerHTML = "";

  const imagens = produtosComImagens[produto];

  imagens.forEach((img, imgIndex) => {
    const previewItem = document.createElement("div");
    previewItem.className = "preview-item";
    previewItem.innerHTML = `
            <img src="${img.dataURL}" alt="${produto}" title="${img.nome}">
            <button class="preview-remove" data-produto="${produto}" data-index="${imgIndex}">×</button>
        `;
    previewContainer.appendChild(previewItem);
  });

  // Event listener para remover imagem individual
  previewContainer.querySelectorAll(".preview-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const produtoNome = btn.dataset.produto;
      const imgIndex = parseInt(btn.dataset.index);
      removerImagem(produtoNome, imgIndex, index);
    });
  });

  // Atualizar contador
  const card = document.querySelector(`[data-produto="${produto}"]`);
  let contador = card.querySelector(".contador-imagens");
  if (!contador) {
    contador = document.createElement("div");
    contador.className = "contador-imagens";
    card.appendChild(contador);
  }
  contador.textContent = `${imagens.length} imagem(ns)`;
}

// === REMOVER IMAGEM ===
function removerImagem(produto, imgIndex, cardIndex) {
  produtosComImagens[produto].splice(imgIndex, 1);

  if (produtosComImagens[produto].length === 0) {
    delete produtosComImagens[produto];
    const card = document.querySelector(`[data-produto="${produto}"]`);
    card.classList.remove("tem-imagem");
  }

  renderizarPreview(produto, cardIndex);
  atualizarEstatisticas();
  salvarNoLocalStorage();
}

// === ENVIAR TODOS OS PRODUTOS ===
async function enviarTodos() {
  const produtosParaEnviar = Object.keys(produtosComImagens);

  if (produtosParaEnviar.length === 0) {
    mostrarStatus("Nenhum produto com imagem para enviar!", "error");
    return;
  }

  btnEnviarTodos.disabled = true;
  mostrarStatus(`Processando ${produtosParaEnviar.length} produto(s)...`, "info");

  let sucessos = 0;
  let erros = 0;

  // As imagens já foram enviadas quando selecionadas, então apenas limpar o estado local
  for (const produto of produtosParaEnviar) {
    const imagens = produtosComImagens[produto];
    sucessos += imagens.length;
  }

  btnEnviarTodos.disabled = false;

  mostrarStatus(
    `✅ Todos os ${sucessos} produto(s) já foram salvos localmente!`,
    "success"
  );
  limparTudo();
}

// === LIMPAR SELEÇÕES ===
function limparTudo() {
  if (!confirm("Tem certeza que deseja limpar todas as seleções?")) return;

  produtosComImagens = {};
  localStorage.removeItem("produtosComImagens");
  renderizarProdutos();
  atualizarEstatisticas();
  mostrarStatus("✅ Todas as seleções foram limpas!", "success");
}

// === ATUALIZAR ESTATÍSTICAS ===
function atualizarEstatisticas() {
  document.getElementById("totalProdutos").textContent = produtos.length;
  document.getElementById("produtosComImagem").textContent =
    Object.keys(produtosComImagens).length;

  btnEnviarTodos.disabled = Object.keys(produtosComImagens).length === 0;
}

// === MOSTRAR STATUS ===
function mostrarStatus(mensagem, tipo) {
  statusDiv.textContent = mensagem;
  statusDiv.className = `status-box show ${tipo}`;

  setTimeout(() => {
    statusDiv.classList.remove("show");
  }, 5000);
}

// === CARREGAR PRODUTOS COM IMAGENS DO SERVIDOR ===
async function carregarProdutosComImagens() {
  try {
    const response = await fetch(`${SERVER_URL}/produtos`);
    if (response.ok) {
      const data = await response.json();
      produtosComImagens = data;
      // Reconstruir dataURL para preview
      Object.keys(produtosComImagens).forEach((produto) => {
        produtosComImagens[produto].forEach((img) => {
          img.dataURL = `${SERVER_URL}/uploads/${img.serverFilename}`;
        });
      });
    }
  } catch (error) {
    console.error("Erro ao carregar produtos do servidor:", error);
  }
}

// === LOCAL STORAGE ===
function salvarNoLocalStorage() {
  const dados = {};
  Object.keys(produtosComImagens).forEach((produto) => {
    dados[produto] = produtosComImagens[produto].map((img) => ({
      dataURL: img.dataURL,
      nome: img.nome,
      serverFilename: img.serverFilename,
    }));
  });
  localStorage.setItem("produtosComImagens", JSON.stringify(dados));
}

function carregarDoLocalStorage() {
  const dados = localStorage.getItem("produtosComImagens");
  if (dados) {
    const parsed = JSON.parse(dados);
    // Reconverter dataURL para File objects (limitação: não podemos recuperar o File original)
    Object.keys(parsed).forEach((produto) => {
      produtosComImagens[produto] = parsed[produto];
    });
    renderizarProdutos();
    atualizarEstatisticas();
  }
}

// === EVENT LISTENERS ===
function attachEventListeners() {
  searchInput.addEventListener("input", (e) => {
    renderizarProdutos(e.target.value);
  });

  btnEnviarTodos.addEventListener("click", enviarTodos);
  btnLimpar.addEventListener("click", limparTudo);

  // Filtros de abas
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      filtroAtual = tab.dataset.filter;
      renderizarProdutos(searchInput.value);
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
}

// === INICIAR APLICAÇÃO ===
init();
