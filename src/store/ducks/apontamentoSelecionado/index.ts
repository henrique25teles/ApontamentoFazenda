import { Reducer } from 'redux'

import ApontamentosSelecionadoState, { ApontamentosSelecionadoActionTypes, ApontamentoSelecionadoAction } from 'types/store/ApontamentoSelecionadoState'
import Apontamento from 'types/models/Apontamento'

const INITIAL_STATE: ApontamentosSelecionadoState = {
    apontamentoItens: [],
    centroCusto: 0,
    evento: 0,
    isFinalizado: false,
    isIniciado: false,
    isPausado: false
}

const reducer: Reducer<ApontamentosSelecionadoState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ApontamentosSelecionadoActionTypes.CHANGE_CENTRO_CUSTO_APONTAMENTO:
            return { ...state, centroCusto: action.payload }
        case ApontamentosSelecionadoActionTypes.CHANGE_EVENTO_APONTAMENTO:
            return { ...state, evento: action.payload }
        case ApontamentosSelecionadoActionTypes.INICIA_APONTAMENTO:
            return { ...state, isIniciado: true  }
        case ApontamentosSelecionadoActionTypes.PAUSA_APONTAMENTO:
            return { ...state, isPausado: true }
        case ApontamentosSelecionadoActionTypes.RETOMA_APONTAMENTO:
            return { ...state, isPausado: false  }
        case ApontamentosSelecionadoActionTypes.FINALIZA_APONTAMENTO:
            return { ...state, isFinalizado: true }
        default: 
            return state
    }
}

export default reducer
