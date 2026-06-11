class ServicoCobranca {
    cobrar(usuarioId: string, valor: number): void {
        console.log(
            `Cobrando R$${valor} do usuário ${usuarioId}`
        );
    }
}