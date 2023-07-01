import { AbstractEntity } from "../model/AbstractEntity";
import {Cor} from '../model/Cor'
import { Modelo } from "../model/Modelo";
import { Tipo } from "../model/Tipo";

export class Veiculo extends AbstractEntity {
  
    placa!: String
    modelo!: Modelo
    ano!: number
    cor!: Cor
    tipo!: Tipo
 
}