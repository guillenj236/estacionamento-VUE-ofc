import { AbstractEntity } from "@/model/AbstratctEntity";
export class Configuracao extends AbstractEntity {
    valorHora?: BigInt
    valorMinutoMulta?: BigInt
    inicioExpediente?: TimeRanges
    fimExpediente?: TimeRanges
    tempoParaDesconto?: TimeRanges
    tempoDeDesconto?: TimeRanges
    gerarDesconto?: boolean
    vagasCarro?: number
    vagasMoto?: number
    vagasVan?: number
    constructor(
        valorHora: BigInt,
        valorMinutoMulta: BigInt,
        inicioExpediente: TimeRanges,
        fimExpediente: TimeRanges,
        tempoParaDesconto: TimeRanges,
        tempoDeDesconto: TimeRanges,
        gerarDesconto: boolean,
        vagasCarro: number,
        vagasMoto: number,
        vagasVan: number
    ) {
        super();
        this.valorHora = valorHora
        this.valorMinutoMulta = valorMinutoMulta
        this.inicioExpediente = inicioExpediente
        this.fimExpediente = fimExpediente
        this.tempoParaDesconto = tempoParaDesconto
        this.tempoDeDesconto = tempoDeDesconto
        this.gerarDesconto = gerarDesconto
        this.vagasCarro = vagasCarro
        this.vagasMoto = vagasMoto
        this.vagasVan = vagasVan
    }
}