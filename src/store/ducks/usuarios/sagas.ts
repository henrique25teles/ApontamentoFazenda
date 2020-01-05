import {call, put} from 'redux-saga/effects'

import api from 'services/api'
import { updateAllUsuarios } from 'store/ducks/usuarios/actions'
import Usuario from 'types/models/Usuario'

export function* loadUsuarios() {
    try{
        //Requisição
        //const response = yield call(api.post, 'métodoRequisição')

        ///Resto do possível código
        const usuarios: Array<Usuario> = [
            { id: 1, nome: 'Henrique', senha: '123456'},
            { id: 2, nome: 'Bon jovi', senha: '123456'},
            { id: 3, nome: 'Ratatouile', senha: '123456'},
            { id: 4, nome: 'Leptospiroze', senha: '123456'},
            { id: 5, nome: 'Carnaval', senha: '123456'},
            { id: 6, nome: 'Insignificante', senha: '123456'},
            { id: 7, nome: 'Troço', senha: '123456'},
            { id: 8, nome: 'Henrique', senha: '123'}
        ]

        yield put(updateAllUsuarios(usuarios))
    } catch(err) {
        
    }
}