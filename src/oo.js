"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome}`;
    }
}
//modificadores
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0; // herdeiras nao podem acessar, acessado apenas dentro da classe
        this.saldo1 = 0; // herdeiras podem acessar
        this.numeroConta = 0;
        this.numeroConta = numeroConta;
    }
    // static pertence a classe e nao a instacia
    static retornaNumeroBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    //polimorfismo
    depositar(valor) {
        this.saldo += valor;
    }
}
//Herança
class ContaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        //polimorfismo: metodo que vem da classe pai 
        this.saldo1 = valor * 2;
    }
}
const contaDoPedro = new ContaPessoaFisica(123456);
//Encapsulamento: niveis de acesso publico privado estatico e protegido
