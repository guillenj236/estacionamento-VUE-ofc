import { AbstractEntity } from "../model/AbstractEntity"

export class Condutor extends AbstractEntity {
    nome!: string
    cpf!: string
    telefone!: string
    tempoPago?: Date
    tempoDesconto?: Date

}
