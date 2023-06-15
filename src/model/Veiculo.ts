import { AbstractEntity } from "./AbstratctEntity";
import { Modelo } from "./Modelo";
export class Veiculo extends AbstractEntity {
    placa!: string
    modelo?: Modelo
    cor?: Cor
    tipo?: Tipo
    ano?: Int16Array
    constructor(
        modelo: Modelo,
        cor: Cor,
        tipo: Tipo,
        ano: Int16Array
    ) {
        this.modelo = modelo
        this.cor = cor
        this.tipo = tipo
        this.ano = ano
    }
}