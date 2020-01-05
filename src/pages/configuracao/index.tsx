import React, { PropsWithChildren, useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Animated, Easing } from 'react-native';

import {SwitchProps} from 'types/common/navigation'
import defaultStyles from 'shared/styles/EstilosPadrao'
import { Icon, Text, Input, IconNode, Button } from 'react-native-elements';
import Colors from 'shared/styles/Colors';

interface Props extends SwitchProps<any> { }

export default function Configuracao(props: PropsWithChildren<Props>){
    const [cabecalhoVY] = useState(new Animated.Value(-500))
    const [urlConexaoVX] = useState(new Animated.Value(-500))
    const [urlConexaoRemotaVX] = useState(new Animated.Value(-500))
    const [btnAplicarVX] = useState(new Animated.Value(-500))

    useEffect(() => {
        animarTelaIn()
    }, [])

    function animarTelaIn() {
        Animated.timing(cabecalhoVY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()

        Animated.timing(urlConexaoVX, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            useNativeDriver: true
        }).start()

        Animated.timing(urlConexaoRemotaVX, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 100,
            useNativeDriver: true
        }).start()
        
        Animated.timing(btnAplicarVX, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 200,
            useNativeDriver: true
        }).start()
    }

    function animarTelaOut(callback: Function) {
        Animated.timing(cabecalhoVY, {
            toValue: -300,
            duration: 500,
            useNativeDriver: true
        }).start()

        Animated.timing(urlConexaoVX, {
            toValue: -500,
            duration: 500,
            easing: Easing.elastic(1),
            useNativeDriver: true
        }).start()

        Animated.timing(urlConexaoRemotaVX, {
            toValue: -500,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 100,
            useNativeDriver: true
        }).start()

        Animated.timing(btnAplicarVX, {
            toValue: -500,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 200,
            useNativeDriver: true
        }).start()

        setTimeout(callback, 500);
    }

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
        animarTelaOut(() => props.navigation.navigate('Login'))
    }

    return (
        <View style={[defaultStyles.container, styles.container]}>
            <Animated.View style={[styles.header, { transform: [{translateY: cabecalhoVY}] }]}>
                <Icon name="settings" type="feather" color={Colors.PretoClaro} />
                <Text style={{color: Colors.Branco}}>Configuração</Text>
            </Animated.View>
            <Animated.View style={[styles.content, { transform: [{translateX: urlConexaoVX}] }]}>
                <Input 
                    placeholder="Url de conexão"
                    leftIcon={txtUrl_renderLeftIcon}
                    inputContainerStyle={defaultStyles.textInputContainerStyle} 
                    containerStyle={defaultStyles.textInputTexto} 
                    leftIconContainerStyle={defaultStyles.textInputLeftIcon}
                    keyboardType="url"
                />
            </Animated.View>
            <Animated.View style={[styles.content, { transform: [{translateX: urlConexaoRemotaVX}] }]}>
                <Input 
                    placeholder="Url de conexão Remota"
                    leftIcon={txtUrlRemota_renderLeftIcon}
                    inputContainerStyle={defaultStyles.textInputContainerStyle} 
                    containerStyle={defaultStyles.textInputTexto} 
                    leftIconContainerStyle={defaultStyles.textInputLeftIcon}
                    keyboardType="url"
                />
            </Animated.View>
            <Animated.View style={[styles.footer, { transform: [{translateX: btnAplicarVX}] }]}>
                <View style={styles.footerView}>
                    <Button title="Aplicar" onPress={btnAplicar_onPress} />
                </View>
            </Animated.View>
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
