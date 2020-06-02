
class LaboratorioHugo {

    constructor() {
        this.operaciones = [
            { nombre: "suma", operador: "+" },
            { nombre: "resta", operador: "-" },
            { nombre: "multiplicaciòn", operador: "*" },
            { nombre: "divisiòn", operador: "/" }
        ];
    }
    /**
     * Funciòn que realiza lo pedido en el punto 1 del laboratorio
     */
    punto1(val1, val2) {
        var value1 = val1;
        var value2 = val2;
        /**
         * Debemos tener mucho cuidado con el uso de la funciòn "eval", no me gusta en lo personal, pero para efectos del lab se ajusta bien. 
         */
        this.operaciones.forEach((row) => (
            console.log(`La ${row.nombre} entre ${value1} y ${value2} es:  ${eval(`${value1} ${row.operador} ${value2}`)}`)
        ));
        console.log("***************************");
    }
    /**
     * Funciòn que realiza lo pedido en el punto 2 del laboratorio
     */
    punto2(val1, val2) {
        let value1 = val1;
        let value2 = val2;
        console.log(`La concatenaciòn entre "${value1}" & "${value2}" es: ${value1}${value2}`);
        console.log("***************************");
    }
    /**
     * Funciòn que realiza lo pedido en el punto 3 del laboratorio
     */
    punto3() {
        const obj = {
            entero: 1,
            cadena: "Esto es una cadena",
            bol: true,
            subObj: {}
        }
        console.log("Esto es un Objeto: ", obj);
        console.log("***************************");
    }

}

const lab = new LaboratorioHugo();
lab.punto1(5, 5);
lab.punto2("MAMA ME ESTOY", " ORINANDO");
lab.punto3();