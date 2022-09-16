import { Pessoa } from "./pessoa.js";
export class Cliente extends Pessoa {
    constructor() {
        super(...arguments);
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor * 1.1;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
}
