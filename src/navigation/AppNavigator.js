import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsListScreen from '../screens/NewsListScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <MaterialIcons
      name="menu"
      size={24}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="NewsList"
      component={NewsListScreen}
      options={{ title: 'All News', headerLeft: () => <HeaderLeft /> }}
    />
    <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} options={{ title: 'News Details' }} />
  </Stack.Navigator>
);

const FavoritesNavigator = () => (
  <Stack.Navigator screenOptions={{ headerLeft: () => <HeaderLeft /> }}>
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
  </Stack.Navigator>
);

const AboutNavigator = () => (
  <Stack.Navigator screenOptions={{ headerLeft: () => <HeaderLeft /> }}>
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
);

const TabsNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: () => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Favorites') {
          iconName = 'favorite';
        }
        return <MaterialIcons name={iconName} size={24} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesNavigator} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="News" component={TabsNavigator} />
        <Drawer.Screen name="About" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
