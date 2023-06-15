import { AbstractEntity } from "./AbstratctEntity";
import { Condutor } from "./Condutor";
import { Veiculo } from "./Veiculo";
export class Movimentacao extends AbstractEntity {
    veiculo!: Veiculo
    condutor!: Condutor
    entrada?: Date
    saida?: Date
    tempo?: TimeRanges
    tempoDesconto?: TimeRanges
    tempoMulta?: TimeRanges
    valorDesconto?: BigInt
    valorMulta?: BigInt
    valorHora?: BigInt
    valorTotal?: BigInt
    valorHoraMulta?: BigInt
    constructor(
        entrada: Date,
        saida: Date,
        tempo: TimeRanges,
        tempoDesconto: TimeRanges,
        tempoMulta: TimeRanges,
        valorDesconto: BigInt,
        valorMulta: BigInt,
        valorHora: BigInt,
        valorTotal: BigInt,
        valorHoraMulta: BigInt
    ) {
        super();
        this.entrada = entrada
        this.saida = saida
        this.tempo = tempo
        this.tempoDesconto = tempoDesconto
        this.tempoMulta = tempoMulta
        this.valorDesconto = valorDesconto
        this.valorMulta = valorMulta
        this.valorHora = valorHora
        this.valorTotal = valorTotal
        this.valorHoraMulta = valorHoraMulta
    }
}