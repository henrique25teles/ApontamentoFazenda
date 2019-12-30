import Apontamento from "types/models/Apontamento";

export enum ApontamentosActionTypes {
    ADD_APONTAMENTO = '@apontamentos/ADD_APONTAMENTO',
    UPDATE_APONTAMENTO = '@apontamentos/UPDATE_APONTAMENTO',
    DELETE_APONTAMENTO = '@apontamentos/DELETE_APONTAMENTO',
    SYNC_APONTAMENTO = '@apontamentos/SYNC_APONTAMENTO',
    DELETE_ALL = '@apontamentos/DELETE_ALL',
}

export interface ApontamentoAction<T = any> {
    type: ApontamentosActionTypes
    payload?: T
}

export default interface ApontamentosState {
    all: Array<Apontamento>
}