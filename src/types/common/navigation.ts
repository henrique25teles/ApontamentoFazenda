import {NavigationSwitchProp, NavigationScreenConfigProps, NavigationRoute, NavigationParams} from 'react-navigation'
import {NavigationStackProp, NavigationStackOptions} from 'react-navigation-stack'

export type SwitchProps<ScreenProps = any> = NavigationScreenConfigProps<NavigationSwitchProp<NavigationRoute<NavigationParams>, any>, ScreenProps>

export type StackProps<ScreenProps = any> = NavigationScreenConfigProps<NavigationStackProp<NavigationRoute<NavigationParams>, any>, ScreenProps>

export interface StackNavOptions<ScreenProps = any> extends NavigationScreenConfigProps<NavigationStackProp<NavigationRoute<NavigationParams>, any>, ScreenProps> {
    navigationOptions: NavigationStackOptions
}
