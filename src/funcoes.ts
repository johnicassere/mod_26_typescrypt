function calculaArea(base :number ,altura: number): number{

    return base * altura
}

const calculaArea2 = (base: number, altura: number): number => base * altura

// void retorno vazio
function somar(...numeros: number[]): void {
    //numeros.reduce()
    console.log(numeros);
    
}

function teste(): string | number{
    if(10 > 5){
        return 'dez é maior que cinco'
    } else{
        return 5
    }
}

const resultadoTeste = teste()

