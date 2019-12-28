import {NavigationSwitchProp, NavigationScreenConfigProps, NavigationRoute, NavigationParams} from 'react-navigation'
import {NavigationStackProp} from 'react-navigation-stack'

export type SwitchProps<ScreenProps> = NavigationScreenConfigProps<NavigationSwitchProp<NavigationRoute<NavigationParams>, any>, ScreenProps>

export type StackProps<ScreenProps> = NavigationScreenConfigProps<NavigationStackProp<NavigationRoute<NavigationParams>, any>, ScreenProps>