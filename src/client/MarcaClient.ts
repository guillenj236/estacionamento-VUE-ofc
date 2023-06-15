import axios, { AxiosInstance } from 'axios';

import { Marca } from "/Users/guill/OneDrive/Documentos/Desenvolvimento/estacionamento-client/my_project/src/model/Marca"

export class MarcaClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.post('/', marca))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${marca.id}`, marca)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.put(`/desativar/${marca.id}`, marca)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
}