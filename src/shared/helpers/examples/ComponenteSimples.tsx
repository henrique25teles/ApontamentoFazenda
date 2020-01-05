import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'react-native-elements'

import defaultStyles from 'shared/styles/EstilosPadrao'
import Colors from 'shared/styles/Colors'

interface Props {
    algumaProp1: string,
    algumaOutraProp: number
}

export default function NovaTela(props: PropsWithChildren<Props>){
    return (
        <View>
            {/* O código vai aqui */}
            <Text>{props.algumaProp1}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    estilo1: {
        height: 10,
        width: '50%'
    }
})
