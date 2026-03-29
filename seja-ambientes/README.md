# Seja Ambientes — Site React

Site institucional da **Seja Ambientes**, empresa de marcenaria e móveis projetados de alto padrão, localizada em Fortaleza, CE.

---

## 🗂 Estrutura do Projeto

```
seja-ambientes/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── Carousel/
│   │   │   ├── Carousel.jsx
│   │   │   └── Carousel.module.css
│   │   ├── ServiceCard/
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ServiceCard.module.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.module.css
│   │   └── LogoIcon/
│   │       └── LogoIcon.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   ├── Portfolio.jsx
│   │   ├── Portfolio.module.css
│   │   ├── Contact.jsx
│   │   └── Contact.module.css
│   ├── styles/
│   │   └── global.css
│   ├── data/
│   │   └── index.js
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 Como rodar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# 1. Entre na pasta do projeto
cd seja-ambientes

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```

O site abrirá em `http://localhost:3000`.

### Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `/build`.

---

## 📄 Páginas

| Rota         | Descrição                                          |
|--------------|----------------------------------------------------|
| `/`          | Home — Hero, Carrossel, Sobre Nós, Serviços, CTA   |
| `/portfolio` | Portfólio com filtros por categoria                |
| `/contato`   | Informações de contato, mapa e formulário          |

---

## 🎨 Cores (Brand)

| Token         | Hex       | Uso                        |
|---------------|-----------|----------------------------|
| `--red`       | `#9B1C1C` | Cor primária (logo/accent) |
| `--red-dark`  | `#7A1515` | Hover / estados ativos     |
| `--charcoal`  | `#2C2C2C` | Cor secundária (logo)      |
| `--dark`      | `#1A1A1A` | Textos principais          |
| `--light`     | `#F5F2EE` | Fundo seções alternadas    |

---

## 📦 Dependências principais

| Pacote              | Versão   | Uso                     |
|---------------------|----------|-------------------------|
| react               | ^18.2.0  | Framework UI            |
| react-dom           | ^18.2.0  | Renderização DOM        |
| react-router-dom    | ^6.22.0  | Roteamento de páginas   |
| react-scripts       | 5.0.1    | Scripts CRA             |

---

## ✏️ Personalizações sugeridas

1. **Imagens reais** — Substitua as URLs do Unsplash em `src/data/index.js` pelas fotos dos projetos da empresa.
2. **Contato** — Atualize telefone, e-mail e endereço em `src/data/index.js`.
3. **Formulário** — Integre com [Formspree](https://formspree.io), [EmailJS](https://emailjs.com) ou uma API própria em `ContactForm.jsx`.
4. **Mapa** — Atualize as coordenadas no embed do Google Maps em `src/data/index.js`.
5. **SEO** — Edite o `<title>` e `<meta description>` em `public/index.html`.
