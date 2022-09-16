import { Cliente } from "./src/classes/cliente.js";
import { Externo } from "./src/namespace/cliente.js";
// let diarista = new Diarista("Paulo", 99999999999, "Av Teste n123");
// diarista.chavePix = "chave@chave";
// let cliente = new Cliente("Pedro", 99999999999, "Av Teste-teste n456");
// console.log(diarista);
// diarista.atenderDiarista("José");
// console.log(cliente);
// let diaria = new Diaria("10/02/2025", 5, 500);
// diaria.definirValor(500)
// console.log(diaria);
// let diarista = new Diarista('Paulo', 123, 'av.Paulista' )
// diarista.depositar(100);
// diarista.depositar(50);
// diarista.sacar(50);
// console.log(diarista);
// let cliente = new Cliente("Paulo", 123, "av.Paulista");
// cliente.saldo = 15;
// console.log(cliente);
// cliente.depositar(100);
// console.log(cliente)
// function realizarDeposito(pessoa: Saldo, valor: number){
//     pessoa.depositar(valor);
// }
// realizarDeposito(diarista, 100) ;
// console.log(diarista)
let cliente = new Cliente('Paulo', 123, 'Av Paulista');
let clienteExterno = new Externo.Cliente();
clienteExterno.autorizado = true;
console.log(cliente);
console.log(clienteExterno);
