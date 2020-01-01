import React, { PropsWithChildren } from 'react'
import { View, StyleSheet, Picker } from 'react-native'
import { Text, Button } from 'react-native-elements'

import {StackProps} from 'types/common/navigation'
import BotoesApontamento from 'pages/apontamento/btnIniciarFinalizarApontamento'
import CabecalhoApontamento from './cabecalhoApontamento'
import RodapeApontamento from './rodapeApontamento'
import { useSelector, useDispatch } from 'react-redux'
import { GlobalStore } from 'store'
import Evento from 'types/models/Evento'
import CentroCusto from 'types/models/CentroCusto'
import Apontamento from 'types/models/Apontamento'
import { ApontamentosSelecionadoActionTypes } from 'types/store/ApontamentoSelecionadoState'

export default function ApontamentoPage(props: PropsWithChildren<StackProps<any>>) {
    const apontamentoSelecionado = useSelector<GlobalStore, Apontamento>(state => state.apontamentoSelecionado)
    const centrosCustos = useSelector<GlobalStore, CentroCusto[]>(state => state.centrosCustos.all)
    const eventos = useSelector<GlobalStore, Evento[]>(state => state.eventos.all)
    
    const dispatch = useDispatch()

    function dropdownCentroCusto_onChange(itemValue: number, itemIndex: number) {
        dispatch({type: ApontamentosSelecionadoActionTypes.CHANGE_CENTRO_CUSTO_APONTAMENTO, payload: itemValue})
    }

    function dropdownEvento_onChange(itemValue: number, itemIndex: number) {
        dispatch({type: ApontamentosSelecionadoActionTypes.CHANGE_EVENTO_APONTAMENTO, payload: itemValue})
    }

    return (
        <View style={styles.container}>
            {
                apontamentoSelecionado.isIniciado ?
                    <CabecalhoApontamento evento={eventos.find(x => x.id == apontamentoSelecionado.evento)} {...props}/>
                :
                null
            }
            <View style={styles.form}>
                <View style={styles.dropdownView}>
                    <Text style={styles.label}>Centro de Custo</Text>
                    <View style={styles.dropDown}>
                        <Picker
                        mode="dialog"
                        enabled={!apontamentoSelecionado.isIniciado}
                        selectedValue={apontamentoSelecionado.centroCusto}
                        onValueChange={dropdownCentroCusto_onChange}
                        >
                        {
                            centrosCustos.map((centroCusto, index) => (
                                <Picker.Item 
                                    key={index.toString()}
                                    value={centroCusto.id}
                                    label={centroCusto.descricao}
                                />
                            ))
                        }
                        </Picker>
                    </View>
                </View>
                <View style={styles.dropdownView}>
                    <Text style={styles.label}>Eventos</Text>
                    <View style={styles.dropDown}>
                        <Picker
                        mode="dialog"
                        enabled={!apontamentoSelecionado.isIniciado}
                        selectedValue={apontamentoSelecionado.evento}
                        onValueChange={dropdownEvento_onChange}
                        >
                        {
                            eventos.map((evento, index) => (
                                <Picker.Item 
                                    key={index.toString()}
                                    value={evento.id}
                                    label={evento.descricao}
                                />
                            ))
                        }
                        </Picker>
                    
                    </View>
                </View>
                <View style={styles.formBotoes}>
                    <BotoesApontamento 
                        isIniciado={apontamentoSelecionado.isIniciado}
                        isPausado={apontamentoSelecionado.isPausado}
                        {...props} />
                </View>
            </View>
            {
                apontamentoSelecionado.isIniciado ?
                <RodapeApontamento {...props} />
                : 
                null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width:'100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    form: {
        flex: 2,
        margin: 5
    },
    formBotoes: {
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    botaoContainer: {
        margin: 5,
    },
    
    label: {
        textAlign: 'left'
    },
    dropdownView: {
        width: 290,
        paddingBottom: 5,
    },
    dropDown: {
        elevation: 1,
        borderRadius: 2
    },
    iconeEsquerdo: {
        left: -10,
    },
})