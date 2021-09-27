// Partís de una margarita de número variable de pétalos.
// Deshojar la margarita significa arrancarle un pétalo cada segundo (tip: pensad en setInterval())
// Cada pétalo "arrancado" significa imprimir en pantalla "me quiere!" o "no me quiere!!!".
// El programa resolverá con el valor último pintado en AZUL si me quiere o en ROJO si no me quiere (tip: chalk)
// Detalles
// Devuelve una promesa con el mensaje que toque y encadena la impresión por la consola.

// import { red, blue } from 'nanocolors';
import chalk from 'chalk';
// const deshojarLaMargarita = async () => {
//     let message = 'me quiere';
//     let petals = Math.floor(Math.random()*12 + 1);
//     // console.log(petals);
//     let resultado = await new Promise((resolve, reject) => {
//         const id = setInterval(() => {
//             console.log(message);
//             message = (message == 'me quiere') ? 'no me quiere' : 'me quiere';
//             petals--;
//             if (petals == 1) {
//                 clearInterval(id);
//                 if(message == 'me quiere'){
//                 resolve(message)
//             }else {
//                 reject(message)
//             }
//             }
//         }, 10)
//     })
//     return resultado;
// }

// const printBlue = (mensaje) => console.log(blue(mensaje));
// const printRed =  (mensaje) => console.log(red (mensaje));

// (() => deshojarLaMargarita()
//             .then(printBlue)
//             .catch(printRed)
// )()

export default class DaisyGame {

    async play() {
        try {
            this.message = 'me quiere';
            let result = await this.deshojarMargarita();
            this.printBlue(result);

        } catch (error) {
           this.printRed(error);
        }
    }

    async deshojarMargarita() {
        this.setPetals();
        // return new Promise(this.startInterval.bind(this));
        let resultado = await new Promise(this.startInterval.bind(this));
        return resultado;
    }
    startInterval(resolve, reject) {

        const id = setInterval(() => {
            console.log(this.message);
            this.petals--;
            if (this.petals == 0) {
                clearInterval(id);
                if (this.message == 'me quiere') {
                    resolve(this.message)
                } else {
                    reject(this.message)
                }
            }
            this.setMessage();

        })
    }
    setMessage() {
        this.message = (this.message == 'me quiere') ? 'no me quiere' : 'me quiere';
    }
    setPetals() {
        this.petals = Math.floor(Math.random() * 12 + 1);
    }
    printBlue(message){
        console.log(chalk.blue(message));
    }    
    printRed (message){
        console.log(chalk.red(message));
    }
}

 let daisy = new DaisyGame();
 daisy.play();