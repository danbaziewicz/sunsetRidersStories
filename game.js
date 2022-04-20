let choice;
let verifyCharacter = ['1', '2', '3'];
let verifyChoice = ['1', '2'];
let position = 0;
let selectionTxt = 'Escolha com qual personagem deseja jogar:\n1 - Steve\n2 - Bob\n3 - Cormano';
let validate;
let cormanoStories = ['1 - Seguir trilha de El Greco.\n2 - Continuar vagando e esperar outra oportunidade.', '1 - Aguardar o trem de nome Rustler & Thief R.R.\n2 - Tentar uma aproximação do Cran & Pew R.R.', '1 - Embarcar no trem e investigar\n2 - Retornar ao ponto anterior para esperar pelo Rustler & Thief R.R.', '\n1 - Saca suas armas e atira de imediato.\n2 - Corre para se posicionar e buscar um melhor ângulo.'];
let gameOverCormano = ['Você acaba em algum saloon, bêbado demais para notar a emboscada.', `Ao longe você percebe que o trem toma a bifurcação e segue como se fosse em direção ao toque do sol na linha do horizonte.\n
Você passa horas esperando até que houve um galopar de cavalos não longe de você. É uma armadilha e você está cercado.`, `Ao longe você percebe que o trem toma a bifurcação e segue como se fosse em direção ao toque do sol na linha do horizonte.
Você passa horas esperando até que houve um galopar de cavalos não longe de você. É uma armadilha e você está cercado.`, `Ao passo que você atira em direção a El Greco você percebe o escudo que este utiliza e bloqueia os projeteis. Você é, sem sombra de dúvidas, um dos mais rápidos do oeste, mas infelizmente você sabe que é impossível desviar do golpe que vem em sua direção. O golpe do chicote de El Greco atinge em cheio seu corpo, você consegue apenas ouvir, logo depois do estampido, a frase.\nAdios amigo.`];
let steveStories = [`1 - Seguir para o próximo saloon\n2 - Pedir outro drink`, `1 - Seguir caminho pelos montes de feno.\n2 - Voltar ao saloon e investigar a situação de calmaria`, `1 - Sacar as armas e ir para o combate.\n2 - Tentar entrar embaixo da pilha de fenos.`];
let gameOverSteve = [`Ao passo que você pede seu próximo drink você sente que já bebeu demais. Entre as passagens de garçonetes e outros clientes do saloon você sente sua cabeça ficar pesada e decide dormir à mesa.\nQue erro, você deveria saber que pessoas como você não podem ficar por muito tempo paradas, ou circulando em um mesmo lugar.\nA notícia de que você está sozinho na cidade chega aos ouvidos de alguém que não está contente em saber que você está vivo.\nUma armadilha é montada para você, infelizmente, agora é tarde demais.`, `Ao retornar ao saloon você se depara com uma emboscada...\nQue erro, você deveria saber que pessoas como você não podem ficar por muito tempo paradas, ou circulando em um mesmo lugar.\nA notícia de que você está sozinho na cidade chega aos ouvidos de alguém que não está contente em saber que você está vivo.
\nUma armadilha é montada para você, infelizmente, agora é tarde demais.`, `Você saca suas armas, mesmo ainda tonto com a pancada que acabara de levar. Infelizmente são muitos inimigos, com certeza alguém não está nem um pouco feliz com você rondando a cidade. Mas isso está para mudar, pois a sorte não está a seu favor hoje.\nVocê não consegue escapar dessa armadilha, talvez se você tivesse aguentado um pouco mais o destino poderia ser um tanto mais gentil.`,];
let bobStories = [`1 - Conversar com pessoas no saloon mais próximo.\n2 - Seguir caminho para outra vila.`, `1 - Descer do cavalo e adentrar a floresta para buscar um esconderijo.\n2 - Continuar na trilha e enfrentar os bandidos que vem.`, `1 - Entrar no portão e investigar.\n2 - Seguir pela estrada.`, `1 - Buscar reforços.\n2 - Adentrar a grande mansão.`, `1 - Entrar na mansão\n2 - Permanecer na parte externa`];
let gameOverBob = [`Ao entrar na taverna, você conversa com o dono do local e faz algumas perguntas referentes aos últimos eventos violentos na cidade. Tudo vai bem, o homem lhe oferece alguns drinks e a conversa é muito amigável. Você se sente sonolento e com os braços dormentes, antes de fechar os olhos, pela última vez, uma rosa é colocada em sua frente e você ouve a frase:\nSir Richard Rose mandou lembranças.`, `Você desce do seu cavalo na esperança de conseguir um bom lugar para se esconder, porém, você perde grande parte da sua agilidade. Mesmo conseguindo combater grande parte de seus inimigos seus esforços não são suficientes.`, `Assim que você consegue se espremer para passar pelas frestas e finalmente entrar você dá de cara com muitos capangas esperando por você.\nA desvantagem e muito grande e você não consegue retornar ao local que estava com rapidez suficiente.\nInfelizmente você não consegue sair daqui.`, `Você confia em sua sorte, o que não é tão típico seu, dado seu perfil analítico. Ao adentrar o grande complexo da mansão você da de cara com outra machine gun, dessa vez essa está posicionada de frente para você em um campo aberto, não há para onde correr. Você saca suas armas, derruba muitos de seus inimigos, você cai, levando muitos com você. Antes de partir você se pergunta o que teria acontecido se tivesse buscado reforços.\nAo fundo você ouve tiros e algumas vozes abafadas gritando algo sobre os Sunset Riders...`, `Ao tentar adentrar a mansão vocês se dividem, os corredores são extensos e parecem labirintos. A vantagem dos seus inimigos, aqui, é muito desproporcional e vocês não conseguem fazer um ataque coordenado.\nVocês chegaram tão perto que nem parecia que pudessem perder.`];

