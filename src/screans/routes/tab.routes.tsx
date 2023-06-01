import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {} from '@expo/vector-icons'
import { ScreenA } from '../ScreenA';
import { ScreenB } from '../ScreenB';

const { Screen, Navigator } = createBottomTabNavigator();


export function TabRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA} 
                options={{
                    tabBarLabel: 'Home'
                }}
                
            />

            <Screen
                name='screenB'
                component={ScreenB} 
                options={{
                    tabBarLabel: 'Segunda tela'
                }}
            />
        </Navigator>
    )
}