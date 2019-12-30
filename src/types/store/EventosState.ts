import Evento from "types/models/Evento";

export enum EventosActionTypes {
    ADD_EVENTO = '@eventos/ADD_EVENTO',
    UPDATE_EVENTO = '@eventos/UPDATE_EVENTO',
    DELETE_EVENTO = '@eventos/DELETE_EVENTO',
    LOAD_EVENTOS = '@eventos/LOAD_EVENTOS',
    UPDATE_ALL = '@eventos/UPDATE_ALL',
    DELETE_ALL = '@eventos/DELETE_ALL',
}

export interface EventoAction<T = any> {
    type: EventosActionTypes
    payload?: T
}


export default interface EventosState {
    all: Array<Evento>
}