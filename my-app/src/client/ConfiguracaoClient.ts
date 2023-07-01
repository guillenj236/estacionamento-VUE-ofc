
import axios, { AxiosInstance } from 'axios';

import { Configuracao} from "../model/Configuracao"

class ConfiguracaoClient {

    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async findById(id: number): Promise<Configuracao> {
        try {
            return (await this.axiosClient.get<Configuracao>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }

    public async listaAll(): Promise<Configuracao[]> {
        try {
            return (await this.axiosClient.get<Configuracao[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }

    public async cadastrar(configuracao: Configuracao): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, configuracao)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }
    public async editar(id: number, configuracao: Configuracao): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, configuracao)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }
    public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }
}

export default new ConfiguracaoClient();