import {createStore, Store, applyMiddleware, Reducer} from 'redux'
import {persistStore, persistReducer, PersistConfig, Persistor} from 'redux-persist'
import { PersistPartial } from 'redux-persist/es/persistReducer'
import { AsyncStorage } from 'react-native'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'store/ducks/rootReducer'
import rootSaga from 'store/ducks/rootSaga'

import ApontamentosState from 'types/store/ApontamentosState'
import CentrosCustosState from 'types/store/CentrosCustosState'
import EventosState from 'types/store/EventosState'
import ApontamentoSelecionado from 'types/store/ApontamentoSelecionadoState'

export interface GlobalStore {
    apontamentos: ApontamentosState
    apontamentoSelecionado: ApontamentoSelecionado
    centrosCustos: CentrosCustosState
    eventos: EventosState
}

const persistConfig: PersistConfig<GlobalStore> = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer: Reducer<GlobalStore & PersistPartial> = persistReducer<GlobalStore>(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const store: Store<GlobalStore> = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export const persistor: Persistor = persistStore(store)

export default store
