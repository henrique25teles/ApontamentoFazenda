import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PageLogin from 'pages/login'
import PageIniciarApontamento from 'pages/apontamento/'
import PageFinalizarApontamento from 'pages/apontamento/finalizarApontamento'

const MainPage = createStackNavigator({
    IniciarApontamento: {
        screen: PageIniciarApontamento,
        navigationOptions: {
            title: 'Iniciar Apontamento',
        },
    },
    FinalizarApontamento: {
        screen: PageFinalizarApontamento,
        navigationOptions: {
            title: 'Finalizar Apontamento'
        },
    }
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