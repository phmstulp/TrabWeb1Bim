import { Estado } from "./estado";
import { Cep } from "./cep";

export class Cidade {
	public id: number;
    public nome: string;
    public cepList: Array<Cep>; 
    public estado: Estado;   
}