import React from 'react';
import {HomeStack, AboutStack} from './StackNavigation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { PRIMARY_COLOR } from '../components/variabla';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={screenOptionStyle}
    >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutStack}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information" color={color} size={size} />
            ),
          }}
        />
    </Tab.Navigator>
    );
}

const screenOptionStyle = {
  headerShown: true,
  headerStyle: { backgroundColor: PRIMARY_COLOR },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },

  tabBarStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  tabBarActiveTintColor: '#fff', // Color for active tab icon/label
  tabBarInactiveTintColor: '#ffffffa6',
  tabBarLabelStyle: { fontSize: 20 }
};

export default TabNavigator;