import {all, takeLatest} from 'redux-saga/effects'

import { ApontamentosSelecionadoActionTypes } from 'types/store/ApontamentoSelecionadoState'
import { ApontamentosActionTypes } from 'types/store/ApontamentosState'
import { CentrosCustosActionTypes } from 'types/store/CentrosCustosState'
import { EventosActionTypes } from 'types/store/EventosState'
import { UsuariosActionTypes } from 'types/store/UsuariosState'

import { loadCentrosCustos } from 'store/ducks/centrosCustos/sagas'
import { loadEventos } from 'store/ducks/eventos/sagas'
import { loadUsuarios } from 'store/ducks/usuarios/sagas'

export default function* rootSaga() {
    return yield all([
        takeLatest(CentrosCustosActionTypes.LOAD_CENTROSCUSTOS, loadCentrosCustos),
        takeLatest(EventosActionTypes.LOAD_EVENTOS, loadEventos),
        takeLatest(UsuariosActionTypes.LOAD_USUARIOS, loadUsuarios),
    ])
}