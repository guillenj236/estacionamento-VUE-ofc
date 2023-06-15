import { AbstractEntity } from "./AbstratctEntity";
export class Marca extends AbstractEntity {
    nome?: string
    constructor(nome: string) {
        super();
        this.nome = nome
    }
}