import {action} from 'typesafe-actions'

import { ApontamentosSelecionadoActionTypes, ApontamentoSelecionadoAction } from 'types/store/ApontamentoSelecionadoState'

const mudaCentroCustoApontamento = (payload: number) => action(ApontamentosSelecionadoActionTypes.CHANGE_CENTRO_CUSTO_APONTAMENTO, payload)

const mudaEventoApontamento = (payload: number) => action(ApontamentosSelecionadoActionTypes.CHANGE_EVENTO_APONTAMENTO, payload)

const iniciaApontamento = (): ApontamentoSelecionadoAction => action(ApontamentosSelecionadoActionTypes.INICIA_APONTAMENTO)

const pausaApontamento = (): ApontamentoSelecionadoAction => action(ApontamentosSelecionadoActionTypes.PAUSA_APONTAMENTO)

const finalizaApontamento = (): ApontamentoSelecionadoAction => action(ApontamentosSelecionadoActionTypes.FINALIZA_APONTAMENTO)