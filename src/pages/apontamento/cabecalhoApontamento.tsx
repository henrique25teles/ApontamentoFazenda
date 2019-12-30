import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Icon} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Evento from 'types/models/Evento';
import {format as formatDate} from 'date-fns'
import ptBrLocale from 'date-fns/locale/pt-BR'
import { useSelector } from 'react-redux';
import { GlobalStore } from 'store';
import Apontamento from 'types/models/Apontamento';

interface Props extends StackProps<any> {
    evento: Evento
}

export default function CabecalhoApontamento(props: PropsWithChildren<Props>){
    const apontamentoSelecionado = useSelector<GlobalStore, Apontamento>(state => state.apontamentoSelecionado)

    function visualizarItensApontamentos() {
        props.navigation.navigate('ApontamentoItens')
    }
    
    return (
        <View style={styles.cabecalho}>
            <View style={styles.viewTurma}>
                <Text h3 h3Style={styles.turmaLabel}>{props.evento.turma}</Text>
                <Icon type="font-awesome" name="sitemap" Component={TouchableOpacity} onPressOut={visualizarItensApontamentos} raised />
            </View>
            <View>
                <Text h4 h4Style={styles.dataApontamentoLabel} >{apontamentoSelecionado.dataHoraInicio ? formatDate(new Date(apontamentoSelecionado.dataHoraInicio), "'Apontamento Iniciado às' hh':'mm ", {locale: ptBrLocale}) : ""}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        margin: 5,
        marginLeft: '20%'
    },
    viewTurma: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    turmaLabel: {
        color: '#00000080',
        opacity: 0.95
    },
    dataApontamentoLabel: {
        color: '#e63d17',
        fontSize: 16
    },
})
