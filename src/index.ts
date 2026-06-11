class OmniAI {
    gerarTexto() {
        console.log("Gerando texto com IA...");
    }

    gerarImagem() {
        console.log("Gerando imagem com IA...");
    }

    cobrarPix() {
        console.log("Pagamento realizado via PIX");
    } 

    cobrarCartao() {
        console.log("Pagamento realizado via Cartão");
    }
}

const sistema = new OmniAI();

sistema.gerarTexto();
sistema.gerarImagem();
sistema.cobrarPix();