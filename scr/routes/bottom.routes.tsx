import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../pages/menu';
import Revisao from '../pages/revisao';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export function BottomRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false
    }}
    tabBar={props=> <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Menu"  component={Menu} />

      <Tab.Screen name="Revisao" component={Revisao} />
    </Tab.Navigator>
  );
}