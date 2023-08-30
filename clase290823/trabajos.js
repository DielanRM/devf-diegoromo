//ejercicio de Pila
/*class Stack {
    constructor(){
        this.items = []//usamos un arreglo para poder almacenar los datos en una pila
    }

    push(item){
        this.items.push(item); //(agrega al final de la pila un elemento) este es el propio de ecmascript para guardardatos en un arreglo    
    }

    pop(){
        if (this.isEmpty()){//el metodo isEmpty es una erramienta que ayudara mas tarde para saber si la pila estaa vacia
            return `la pila esta vacia`;
        }
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1]//el -1 es porque las posiciones comienzan en el numero 0
    }

    size(){
        return this.items.length; //devuele el numero de elementos que tenemos en la pila
    }

    isEmpty(){
        return this.items.length === 0; //verifica si la pila esta vacia
    }
}

//Uso de la pila
const pila = new Stack();

pila.push(95);
pila.push(66);
pila.push(22);
pila.push(37);
pila.push(77);
pila.push(19);

console.log(pila);

console.log(pila.pop());//19
console.log(pila);
console.log(pila.peek());
console.log(pila);
console.log(pila.size());
*/

class Queue{
    constructor(){
        this.items = []; //arreglo en el que metemos nuestros elementos
    }

    enqueue(item){
        this.items.push(item);// agrega un elemento al final de la cola
    }

    dequeue(){//desencolar
        if(this.isEmpty){
            return `esta cola esta limpia`;
        }
        return this.items.shift();// 
    }

    front(){
        return this.items[0] //devuelve el primer elemento sin eliminar elementos de la cola
    }

    isEmpty(){
        return this.items.length === 0;
    }
}








