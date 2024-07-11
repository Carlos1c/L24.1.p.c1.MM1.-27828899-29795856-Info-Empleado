export default class CL_empresa {
    constructor() {
        this.cntPeronal = 0;
        this.cntPerObre = 0;
        this.cntPerAdmi = 0;
        this.sueldoObrero1 = 100;
        this.sueldoObrero2 = 120;
        this.sueldoObrero3 = 50;
        this.sueldoAdmi1 = 200;
        this.sueldoAdmi2 = 150;
    }

    procesarPersonal(personal) {
        this.cntPeronal++;
        if (personal.tipoPersonal >= 1) {
            this.cntPerObre++;
        }
        if (personal.tipoPersonal >= 1) {
            this.cntPerAdmi++;
        }
    }

    montoPagoObrero() {
        return this.sueldoObrero1 + this.sueldoObrero2 + this.sueldoObrero3;
    }
    promedioPagoObrero() {
        return (this.sueldoObrero1 + this.sueldoObrero2 + this.sueldoObrero3) / 3;
    }

    montoPagoAdmi() {
        return this.sueldoAdmi1 + this.sueldoAdmi2;
    }
    promedioPagoAdmi() {
        return (this.sueldoAdmi1 + this.sueldoAdmi2) / 2;
    }
}