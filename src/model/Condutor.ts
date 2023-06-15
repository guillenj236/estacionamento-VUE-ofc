import { AbstractEntity } from "./AbstratctEntity";
export class Condutor extends AbstractEntity {
    nome!: string
    cpf!: string
    telefone!: string
    tempoPago?: TimeRanges
    tempoDesconto?: TimeRanges

    constructor(nome:string, cpf:string, tempoPago: TimeRanges, tempoDesconto: TimeRanges) {
        super();
        this.nome = nome
        this.cpf = cpf
        this.tempoPago = tempoPago
        this.tempoDesconto = tempoDesconto
}
}