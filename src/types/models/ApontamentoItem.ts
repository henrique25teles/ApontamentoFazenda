import ApontamentoQuantidade from "./ApontamentoQuantidade";
import Funcionario from "./Funcionario";

export default interface ApontamentoItem {
    id: number
    funcionario: Funcionario
    apontamentoQuantidades: Array<ApontamentoQuantidade>
}