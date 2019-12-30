import { Reducer } from 'redux'

import ApontamentoState, { ApontamentosActionTypes, ApontamentoAction } from 'types/store/ApontamentosState'
import Apontamento from 'types/models/Apontamento'

const INITIAL_STATE: ApontamentoState = {
    all: []
}

const reducer: Reducer<ApontamentoState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ApontamentosActionTypes.ADD_APONTAMENTO:
            var novoEstado = {...state}

            novoEstado.all.push(action.payload)
            return {...novoEstado}
        case ApontamentosActionTypes.UPDATE_APONTAMENTO:
            const indexParaEditar = state.all.findIndex(x => x.id === action.payload.id)

            var novoEstado = { ...state }
            novoEstado.all[indexParaEditar] = action.payload;

            return {...novoEstado}
        case ApontamentosActionTypes.DELETE_APONTAMENTO:
            const indexParaDeletar = state.all.findIndex(x => x.id === action.payload.id)
            var novoEstado = { ...state }

            novoEstado.all.splice(indexParaDeletar, 1)

            return { ...novoEstado }
        case ApontamentosActionTypes.DELETE_ALL:
            return INITIAL_STATE
        default: 
            return state
    }
}

export default reducer
