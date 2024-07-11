/*En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
* determinar cuál es el monto promedio que paga por cada tipo de personal.
* Al ser consultada por la forma como desean que se presente la salida,
* la empresa suministra el siguiente formato, informando que Juan (obrero) actualmente gana $100,
* Ana (obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50
* y Carlos (administrativo) gana $150:
* Monto total pagado a obreros: $270
* Promedio pagado a 3 obreros: $90
* Monto total pagado a administrativos: $350
* Promedio pagado a 2 administrativos: $175
*/

import CL_persoanl from "./CL_personal.js";
import CL_empresa from "./CL_empresa.js";

let personal1 = new CL_persoanl("Juan", "obrero", 100);
let personal2 = new CL_persoanl("Ana", "obrero", 120);
let personal3 = new CL_persoanl("Lin", "admi", 200);
let personal4 = new CL_persoanl("Mary", "obrero", 50);
let personal5 = new CL_persoanl("CArlos", "admi", 150);
let empresa = new CL_empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br> Monto total pagado a obreros: ${empresa.montoPagoObrero()}$
<br> Promedio pagado a 3 obreros: ${empresa.promedioPagoObrero()}$
<br> Monto total pagado a administrativos: ${empresa.montoPagoAdmi()}$
<br> Promedio pagado a 2 administrativos: ${empresa.promedioPagoAdmi()}$
`