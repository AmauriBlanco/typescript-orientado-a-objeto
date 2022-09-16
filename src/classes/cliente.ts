import { Saldo } from "../interface/saldo.js";
import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa implements Saldo{
    private saldo!: number;

    depositar(valor:number) {
        this.saldo = this.saldo + valor * 1.1;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }
}
