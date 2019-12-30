import {combineReducers} from 'redux'

import apontamentos from 'store/ducks/apontamentos'
import centrosCustos from 'store/ducks/centrosCustos'
import eventos from 'store/ducks/eventos'
import apontamentoSelecionado from 'store/ducks/apontamentoSelecionado'

export default combineReducers({
    apontamentos,
    apontamentoSelecionado,
    centrosCustos,
    eventos,
})