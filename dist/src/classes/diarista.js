import { Pessoa } from "./pessoa.js";
export class Diarista extends Pessoa {
    constructor() {
        super(...arguments);
        this.saldo = 0;
    }
    atenderDiarista(clienteNome) {
        console.log(`Diarista ${this.nome} está atendendo o cliente ${clienteNome}`);
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
}
