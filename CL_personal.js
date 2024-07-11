export default class CL_persoanl {
    constructor(n, tP, sA) {
        this.nombre = n;
        this.tipoPersonal = tP;
        this.sueldoActual = sA;
    }

    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set tipoPersonal(tP) {
        this._tipoPersonal = tP;
    }
    get tipoPersonal() {
        return this._tipoPersonal;
    }
    set sueldoActual(sA) {
        this._sueldoActual = +sA;
    }
    get sueldoActual() {
        return this._sueldoActual;
    }
}