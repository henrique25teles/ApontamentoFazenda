import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PageLogin from 'pages/login'
import PageConfig from 'pages/configuracao'
import PageIniciarApontamento, {navigationOptions as navigationOptionsIniciarApontamento} from 'pages/apontamento/'
import PageApontamentoItens from 'pages/apontamentoItens'
import PageApontamentoQuantidades from 'pages/apontamentoQuantidades'
import Colors from 'shared/styles/Colors'

const MainPage = createStackNavigator({
    IniciarApontamento: {
        screen: PageIniciarApontamento,
        navigationOptions: navigationOptionsIniciarApontamento,
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