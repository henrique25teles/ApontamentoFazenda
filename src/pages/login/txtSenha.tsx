import React, { PropsWithChildren, MutableRefObject } from 'react';

import defaultStyles from 'shared/styles/EstilosPadrao'
import { Icon, IconNode, Input } from 'react-native-elements';

interface Props {
    reference: MutableRefObject<Input>
}

export default function Senha(props: PropsWithChildren<Props>){

    function txtSenha_leftIcon(): IconNode {
        return <Icon name="lock" type="feather" />
    }


    return (
        <Input 
            placeholder="Digite a senha"
            leftIcon={txtSenha_leftIcon}
            leftIconContainerStyle={defaultStyles.textInputLeftIcon}
            containerStyle={defaultStyles.textInputTexto}
            inputContainerStyle={defaultStyles.textInputContainerStyle}
            autoCorrect={false} 
            autoCapitalize="none" 
            blurOnSubmit={true} 
            returnKeyType="done"
            textContentType="password"
            secureTextEntry={true}
            ref={props.reference}
        />
    )
}
