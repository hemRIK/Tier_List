
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
let imgtamanho = 86
let imgtamanhoxtotaldeplayers
let tamanhograde = 0
let ultimoitemgrade
let nomep1 = document.querySelector('.nomep2')
let nomeplayer1 = []
let imgselecao = []
let jogadores = []
let mychart = null;
function carregarplayerl(callback) {

    fetch('Tier.json')
        .then(response => response.json())
        .then(playerl => {

            playerl.map((player, index, array) => {


                grade1 = document.querySelector('#grade1');
                let grade2 = document.querySelector('#grade2');

                const radarp1 = document.querySelector('.radarp1')


                const img = document.createElement("img")
                const img2 = document.createElement("img")

                imgselecao.push(player.imagem_selecao)
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




                if (index == array.length - 1) {

                    indiceatual = array.length
                    callback({ playerl, indiceatual, ultimoitemgrade })
                    totaldeplayers = array.length




                }




            })
        })
}


let dados = carregarplayerl((callback) => {

    selecao = document.querySelectorAll('.selecionado');

    selecao2 = document.querySelectorAll('.selecionado2');
    indiceatual = callback.indiceatual / 2 | 0


    selecao[indiceatual].style.border = "8px solid #ffe867ff"
    selecao2[indiceatual].style.border = "8px solid #ffe867ff"

    jogadores = callback.playerl





    {



    }


})
console.log(jogadores)

function totalplayers() {
    console.log("Total de players: " + totaldeplayers)

}




function duplica() {
    let indice_duplicar = totaldeplayers - 21
    if (indiceatual >= indice_duplicar) {



        //let player_side = document.querySelector('.player-side.left')

        //player_side.innerHTML =  grade1.imagem // limpa o conteudo

    }


}







function radar(i) {



    let def = jogadores[i].def
    let Chacra = jogadores[i].chacra
    let movimento = jogadores[i].movimento
    let item = jogadores[i].item
   




    const ctx = document.getElementById('radarp1')

    if (mychart != null) {
        mychart.destroy()


    }

    mychart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['DEF', 'Chacra', 'V.MOVIMENTO', 'Res.ITEM'],
            datasets: [{
                data: [def, Chacra, movimento, item],

                backgroundColor: 'rgba(255,140,0,0.35)', // preenchimento laranja
                borderColor: '#ff8c00',
                borderWidth: 2,

                pointBackgroundColor: '#fff',
                pointBorderColor: '#ff8c00',
                pointRadius: 3
            }]
        },

        options: {
            responsive: false,
            plugins: {
                legend: { display: false }
            },

            scales: {
                r: {
                    min: 0,
                    max: 1500,

                    ticks: {
                        display: false
                    },

                    grid: {
                        color: 'rgba(0, 0, 0, 0.15)'
                    },

                    angleLines: {
                        color: 'rgba(143, 255, 52, 0.2)'
                    },

                    pointLabels: {
                        color: 'black',
                        font: {
                            size: 11,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });



}





function mostraindiceefoto() {

    console.log(selecao[indiceatual])
    console.log(indiceatual)

    radar(indiceatual)

    ultimoitemgrade = selecao[totaldeplayers - 1].getBoundingClientRect()

    let fotohud1 = document.querySelector('.sobreposta')
    fotohud1.src = imgselecao[indiceatual]

    let divnome = document.querySelector('.nomep1')

    divnome.innerHTML = selecao[indiceatual].alt

    somtrocapersonagem()



}



document.addEventListener('keydown', function (event) {

    if (event.key === "ArrowRight") {

        duplica()

        if (indiceatual >= totaldeplayers - 2) {


            indicefoto = -indicefoto // inverte o sinal pra voltar ao começo da lista

            grade1.style.transform = `translateX(${indicefoto}px)`
            selecao[indiceatual].style.border = "4px solid #000";

            indiceatual = 0
            selecao[indiceatual].style.border = "8px solid #ffe867ff";

            return
        }

        indicefoto -= 86
        grade1.style.transform = `translateX(${indicefoto}px)`




        selecao[indiceatual].style.border = "4px solid #000";
        indiceatual += 2
        selecao[indiceatual].style.border = "8px solid #ffe867ff";
        mostraindiceefoto()
    }

    if (event.key === "ArrowLeft") {


        if (indiceatual == 0 || indiceatual == 1) {

            indicefoto = -indicefoto // inverte o sinal pra voltar ao começo da lista

            grade1.style.transform = `translateX(${indicefoto}px)`
            selecao[indiceatual].style.border = "4px solid #000";
            indiceatual = totaldeplayers - 1
            selecao[indiceatual].style.border = "8px solid #ffe867ff";

            return

        }

        indicefoto += 86
        grade1.style.transform = `translateX(${indicefoto}px)`
        selecao[indiceatual].style.border = "4px solid #000";
        indiceatual -= 2;
        selecao[indiceatual].style.border = "8px solid #ffe867ff";

        mostraindiceefoto()

    }

    if (event.key === "ArrowDown") {


        if (indiceatual % 2 == 1) {
            return
        }

        selecao[indiceatual].style.border = "4px solid #000";
        indiceatual += 1;

        selecao[indiceatual].style.border = "8px solid #ffe867ff";
        mostraindiceefoto()
    }
    if (event.key === "ArrowUp") {




        if (indiceatual % 2 == 0) {
            return
        }

        selecao[indiceatual].style.border = "4px solid #000";
        indiceatual -= 1;

        selecao[indiceatual].style.border = "8px solid #ffe867ff";
        mostraindiceefoto()

    }



})



function playmusica() {

    document.addEventListener("click", () => {

        document.getElementById("musica").play()


    })


}

playmusica()
let indice = 0;

function mudamusica() {

    const playerclick = document.getElementById("musica")


    const listaDemusicas =
        [
            "music/stage00.wav",
            "music/stage01.wav",
            "music/stage02.wav",
            "music/stage03.wav",
            "music/stage04.wav",
            "music/stage05.wav",
            "music/stage06.wav",
            "music/stage07.wav",

            "music/rpg00.wav",
            "music/rpg01.wav",
            "music/rpg02.wav",
            "music/rpg03.wav",
            "music/rpg04.wav",


            "music/btl00.wav",
            "music/btl01.wav",
            "music/btl02.wav",
            "music/btl03.wav",
            "music/btl04.wav",
            "music/btl05.wav",
            "music/btl06.wav",
            "music/btl07.wav"

        ]
    document.addEventListener("dblclick", () => {
        
        indice = (indice + 1) % listaDemusicas.length;
        playerclick.src = listaDemusicas[indice];
        playerclick.play();

        console.log(listaDemusicas[indice])
    })




}
mudamusica()


function somtrocapersonagem() {

    const som = new Audio("music/efeitos/snddata_00057.wav");
    som.preload = "auto";


    som.currentTime = 0;
    som.play();

}