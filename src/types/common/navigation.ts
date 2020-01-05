import {NavigationSwitchProp, NavigationScreenConfigProps, NavigationRoute, NavigationParams, NavigationScreenConfig, NavigationRouteConfig, NavigationComponent} from 'react-navigation'
import {NavigationStackProp, NavigationStackOptions} from 'react-navigation-stack'
import { FunctionComponent } from 'react'

export type SwitchProps<ScreenProps> = NavigationScreenConfigProps<NavigationSwitchProp<NavigationRoute<NavigationParams>, any>, ScreenProps>

export type StackProps<ScreenProps = any> = NavigationScreenConfigProps<NavigationStackProp<NavigationRoute<NavigationParams>, any>, ScreenProps>
