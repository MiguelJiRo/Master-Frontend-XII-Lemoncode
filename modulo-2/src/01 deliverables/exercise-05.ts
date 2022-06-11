console.log("************** DELIVERABLE 05 *********************");

console.log('5. Slot Machine');

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases 
// donde cada vez que juguemos insertemos una moneda.Cada máquina tragaperras(instancia) 
// tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática 
// y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
// El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto 
// deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";

// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. 
// En caso contrario deberá mostrar otro mensaje:

// "Good luck next time!!".

class SlothMachine {

    private coinCount: number;

    constructor() {
        this.coinCount = 0;
    }

    private throwRoulette() {
        const firstBoolean: boolean = (Math.random() < 0.5);
        const secondBoolean: boolean = (Math.random() < 0.5);
        const thirdBoolean: boolean = (Math.random() < 0.5);

        return (firstBoolean && secondBoolean && thirdBoolean);
    }

    private winner() {
        console.log('Congratulations!!!. You won', this.coinCount, 'coins!!');
        this.coinCount = 0;
    }

    private losser() {
        console.log('Good luck next time!!');
        this.coinCount++;
    }

    public play() {
        if (this.throwRoulette()) {
            this.winner();
        }
        else {
            this.losser();
        }
    }
}

const machine1 = new SlothMachine();
const machine2 = new SlothMachine();
console.log('machine1 =>');
for (let index = 0; index < 10; index++) {
    machine1.play();
}
console.log('machine2 =>');
for (let index = 0; index < 10; index++) {
    machine2.play();
}