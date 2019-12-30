import {action} from 'typesafe-actions'

import Apontamento from 'types/models/Apontamento'
import { ApontamentosActionTypes, ApontamentoAction } from 'types/store/ApontamentosState'

const addApontamento = (payload: Apontamento) => action(ApontamentosActionTypes.ADD_APONTAMENTO, payload)

const updateApontamento = (payload: Apontamento) => action(ApontamentosActionTypes.UPDATE_APONTAMENTO, payload)

const deleteApontamento = (payload: Apontamento) => action(ApontamentosActionTypes.DELETE_APONTAMENTO, payload)

const sincronizaApontamento = (payload: Apontamento) => action(ApontamentosActionTypes.SYNC_APONTAMENTO, payload)

const deletaTodosApontamentos = (): ApontamentoAction => action(ApontamentosActionTypes.DELETE_APONTAMENTO)

export { 
    addApontamento, 
    updateApontamento, 
    deleteApontamento,
    sincronizaApontamento,
    deletaTodosApontamentos 
}
