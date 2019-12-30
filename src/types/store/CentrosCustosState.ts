import CentroCusto from "types/models/CentroCusto";

export enum CentrosCustosActionTypes {
    ADD_CENTROCUSTO = '@centrosCustos/ADD_CENTROCUSTO',
    UPDATE_CENTROCUSTO = '@centrosCustos/UPDATE_CENTROCUSTO',
    DELETE_CENTROCUSTO = '@centrosCustos/DELETE_CENTROCUSTO',
    UPDATE_ALL = '@centrosCustos/UPDATE_ALL',
    DELETE_ALL = '@centrosCustos/DELETE_ALL',
}

export interface CentroCustoAction<T = any> {
    type: CentrosCustosActionTypes
    payload?: T
}

export default interface CentrosCustosState {
    all: Array<CentroCusto>
}