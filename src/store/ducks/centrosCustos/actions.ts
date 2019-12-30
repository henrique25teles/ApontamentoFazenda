import {action} from 'typesafe-actions'

import CentroCusto from 'types/models/CentroCusto'
import { CentrosCustosActionTypes, CentroCustoAction } from 'types/store/CentrosCustosState'

const addCentroCusto = (payload: CentroCusto) => action(CentrosCustosActionTypes.ADD_CENTROCUSTO, payload)

const updateCentroCusto = (payload: CentroCusto) => action(CentrosCustosActionTypes.UPDATE_CENTROCUSTO, payload)

const deleteCentroCusto = (payload: CentroCusto) => action(CentrosCustosActionTypes.DELETE_CENTROCUSTO, payload)

const loadCentrosCustos = () => action(CentrosCustosActionTypes.LOAD_CENTROSCUSTOS)

const updateTodosCentrosCustos = (payload: CentroCusto[]) => action(CentrosCustosActionTypes.UPDATE_ALL, payload)

const deletaTodosCentrosCustos = (): CentroCustoAction => action(CentrosCustosActionTypes.DELETE_ALL)

export { 
    addCentroCusto, 
    updateCentroCusto, 
    deleteCentroCusto, 
    loadCentrosCustos,
    updateTodosCentrosCustos, 
    deletaTodosCentrosCustos 
}