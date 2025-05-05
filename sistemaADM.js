class Queue {
    constructor(){
        this.itens = [];
    }

    enfileirar(item) {
        this.itens.push(item);
        console.log(`${item} entrou na fila`);
    }

    desenfileirar(item) {
        if (this.estaVazia()) {
            console.log("A fila está vazia");
            return null
        }

        const removido = this.itens.shift();
        console.log(`${removido} foi atendido`);
        return removido;
    }

    frente() {
        return console.log(`O próximo a ser atendido será: ${this.itens[0]}`);
      }

    imprimir() {
      console.log('Fila atual:', this.itens.join(' -> ') || 'vazia');
    }


    estaVazia() {
        return this.itens.length === 0;
      }

}



class Pilha {
    constructor(){
        this.itens = [];
    }



    empilhar(item) {
        this.itens.push(item);
        console.log(`Documento "${item}" foi adicionado`);
    }


    desempilhar() {
        if (this.estaVazia()) {
            console.log(`A pilha de documentos está vazia.`);
            return null;
        }
        const removido = this.itens.pop();
        console.log(`Documento "${removido}" resolvido.`);
        return removido;
    }


    imprimir() {
        console.log('Pilha de documentos pendentes:', this.itens.join(' -> ') || 'vazia');
    }

    estaVazia() {
        return this.itens.length === 0;
    }
}

const fila = new Queue();

fila.enfileirar("Yan");
fila.enfileirar("João Cardoso");
fila.enfileirar("Christian");

const pilha = new Pilha();

pilha.empilhar("Histórico Escolar");
pilha.empilhar("Matrícula");
pilha.empilhar("Comprovante de bolsa");
fila.desenfileirar();
pilha.desempilhar();
fila.frente();
fila.imprimir();