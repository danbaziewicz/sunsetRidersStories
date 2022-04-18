let choice;
let verifyCharacter = ['1', '2', '3'];
let verifyChoice = ['1', '2'];
let position = 0;
let selectionTxt = 'Escolha com qual personagem deseja jogar:\n1 - Steve\n2 - Bob\n3 - Cormano';
let validate;
let cormanoStories = ['1 - Seguir trilha de El Greco.\n2 - Continuar vagando e esperar outra oportunidade.', '1 - Aguardar o trem de nome Rustler & Thief R.R.\n2 - Tentar uma aproximação do Cran & Pew R.R.', '1 - Embarcar no trem e investigar\n2 - Retornar ao ponto anterior para esperar pelo Rustler & Thief R.R.', '\n1 - Saca suas armas e atira de imediato.\n2 - Corre para se posicionar e buscar um melhor ângulo.'];

function playGame() {
    alert('Seja bem vindo(a)!\nPara jogar você precisa escolher entre as opções listadas.\nBasta digitar o número na caixa de texto que aparecerá na tela.\nBoa sorte!')
    choice = prompt(selectionTxt);
    while (verifyCharacter.indexOf(choice) === -1) {
        alert(`Por favor, digite uma opção válida.`)
        choice = prompt(selectionTxt);
    }
    if (choice === '1') {
        location.href = './/cormanoGame/cormano1-1.html';
    } else if (choice === '2') {
        location.href = './/cormanoGame/cormano1-1.html';
    } else if (choice === '3') {
        location.href = './/cormanoGame/cormano.html';
    }
}

function goHome() {
    location.href = './index.html';
    if (position === 0) {
        location.href = '../index.html'
    }
}

function redirctCormano() {
    location.href = './cormano-ending.html';
}

function selectChoice() {
    choice = prompt(cormanoStories[position]);
    while (verifyChoice.indexOf(choice) === -1) {
        alert(`Por favor, digite uma opção válida.`)
        choice = prompt(cormanoStories[position]);
    }

    if ((position === 0 || position === 2) && choice === '1') {
        validate = true;
        console.log('entrou primeiro if')
    } else if ((position === 0 || position === 2) && choice === '2') {
        validate = false;
    } else if ((position === 1 || position === 3) && choice === '2') {
        validate = true;
        console.log('entrou segundo if')
    } else if ((position === 1 || position === 3) && choice === '1') {
        validate = false;
    }

    if (validate == true) {
        location.href = `./cormano${position}-1.html`;

    } else if (validate == false) {
        location.href = `../game-over.html`;
        alert('você perdeu');
    }
}