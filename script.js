const baralho = [
    {
        name: 'girafa',
        img: 'girafa.jpg'
    },
    {
        name: 'pato',
        img: 'pato.jpg'
    },
    {
        name: 'urso',
        img: 'urso.jpg'
    },
    {
        name: 'pinguim',
        img: 'pinguim.jpg'
    },
    {
        name: 'pinguim',
        img: 'pinguim.jpg'
    },
    {
        name: 'pato',
        img: 'pato.jpg'
    },
    {
        name: 'girafa',
        img: 'girafa.jpg'
    },
    {
        name: 'urso',
        img: 'urso.jpg'
    },
    {
        name: 'gato',
        img: 'gato.jpg'
    },
    {
        name: 'gato',
        img: 'gato.jpg'
    },
    {
        name: 'rato',
        img: 'rato.jpg'
    },
    {
        name: 'rato',
        img: 'rato.jpg'
    }
];

baralho.sort(()=>{
    return 0.5 - Math.random();
})

const grade = document.querySelector('#grade');
const pontuacao  = document.querySelector('#pontos');


let escolhidas = []

function criarGrade(){
    ponto = 0
    pontuacao.innerHTML=ponto;

    for (let i  = 0; i < baralho.length; i++ ){
        let carta = document.createElement('img');
        carta.id = i;
        carta.name = baralho[i].nome;
        carta.src = 'cr.jpg';
        carta.addEventListener('click', escolherCarta)
        grade.appendChild(carta);
    };
}

function escolherCarta(){
    let carta = this;
    carta.src = baralho[carta.id].img
    escolhidas.push(carta);
    if (escolhidas.length == 2){
        setTimeout(()=>{
            let carta1 =  escolhidas[0];
            let carta2 = escolhidas[1];


            if(carta1.name == carta2.name){
                carta1.src = 'branco.jpg';
                carta2.src = 'branco.jpg';
                carta1.removeEventListener('click', escolherCarta); 
                carta2.removeEventListener('click', escolherCarta); 
                ponto ++;
                pontuacao.innerHTML = ponto
            }else{
                carta1.src = 'cr.jpg';
                carta2.src = 'cr.jpg';
                
            }
            escolhidas = [];
        }, 1000);
    }
}