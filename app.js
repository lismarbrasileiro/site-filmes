function pesquisar() {
  let section = document.getElementById 
  ("resultados-pesquisa")


  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value 
  if (campoPesquisa == "") {
    section.innerHTML = "<p> Nada foi encontrado</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()
  

let resultados = "" ;
let titulo = "" ;
let genero = "" ;
let descricao = "";

for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  genero = dado.genero.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  if (titulo.includes(campoPesquisa) || genero.includes (campoPesquisa) || descricao.includes (campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
          <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
                 <a href=${dado.link} 
                 target="_blank">Para mais informações</a>
  
              </div>
  `;
  }
  
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados;

}

//console.log(dados);

