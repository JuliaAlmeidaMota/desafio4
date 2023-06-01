import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from '../ScreenA';
import { ScreenB } from '../ScreenB';

const { Screen, Navigator } = createNativeStackNavigator();


export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                options={{
                    title: 'Tela inicial',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor:'#fff'
                }}
                component={ScreenA} 
                
            />

            <Screen
                name='screenB'
                options={{
                    title: 'Segunda tela',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'pink'
                    },
                    headerTintColor:'#fff'
                }}
                component={ScreenB} 
            />
        </Navigator>
    )
}