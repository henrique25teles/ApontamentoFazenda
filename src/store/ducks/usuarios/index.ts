import { Reducer } from 'redux'

import EventosState, { UsuariosActionTypes, UsuarioAction } from 'types/store/UsuariosState'
import UsuariosState from 'types/store/UsuariosState'

const INITIAL_STATE: UsuariosState = {
    all: [],
    selecionado: {
        id: null,
        nome: '',
        senha: ''
    }
}

const reducer: Reducer<EventosState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UsuariosActionTypes.SELECIONA_USUARIO:
            const novoEstado = {...state}    
            novoEstado.selecionado = novoEstado.all.find(x => x.id = action.payload.id)

            return novoEstado
        case UsuariosActionTypes.LOGOFF_USUARIO:
            return {...state, selecionado: { ...state.selecionado, id: null}}
        case UsuariosActionTypes.UPDATE_ALL:
            action.payload.forEach(x => {
                const indexParaEditar = state.all.findIndex(y => y.id === x.id)

                if (indexParaEditar != -1)
                    state.all[indexParaEditar] = x
                else 
                    state.all.push(x)
            })

            return { ...state }
        default: 
            return state
    }
}

export default reducer
