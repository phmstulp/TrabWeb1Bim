import { Cidade } from '../models/cidade';

export class Estado {
    public id: number;
    public sigla: string;
    public nome: string;
    public cidadeList: Array<Cidade>;      
}
