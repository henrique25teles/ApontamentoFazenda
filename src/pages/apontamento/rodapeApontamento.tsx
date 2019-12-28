import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'

interface Props extends StackProps<any> {}

export default function RodapeApontamento(props: PropsWithChildren<Props>){
    return (
        <View style={styles.rodape}>
                <View style={styles.tempoTotalView}>
                    <Text h4>Tempo</Text>
                    <Text h4>4:22:35</Text>
                </View>
                <View style={styles.totalApontadoView}>
                    <Text h4>Total Apontado</Text>
                    <Text h2>325</Text>
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
})
