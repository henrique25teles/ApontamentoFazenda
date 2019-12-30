import {action} from 'typesafe-actions'

import Evento from 'types/models/Evento'
import { EventosActionTypes, EventoAction } from 'types/store/EventosState'

const addEvento = (payload: Evento) => action(EventosActionTypes.ADD_EVENTO, payload)

const updateEvento = (payload: Evento) => action(EventosActionTypes.UPDATE_EVENTO, payload)

const deleteEvento = (payload: Evento) => action(EventosActionTypes.DELETE_EVENTO, payload)

const updateTodosEventos = (payload: Evento[]) => action(EventosActionTypes.UPDATE_ALL, payload)

const deletaTodosEventos = () => action(EventosActionTypes.DELETE_EVENTO)

export { addEvento, updateEvento, deleteEvento, updateTodosEventos, deletaTodosEventos }