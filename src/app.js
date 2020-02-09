const PORT = 8000
const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data/receitas')

const app = express()
app.use(express.static('./src/public')) //diretório para arquivos como css
app.set('view engine', 'njk')
nunjucks.configure('./src/views', {
    express:app,
    noCache: true,  //Os arquivos .njk(css) nn pegarão cache
    autoescape: false // Permite que o nunjucks carregue variáveis contento tags html e exiba de forma interpretada
})

app.get('/',function(req,res){
    res.render('home',{receitas})
})
app.get('/sobre',function(req,res){
    res.render('sobre')
})
app.get('/receitas',function(req,res){
    res.render('receitas',{receitas})
})
app.get("/receitas/:index", function (req, res) {
    const recipeIndex = req.params.index;
    if(receitas[recipeIndex])
        res.render('receitas_detalhes',{receita: receitas[recipeIndex]})
    else
        res.render('__404')
  })

app.listen(PORT,()=>{
    console.log('Running on port [',PORT,']!!')
})