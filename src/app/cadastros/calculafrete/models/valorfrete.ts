import { Estado } from '../models/estado';

export class ValorFrete {
    public id: number;
    public estadoOrigem: Estado;
    public estadoDestino: Estado;
    public valor: number;
}