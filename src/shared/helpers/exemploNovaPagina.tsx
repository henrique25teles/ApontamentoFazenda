import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

import {StackProps} from 'types/common/navigation'

interface Props extends StackProps<any> {
    algumaProp1: string,
    algumaOutraProp: number
}

export default function NovaTela(props: PropsWithChildren<Props>){
    return (
        <View>
            {/* O código vai aqui */}
        </View>
    )
}
