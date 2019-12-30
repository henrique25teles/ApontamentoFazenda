import { Reducer } from 'redux'

import CentroCustoState, { CentrosCustosActionTypes, CentroCustoAction } from 'types/store/CentrosCustosState'
import CentroCusto from 'types/models/CentroCusto'

const INITIAL_STATE: CentroCustoState = {
    all: [
        {id: 0, descricao: 'Selecione'}
    ],
}

const reducer: Reducer<CentroCustoState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CentrosCustosActionTypes.ADD_CENTROCUSTO:
            state.all.push(action.payload)

            return {...state}
        case CentrosCustosActionTypes.UPDATE_CENTROCUSTO:
            const indexParaEditar = state.all.findIndex(x => x.id === action.payload.id)
            
            state.all[indexParaEditar] = action.payload;

            return {...state}
        case CentrosCustosActionTypes.DELETE_CENTROCUSTO:
            const indexParaDeletar = state.all.findIndex(x => x.id === action.payload.id)
            state.all.splice(indexParaDeletar, 1)

            return { ...state }
        case CentrosCustosActionTypes.UPDATE_ALL:
            action.payload.forEach(x => {
                const indexParaEditar = state.all.findIndex(y => y.id == x.id)
                
                if (indexParaEditar != -1)
                    state.all[indexParaEditar] = x
                else 
                    state.all.push(x)
            })

            return { ...state }
        case CentrosCustosActionTypes.DELETE_ALL:
            return INITIAL_STATE
        default: 
            return state
    }
}

export default reducer
