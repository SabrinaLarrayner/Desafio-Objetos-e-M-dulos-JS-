import * as oderService from "./oder-services.js"
import * as shipping from "./shipping-service.js"

export function desconto01(oder) {
    const desc = oderService.descontoPercentual(oder);
    const Fre = shipping.descontoFrete(oder.basicValue);
    return Number(oder.basicValue) - desc + Fre;
}
