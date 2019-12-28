import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'

interface Props extends StackProps<any> {}

export default function CabecalhoApontamento(props: PropsWithChildren<Props>){
    return (
        <View style={styles.cabecalho}>
                <Text h3 h3Style={styles.turmaLabel}>Turma 1</Text>
                <Text h4 h4Style={styles.dataApontamentoLabel} >Apontamento Iniciado as 7:00</Text>
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
    turmaLabel: {
        textDecorationLine: 'underline',
    },
    dataApontamentoLabel: {
        color: 'red',
        fontSize: 16
    },
})