function playGame() {
    alert('Seja bem vindo(a)!\nPara jogar você precisa escolher entre as opções listadas.\nBasta digitar o número na caixa de texto que aparecerá na tela.\nBoa sorte!')
    choice = prompt(selectionTxt);
    while (verifyCharacter.indexOf(choice) === -1) {
        alert(`Por favor, digite uma opção válida.`)
        choice = prompt(selectionTxt);
    }
    if (choice === '1') {
        location.href = './/steveGame/steve.html';
    } else if (choice === '2') {
        alert('Em desenvolvimento. Jogue com Steve ou Cormano');
        //location.href = './/bobGame/bob.html';
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

function selectChoiceCormano() {
    choice = prompt(cormanoStories[position]);
    while (verifyChoice.indexOf(choice) === -1) {
        alert(`Por favor, digite uma opção válida.`)
        choice = prompt(cormanoStories[position]);
    }

    if ((position === 0 || position === 2) && choice === '1') {
        validate = true;
    } else if ((position === 0 || position === 2) && choice === '2') {
        validate = false;
    } else if ((position === 1 || position === 3) && choice === '2') {
        validate = true;
    } else if ((position === 1 || position === 3) && choice === '1') {
        validate = false;
    }

    if (validate == true) {
        location.href = `./cormano${position}-1.html`;

    } else if (validate == false) {
        location.href = `../game-over.html`;
        alert(gameOverCormano[position]);
    }
}

function selectChoiceSteve() {
    choice = prompt(steveStories[position]);
    while (verifyChoice.indexOf(choice) === -1) {
        alert(`Por favor, digite uma opção válida.`)
        choice = prompt(steveStories[position]);
    }

    if ((position === 0 || position === 1) && choice === '1') {
        validate = true;
    } else if ((position === 0 || position === 1) && choice === '2') {
        validate = false;
    } else if (position === 2 && choice === '2') {
        validate = true;
    } else if (position === 2 && choice === '1') {
        validate = false;
    }

    if (validate == true) {
        location.href = `./steve${position}.html`;

    } else if (validate == false) {
        location.href = `../game-over.html`;
        alert(gameOverSteve[position]);
    }
}

function selectChoiceBob() {
    choice = prompt(bobStories[position]);
    while (verifyChoice.indexOf(choice) === -1) {
        alert(`Por favor, digite uma opção válida.`)
        choice = prompt(bobStories[position]);
    }

    if ((position === 0 || position === 1) && choice === '1') {
        validate = true;
    } else if ((position === 0 || position === 1) && choice === '2') {
        validate = false;
    } else if (position === 2 && choice === '2') {
        validate = true;
    } else if (position === 2 && choice === '1') {
        validate = false;
    }

    if (validate == true) {
        location.href = `./bob${position}.html`;

    } else if (validate == false) {
        location.href = `../game-over.html`;
        alert(gameOverBob[position]);
    }
}