// Esta classe possui múltiplas responsabilidades
// e será refatorada para seguir o princípio SRP.
class OmniAI {
    gerarTexto() {
        console.log("Gerando texto...");
    }

    gerarImagem() {
        console.log("Gerando imagem...");
    }

    cobrarPix() {
        console.log("Pagamento PIX");
    }
}

const sistema = new OmniAI();

sistema.gerarTexto();
sistema.gerarImagem();
sistema.cobrarPix();