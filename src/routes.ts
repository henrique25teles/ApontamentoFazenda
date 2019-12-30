import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PageLogin from 'pages/login'
import PageIniciarApontamento from 'pages/apontamento/'
import PageApontamentoItens from 'pages/apontamentoItens'

const MainPage = createStackNavigator({
    IniciarApontamento: {
        screen: PageIniciarApontamento,
        navigationOptions: {
            title: 'Iniciar Apontamento',
        },
    },
    ApontamentoItens: {
        screen: PageApontamentoItens,
        navigationOptions: {
            title: 'Quantidades'
        }
    },
})

const NavegacaoInicial = createSwitchNavigator({
    Login: {
        screen: PageLogin
    },
    Main: {
        screen: MainPage,
    }
})

export default createAppContainer(NavegacaoInicial)