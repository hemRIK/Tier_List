
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
            labels: ['DEF '+def, 'Chacra '+Chacra, 'Velocidade '+movimento, 'ITEM '+item],
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
                            size: 13,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });



}





function mostraindiceefoto() {
        somtrocapersonagem()

    console.log(selecao[indiceatual])
    console.log(indiceatual)

    radar(indiceatual)

    ultimoitemgrade = selecao[totaldeplayers - 1].getBoundingClientRect()

    let fotohud1 = document.querySelector('.sobreposta')
    fotohud1.src = imgselecao[indiceatual]

    let divnome = document.querySelector('.nomep1')

    divnome.innerHTML = selecao[indiceatual].alt





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


  let Maviso = document.getElementById('musicbox')

function aviso_musicbox(musicaatual) 
{ 


 
    let aviso = document.createElement('div')
       
    aviso.classList.add('toast')
   aviso.innerHTML = `<i class="fa-solid fa-music"></i> ${musicaatual}`;
    Maviso.appendChild(aviso)

    
         setTimeout(()=>
            {

aviso.remove()


            },5000)

}

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
            "music/03-ModeSelect.mp3",
"music/10. Time Trial.mp3",
"music/11. Hidden Leaf Village.mp3",
"music/12. Hidden Leaf Gate.mp3",
"music/13. Five-Seal Barrier Cliff.mp3",
"music/14. Akatsuki Hideout.mp3",
"music/15. Tenchi Bridge.mp3",
"music/16. Orochimaru's Hideout.mp3",
"music/17. Giant Snake Altar.mp3",
"music/18. Foundation's Hideout.mp3",
"music/19. Tranquility And Reunion.mp3",
"music/20. Hidden Leaf Village.mp3",
"music/21. Dark Clouds On The Horizon.mp3",
"music/22. Hokage's Mansion.mp3",
"music/23. Emergency Order.mp3",
"music/24. Travel The World.mp3",
"music/25. Surviving A Fierce Battle.mp3",
"music/26. Gaining Experience.mp3",
"music/27. Building Tension.mp3",
"music/28. Hidden Sand Village.mp3",
"music/29. Itachi Uchiha.mp3",
"music/30. An Impostor.mp3",
"music/31. An Ephemeral World.mp3",
"music/32. The Wild.mp3",
"music/33. Those Who Embrace The Darkness.mp3",
"music/34. Evil Puppetmaster.mp3",
"music/35. Sakura's Dance.mp3",
"music/36. Akatsuki's Hideout.mp3",
"music/37. Bonds.mp3",
"music/38. Kakashi's Dojo.mp3",
"music/39. The New Squad 1.mp3",
"music/40. Blue Silhouette.mp3",
"music/41. A Great Evil Appears.mp3",
"music/42. The Crazed Beast.mp3",
"music/43. Strong Determination.mp3",
"music/44. The Imminent Duel.mp3",
"music/45. Jaketsu's Lair.mp3",
"music/46. Wish... Dance On The Clouds.mp3",
"music/47. Sasuke Uchiha.mp3",
"music/48. Staff Roll.mp3"




        ]
    document.addEventListener("dblclick", () => {

        indice = (indice + 1) % listaDemusicas.length;
        playerclick.src = listaDemusicas[indice];
        playerclick.play();

        console.log(listaDemusicas[indice].replace('music/',''))
        
        aviso_musicbox(listaDemusicas[indice].replace('music/','')) 

    })




}
mudamusica()


function somtrocapersonagem() {

    const som = new Audio("music/efeitos/snddata_00057.wav");
    som.preload = "auto";


    som.currentTime = 0;
    som.play();

}