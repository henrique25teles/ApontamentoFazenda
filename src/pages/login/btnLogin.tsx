import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from 'shared/styles/EstilosPadrao'
import Colors from 'shared/styles/Colors'
import {StackProps} from 'types/common/navigation'
import { IconNode, Icon, Button } from 'react-native-elements';

interface Props extends StackProps<any> {}

export default function BotaoLogin(props: PropsWithChildren<Props>){
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    function btnEntrar_icon(): IconNode {
        return <Icon name="login" type="material-community" color={Colors.PretoClaro} />
    }

    function btnEntrar_onClick(): void {
        setIsLoading(true)
        setTimeout(() => {
            props.navigation.navigate('Main')
        }, 1500);
    }

    return (
        <Button 
            title="Entrar"
            icon={btnEntrar_icon}
            type="outline" 
            containerStyle={defaultStyles.botaoContainer}
            buttonStyle={[defaultStyles.botao, styles.botaoEstilo]}
            titleStyle={styles.botaoTextoEstilo}
            loading={isLoading}
            onPressOut={btnEntrar_onClick}
            raised 
        />
    )
}

const styles = StyleSheet.create({
    botaoEstilo: {
        backgroundColor: Colors.RosaClaro,
    },
    botaoTextoEstilo: {
        color: Colors.Branco
    }
})
