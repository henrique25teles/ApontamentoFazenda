import Apontamento from "types/models/Apontamento";

export enum ApontamentosSelecionadoActionTypes {
    CHANGE_CENTRO_CUSTO_APONTAMENTO = '@apontamentoSelecionado/CHANGE_CENTRO_CUSTO_APONTAMENTO',
    CHANGE_EVENTO_APONTAMENTO = '@apontamentoSelecionado/CHANGE_EVENTO_APONTAMENTO',
    INICIA_APONTAMENTO = '@apontamentoSelecionado/INICIA_APONTAMENTO',
    PAUSA_APONTAMENTO = '@apontamentoSelecionado/PAUSA_APONTAMENTO',
    RETOMA_APONTAMENTO = '@apontamentoSelecionado/RETOMA_APONTAMENTO',
    FINALIZA_APONTAMENTO = '@apontamentoSelecionado/FINALIZA_APONTAMENTO',
}

export interface ApontamentoSelecionadoAction<T = any> {
    type: ApontamentosSelecionadoActionTypes
    payload?: T
}

export default interface ApontamentosSelecionadoState extends Apontamento { }