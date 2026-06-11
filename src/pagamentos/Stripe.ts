import type { ICobranca } from "./ICobranca.js";

export class Stripe implements ICobranca {
    cobrar(usuarioId: string, valor: number): void {
        console.log(`Stripe cobrando R$${valor}`);
    }
}