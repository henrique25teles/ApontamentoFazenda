import React, { PropsWithChildren } from 'react';
import {HeaderButton, HeaderButtons, HiddenItem, defaultOnOverflowMenuPress} from 'react-navigation-header-buttons'
import {MaterialIcons} from '@expo/vector-icons'

import {StackProps} from 'types/common/navigation'
import Colors from 'shared/styles/Colors'
import { useDispatch } from 'react-redux';
import { UsuariosActionTypes } from 'types/store/UsuariosState';

export default function HeaderRight(props: PropsWithChildren<StackProps>){
    const dispatch = useDispatch()
    
    const MaterialHeaderButton = props => (
        <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color="blue" />
    );
    
    function btnSair_onPress() {
        dispatch({type: UsuariosActionTypes.LOGOFF_USUARIO})
        props.navigation.navigate('Login')
    }

    return (
        <HeaderButtons
            HeaderButtonComponent={MaterialHeaderButton}
            OverflowIcon={<MaterialIcons name="more-vert" size={23} color={Colors.Branco} />}
            onOverflowMenuPress={({ overflowButtonRef, hiddenButtons }) =>
                defaultOnOverflowMenuPress({
                    overflowButtonRef,
                    hiddenButtons,
                })
            }
        >
            <HiddenItem title="Sair" onPress={btnSair_onPress} />
        </HeaderButtons>
    )
}
