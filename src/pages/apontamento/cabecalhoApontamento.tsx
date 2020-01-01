import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Avatar} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'
import Evento from 'types/models/Evento';
import {format as formatDate} from 'date-fns'
import ptBrLocale from 'date-fns/locale/pt-BR'
import { useSelector } from 'react-redux';
import { GlobalStore } from 'store';
import Apontamento from 'types/models/Apontamento';
import Colors from 'shared/styles/Colors';

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
                <Avatar 
                    icon={{name: 'sitemap', type: 'font-awesome', color: Colors.Branco}}
                    overlayContainerStyle={{ backgroundColor: Colors.RosaClaro, elevation: 6 }}
                    onPress={visualizarItensApontamentos}
                    size={45}
                    rounded
                />
                
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
        color: Colors.PretoClaro,
        opacity: 0.95
    },
    dataApontamentoLabel: {
        color: Colors.Vermelho,
        fontSize: 16
    },
})
