import React from 'react';
import {HomeStack, AboutStack} from './StackNavigation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
  headerStyle: { backgroundColor: '#f4511e' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },

  tabBarStyle: {
    backgroundColor: '#f4511e',
  },
  tabBarActiveTintColor: '#fff', // Color for active tab icon/label
  tabBarInactiveTintColor: '#ffffffa6',
  tabBarLabelStyle: { fontSize: 20 }
};

export default TabNavigator;