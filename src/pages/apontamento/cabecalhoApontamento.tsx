import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Icon} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackProps<any> {}

export default function CabecalhoApontamento(props: PropsWithChildren<Props>){
    function visualizarItensApontamentos() {
        props.navigation.navigate('ApontamentoItens')
    }

    return (
        <View style={styles.cabecalho}>
            <View style={styles.viewTurma}>
                <Text h3 h3Style={styles.turmaLabel}>Turma 1</Text>
                <Icon type="font-awesome" name="sitemap" Component={TouchableOpacity} onPressOut={visualizarItensApontamentos} raised />
            </View>
            <View>
                <Text h4 h4Style={styles.dataApontamentoLabel} >Apontamento Iniciado as 7:00</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    turmaLabel: {
        textDecorationLine: 'underline',
    },
    dataApontamentoLabel: {
        color: 'red',
        fontSize: 16
    },
})
