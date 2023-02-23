import { Order } from "./JS/Models/oder.js";
import * as SaidaFinal from './JS/Services/saida.js'
const newOderService = document.getElementById("newOderService").innerHTML.split("\n");
const order = new Order(newOderService[0], newOderService[1], newOderService[2]);
const desconto = SaidaFinal.desconto01(order)
console.log(`Pedido código: ${order.code}`)
console.log(`Valor total: R$ ${desconto}`)