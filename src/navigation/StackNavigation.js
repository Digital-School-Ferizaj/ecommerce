import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import { PRIMARY_COLOR } from '../components/variabla';
import SingleProduct from '../screens/SingleProduct';
import IOSscreen from '../screens/IOSscreen';
import AndroidScreen from '../screens/AndroidScreen';

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="IOSscreen" component={IOSscreen} />
      <Stack.Screen name="AndroidScreen" component={AndroidScreen} />
    </Stack.Navigator>
  );
}

const AboutStack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="IOSscreen" component={IOSscreen} />
      <Stack.Screen name="AndroidScreen" component={AndroidScreen} />
    </Stack.Navigator>
  );
}


const screenOptionStyle = {
  headerShown: false,
  headerStyle: { backgroundColor: PRIMARY_COLOR },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold'},
};

export {HomeStack, AboutStack};