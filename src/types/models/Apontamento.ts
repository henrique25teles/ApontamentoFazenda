import CentroCusto from "./CentroCusto";
import Evento from "./Evento";
import ApontamentoItem from "./ApontamentoItem";

export default interface Apontamento {
    id?: number
    centroCusto: number
    evento: number
    apontamentoItens: Array<ApontamentoItem>
    dataHoraInicio?: Date
    isIniciado: boolean
    isPausado: boolean
    isFinalizado: boolean
}