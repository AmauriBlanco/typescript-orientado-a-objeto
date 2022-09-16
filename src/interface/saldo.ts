export interface Saldo {
  saldo: number;
  depositar(valor: number): void;
  sacar(valor: number): void;
}