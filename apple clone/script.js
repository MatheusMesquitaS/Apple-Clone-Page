const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')


const verdeCipreste = {
    nome: 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno'

}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'

}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'

}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'

}

const opcaoCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro
]

const opcaoTamanho = ['41 mm', '45 mm']

let imageSelected = 1;
let tamanhoSelected = 1;
let corSelected = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector("[name = 'opcao-imagem']:checked").id;
    imageSelected = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcaoCores[corSelected].pasta + '/imagem-' + imageSelected + '.jpeg';

}


function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelected = idOpcaoSelecionada.charAt(0);
    // tituloProduto.innerText = "Pulseira loop esportiva " + opcaoCores[corSelected].nome  + " para caixa de " + opcaoTamanho[tamanhoSelected];

    if (opcaoTamanho[tamanhoSelected] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}



function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelected = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva " + opcaoCores[corSelected].nome + " para caixa de " + opcaoTamanho[tamanhoSelected];
    nomeCor.innerText = 'Cor - ' + opcaoCores[corSelected].nome;
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcaoCores[corSelected].pasta +'/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcaoCores[corSelected].pasta +'/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcaoCores[corSelected].pasta +'/imagem-2.jpeg';
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcaoCores[corSelected].pasta + '/imagem-' + imageSelected + '.jpeg';


}
