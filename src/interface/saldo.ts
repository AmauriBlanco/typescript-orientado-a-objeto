export interface Saldo {
  depositar(valor: number): void;
  sacar(valor: number): void;
}