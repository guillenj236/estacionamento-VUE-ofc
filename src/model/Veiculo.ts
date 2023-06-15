import { AbstractEntity } from "./AbstratctEntity";
import { Modelo } from "./Modelo";

export class Veiculo extends AbstractEntity {
    placa!: string
    modelo?: Modelo
    cor?: Cor
    tipo?: Tipo
    ano?: number
    constructor(
        modelo: Modelo,
        cor: Cor,
        tipo: Tipo,
        ano: number
    ) {
        super();
        this.modelo = modelo
        this.cor = cor
        this.tipo = tipo
        this.ano = ano
    }
}