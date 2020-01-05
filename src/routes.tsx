import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PageLogin from 'pages/login'
import PageConfig from 'pages/configuracao'
import PageIniciarApontamento, {navigationOptions as iniciarApontamentoNavigationOptions} from 'pages/apontamento/'
import PageApontamentoItens from 'pages/apontamentoItens'
import PageApontamentoQuantidades from 'pages/apontamentoQuantidades'
import Colors from 'shared/styles/Colors'
import { Icon, IconNode } from 'react-native-elements'
import HeaderRight from 'shared/components/headerRightMenu'

const MainPage = createStackNavigator({
    IniciarApontamento: {
        screen: PageIniciarApontamento,
        navigationOptions: iniciarApontamentoNavigationOptions,
    },
    ApontamentoItens: {
        screen: PageApontamentoItens,
        navigationOptions: {
            title: 'Quantidades'
        }
    },
    ApontamentoQuantidades: {
        screen: PageApontamentoQuantidades,
        navigationOptions: {
            title: 'Editar Quantidades'
        }
    }
}, {
    defaultNavigationOptions: (navigationOptions) =>({
        headerStyle: {
            backgroundColor: Colors.RosaClaro,
        },
        headerTintColor: Colors.Branco,
    }),
})

const NavegacaoInicial = createSwitchNavigator({
    Login: {
        screen: PageLogin
    },
    Main: {
        screen: MainPage,
    },
    Config: {
        screen: PageConfig
    }
})

export default createAppContainer(NavegacaoInicial)