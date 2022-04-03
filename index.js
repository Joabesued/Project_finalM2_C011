
const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

const itens = [
  {
  nome: "camiseta da versace",
  imagem: "https://cdn-images.farfetch-contents.com/15/35/56/28/15355628_27695914_600.jpg",
  tamanho: "M",
  categoria: "roupa",
},
{
  nome: "camiseta da versace",
  imagem: "https://cdn-images.farfetch-contents.com/15/35/56/28/15355628_27695914_600.jpg",
  tamanho: "M",
  categoria: "roupa",
},
{
  nome: "camiseta da versace",
  imagem: "https://cdn-images.farfetch-contents.com/15/35/56/28/15355628_27695914_600.jpg",
  tamanho: "M",
  categoria: "roupa",
},
]


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/index.ejs",(req, res) => {
  res.render("../views/index.ejs");
});

app.get("/meus-itens.ejs",(req, res) => {
    res.render("../views/itens.ejs", {itens});
  });

app.get("/adicionar.ejs",(req, res) => {
    res.render("../views/adicionar.ejs");
  });

app.post("/add", (req, res) => {

})


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
   