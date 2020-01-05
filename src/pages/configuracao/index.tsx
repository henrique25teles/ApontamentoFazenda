import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import {SwitchProps} from 'types/common/navigation'
import defaultStyles from 'shared/styles/EstilosPadrao'
import { Icon, Text, ListItem, Input, IconNode, Button } from 'react-native-elements';
import Colors from 'shared/styles/Colors';

interface Props extends SwitchProps<any> { }

export default function Configuracao(props: PropsWithChildren<Props>){

    function txtUrl_renderLeftIcon() : IconNode {
        return (
            <Icon name="link" type="entypo" />
        )
    }

    function txtUrlRemota_renderLeftIcon() : IconNode {
        return (
            <Icon name="external-link" type="feather" />
        )
    }

    function btnAplicar_onPress() {
        props.navigation.navigate('Login')
    }

    return (
        <View style={[defaultStyles.container, styles.container]}>
            <View style={styles.header}>
                <Icon name="settings" type="feather" color={Colors.PretoClaro} />
                <Text style={{color: Colors.Branco}}>Configuração</Text>
            </View>
            <View style={styles.content}>
                <Input 
                    placeholder="Url de conexão"
                    leftIcon={txtUrl_renderLeftIcon}
                    inputContainerStyle={defaultStyles.textInputContainerStyle} 
                    containerStyle={defaultStyles.textInputTexto} 
                    leftIconContainerStyle={defaultStyles.textInputLeftIcon}
                    keyboardType="url"
                />
            </View>
            <View style={styles.content}>
                <Input 
                    placeholder="Url de conexão Remota"
                    leftIcon={txtUrlRemota_renderLeftIcon}
                    inputContainerStyle={defaultStyles.textInputContainerStyle} 
                    containerStyle={defaultStyles.textInputTexto} 
                    leftIconContainerStyle={defaultStyles.textInputLeftIcon}
                    keyboardType="url"
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.footerView}>
                    <Button title="Aplicar" onPress={btnAplicar_onPress} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 40,
        padding: 5,
        marginTop: StatusBar.currentHeight,
        backgroundColor: Colors.RosaClaro,
        elevation: 5
    },
    content: {
        padding: 10
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 1,
        width: '100%'
    },
    footerView: {

    }
})
