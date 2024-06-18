import { BancoModel } from "./banco.model";
import { EsporteModel } from "./esporte.model";
import { ParticipanteModel } from "./participante.model";

export class Boletim{

    nome !:string;
    cpf !:string;
    email !:string;
    idade !:number;
    observacao !: string;
    esposaNome !:string;
    esposaDocumento !:string;
    esposaEmail !:string;
    esposaIdade !:number;
    esposaObservacao !: string;
    filhaNome !:string;
    filhaDocumento !:string;
    filhaEmail !:string;
    filhaIdade !:number;
    filhaObservacao !: string;
    
    resumo?:string;

    participante: ParticipanteModel = new ParticipanteModel();
    esportes :any = [];
    bancos : any = [];
    documentos : any = [];

    historico?:string;

    constructor() {

    }

}