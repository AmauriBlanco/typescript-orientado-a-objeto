import { Atendimento } from "./atendimento.js";

export class Diaria extends Atendimento {
        public definirValor(valor: number) {
        if (valor < 1) {
          return console.log("Tempo deve ser maior que 0");
        }
        return (this.valor = valor);
    }
}