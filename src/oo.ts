class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string , renda?: number){//modificadores
        this.nome = nome
        this.renda = renda
    }

    dizOla(): string{
        return `${this.nome}`
    }
}

//modificadores

class ContaBancaria {
    private saldo: number = 0; // herdeiras nao podem acessar, acessado apenas dentro da classe
    protected saldo1: number = 0; // herdeiras podem acessar

    numeroConta = 0;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta
    }
    // static pertence a classe e nao a instacia
    static retornaNumeroBanco (){
        return 125;
    }
    private getSaldo(){
        return this.saldo
    }

    //polimorfismo
    depositar(valor: number){
        this.saldo += valor;
    }

}


//Herança
class ContaPessoaFisica extends ContaBancaria {
        depositar(valor: number): void {
            //polimorfismo: metodo que vem da classe pai 
            this.saldo1 = valor * 2
            
        }
}

const contaDoPedro = new ContaPessoaFisica(123456)



//Encapsulamento: niveis de acesso publico privado estatico e protegido
