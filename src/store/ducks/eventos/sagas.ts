import {call, put} from 'redux-saga/effects'

import api from 'services/api'
import { updateTodosEventos } from 'store/ducks/eventos/actions'
import Evento from 'types/models/Evento'

export function* loadEventos() {
    try{
        //Requisição
        //const response = yield call(api.post, 'métodoRequisição')

        ///Resto do possível código
        const eventos: Array<Evento> = [
            { id: 0, descricao: 'Celecione', turma: 'Turma teste 1'},
            { id: 1, descricao: 'Eventi 1', turma: 'Turma teste 4'},
            { id: 2, descricao: 'evento 2', turma: 'Turma teste 3'},
            { id: 3, descricao: 'Evento 3', turma: 'Turma teste 8'},
            { id: 4, descricao: 'Evento 4', turma: 'Turma teste 7'},
            { id: 5, descricao: 'Evento 5', turma: 'Turma teste 84'},
            { id: 6, descricao: 'Evento 6', turma: 'Turma teste 43'},
            { id: 7, descricao: 'Evento 7', turma: 'Turma teste 44'},
        ]

        yield put(updateTodosEventos(eventos))
    } catch(err) {
        
    }
}