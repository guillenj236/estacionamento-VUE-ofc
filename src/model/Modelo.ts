import { AbstractEntity } from "./AbstratctEntity";
import { Marca } from "./Marca";
export class Modelo extends AbstractEntity {
    nome!: string
    marca?: Marca
    constructor(marca: Marca, nome:string) {
        this.nome = nome
        this.marca = marca
    }
}