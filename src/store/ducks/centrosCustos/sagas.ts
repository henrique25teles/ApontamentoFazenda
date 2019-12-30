import {call, put} from 'redux-saga/effects'

import api from 'services/api'
import { updateTodosCentrosCustos } from 'store/ducks/centrosCustos/actions'
import CentroCusto from 'types/models/CentroCusto'

export function* loadCentrosCustos() {
    try{
        //Requisição
        //const response = yield call(api.post, 'métodoRequisição')

        ///Resto do possível código
        const centrosCustos: Array<CentroCusto> = [
            { id: 0, descricao: 'Selecione'},
            { id: 1, descricao: 'geral'},
            { id: 2, descricao: 'centro 2'},
            { id: 3, descricao: 'Jair baitola'},
        ]

        yield put(updateTodosCentrosCustos(centrosCustos))
    } catch(err) {
        
    }
}