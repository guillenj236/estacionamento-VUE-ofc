
import axios, { AxiosInstance } from 'axios';

import { Movimentacao } from "../model/Movimentacao"

class MovimentacaoClient {

    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async findById(id: number): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }

    public async listaAll(): Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }

    public async cadastrar(movimentacao: Movimentacao): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, movimentacao)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }
    public async editar(id: number, movimentacao: Movimentacao): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, movimentacao)).data
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

export default new MovimentacaoClient();