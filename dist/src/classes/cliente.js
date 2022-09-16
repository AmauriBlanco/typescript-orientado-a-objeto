import { Pessoa } from "./pessoa.js";
export class Cliente extends Pessoa {
    depositar(valor) {
        this.saldo = this.saldo + valor * 1.1;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
}
