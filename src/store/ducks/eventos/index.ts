import { Reducer } from 'redux'

import EventosState, { EventosActionTypes, EventoAction } from 'types/store/EventosState'
import Evento from 'types/models/Evento'

const INITIAL_STATE: EventosState = {
    all: [
        {id: 0, descricao: 'Selecione'}
    ],
}

const reducer: Reducer<EventosState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EventosActionTypes.ADD_EVENTO:
            state.all.push(action.payload)

            return {...state}
        case EventosActionTypes.UPDATE_EVENTO:
            const indexParaEditar = state.all.findIndex(x => x.id === action.payload.id)
            state.all[indexParaEditar] = action.payload;

            return {...state}
        case EventosActionTypes.DELETE_EVENTO:
            const indexParaDeletar = state.all.findIndex(x => x.id === action.payload.id)
            state.all.splice(indexParaDeletar, 1)

            return { ...state }
        case EventosActionTypes.UPDATE_ALL:
            action.payload.forEach(x => {
                const indexParaEditar = state.all.findIndex(y => y.id === x.id)

                if (indexParaEditar != -1)
                    state.all[indexParaEditar] = x
                else 
                    state.all.push(x)
            })

            return { ...state }
        case EventosActionTypes.DELETE_ALL:
            return INITIAL_STATE
        default: 
            return state
    }
}

export default reducer
