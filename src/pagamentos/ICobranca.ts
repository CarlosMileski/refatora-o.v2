export interface ICobranca {
    cobrar(usuarioId: string, valor: number): void;
}