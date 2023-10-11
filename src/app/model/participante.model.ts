import { CaracteristicaModel } from "./caracteristica.model";
import { LocalizacaoModel } from "./localizacao.models";

export class ParticipanteModel {
    nome:string = "";
    nascimento :string = "";
    caracteristicas:CaracteristicaModel = new CaracteristicaModel();
    // enderecos:LocalizacaoModel = new LocalizacaoModel();
    enderecos:Array<LocalizacaoModel> = Array<LocalizacaoModel>()
}