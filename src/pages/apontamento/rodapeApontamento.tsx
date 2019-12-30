import React, { PropsWithChildren, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'react-native-elements'
import {formatDistanceStrict} from 'date-fns'
import ptBrLocale from 'date-fns/locale/pt-BR'

import {StackProps} from 'types/common/navigation'
import { useSelector } from 'react-redux';
import { GlobalStore } from 'store';
import Apontamento from 'types/models/Apontamento';
import { useInterval, convertMiliSecondsToTimeElapsed } from 'shared/helpers/Util';

interface Props extends StackProps<any> {}

export default function RodapeApontamento(props: PropsWithChildren<Props>){
    const apontamentoSelecionado = useSelector<GlobalStore, Apontamento>(state => state.apontamentoSelecionado)
    const [tempoPassado, setTempoPassado] = useState<string>("")

    let dataApontamento = new Date(apontamentoSelecionado.dataHoraInicio).getTime();

    useInterval(() => {
        let dataAtual = new Date()
        let tempo = dataAtual.getTime() - dataApontamento
        
        let retorno = convertMiliSecondsToTimeElapsed(tempo)
        
        setTempoPassado(retorno)
    }, 1000)

    return (
        <View style={styles.rodape}>
                <View style={styles.tempoTotalView}>
                    <Text h4>Tempo</Text>
                    <Text h4 h4Style={styles.h4Totais}>{tempoPassado}</Text>
                </View>
                <View style={styles.totalApontadoView}>
                    <Text h4>Total Apontado</Text>
                    <Text h4 h4Style={styles.h4Totais}>0</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rodape: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    tempoTotalView: {
        flex: 1,
        flexDirection: 'column',
        margin: 5
    },
    totalApontadoView: {
        flex: 1,
        flexDirection: 'column',
        margin: 5
    },
    h4Totais: {
        color: '#e63d17',
        fontSize: 16
    },
})
