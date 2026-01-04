
let i = 0
 
 let lista
  let playerl
let carregou = false 
let indiceatual
let selecao 
let selecao2
 let grade1
 let movegrade1 = 0

 let totaldeplayers = 0
    let indicefoto = 0
    let imgtamanho =86
let imgtamanhoxtotaldeplayers  
let tamanhograde =0
 let ultimoitemgrade
let nomep1 = document.querySelector('.nomep2')
let nomeplayer1 =[]
 let imgselecao = []
 function carregarplayerl(callback)

{

 fetch('Tier.json')
.then(response => response.json())
.then (playerl => { 

playerl.map((player, index, array) => {


  grade1 = document.querySelector('#grade1');
 let grade2 = document.querySelector('#grade2');




const img = document.createElement("img")
const img2 = document.createElement("img")

imgselecao.push( player.imagem_selecao)
img.src = player.imagem
img.alt = player.nome
nomeplayer1.push(player.nome)



grade1.appendChild(img)
img.classList.add('selecionado')


//console.log(imgselecao)
img2.src = player.imagem
img2.alt = player.nome
grade2.appendChild(img2)
img2.classList.add('selecionado2')


if(index == array.length -1)
  { 
    indiceatual= array.length 
    callback({player, indiceatual,ultimoitemgrade})
  totaldeplayers = array.length

  

 
        }




})
})}



let dados = carregarplayerl((callback)=>{ 
  
 selecao = document.querySelectorAll('.selecionado');

 selecao2 = document.querySelectorAll('.selecionado2');
 indiceatual = callback.indiceatual/2|0


selecao[indiceatual].style.border = "8px solid #ffe867ff"
selecao2[indiceatual].style.border = "8px solid #ffe867ff"


  

})


function totalplayers(){
    console.log("Total de players: " + totaldeplayers)

}




function duplica()
{
  let indice_duplicar = totaldeplayers -21
if(indiceatual>=indice_duplicar) {


  console.log( )

let player_side = document.querySelector('.player-side.left')
  
//player_side.innerHTML =  grade1.imagem // limpa o conteudo

} 


}

function mostraindiceefoto()
{

 console.log(selecao[indiceatual])
 
 ultimoitemgrade = selecao[totaldeplayers -1].getBoundingClientRect()

let fotohud1 =  document.querySelector('.sobreposta')
fotohud1.src = imgselecao[indiceatual]
 nomep1.innerHTML = nomeplayer1[indiceatual]
 
}
 


document.addEventListener('keydown', function(event)
 {

if(event.key === "ArrowRight")
{


duplica()

if(indiceatual >= totaldeplayers-2 ) {
 

  indicefoto = -indicefoto // inverte o sinal pra voltar ao começo da lista
 
    grade1.style.transform = `translateX(${indicefoto}px)`
        selecao[indiceatual].style.border = "4px solid #000";

         indiceatual = 0
        selecao[indiceatual].style.border = "8px solid #ffe867ff";

return
} 
 
  indicefoto  -= 86
  grade1.style.transform = `translateX(${indicefoto}px)`

 


    selecao[indiceatual].style.border = "4px solid #000";
    indiceatual+=2
    selecao[indiceatual].style.border = "8px solid #ffe867ff";
 mostraindiceefoto()
}

if(event.key === "ArrowLeft")
{ 


  if(indiceatual == 0  || indiceatual == 1) 
    {
 
 indicefoto = -indicefoto // inverte o sinal pra voltar ao começo da lista
 
    grade1.style.transform = `translateX(${indicefoto}px)`
        selecao[indiceatual].style.border = "4px solid #000";
        indiceatual =  totaldeplayers -1
       selecao[indiceatual].style.border = "8px solid #ffe867ff";

return
     
    }

    indicefoto  += 86
   grade1.style.transform = `translateX(${indicefoto}px)`
    selecao[indiceatual].style.border = "4px solid #000";
    indiceatual -= 2;
    selecao[indiceatual].style.border = "8px solid #ffe867ff";
 
mostraindiceefoto()
 
}

if(event.key === "ArrowDown")
{ 


if(indiceatual % 2 == 1)
    {
return
    }
 
    selecao[indiceatual].style.border = "4px solid #000";
    indiceatual += 1;

    selecao[indiceatual].style.border = "8px solid #ffe867ff";
  mostraindiceefoto()
}
if(event.key === "ArrowUp")
{ 



 
   if(indiceatual % 2 == 0)
    {
return
    }

 selecao[indiceatual].style.border = "4px solid #000";
    indiceatual -= 1;

    selecao[indiceatual].style.border = "8px solid #ffe867ff";
 mostraindiceefoto()

}



})