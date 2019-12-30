import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

import {StackProps} from 'types/common/navigation'
import { Text } from 'react-native-elements';

interface Props extends StackProps<any> {}

export default function ApontamentoQuantidadesPage(props: PropsWithChildren<Props>){
    return (
        <View>
            <Text h1>Essa é a tela de edição de quantidades</Text>
        </View>
    )
}
