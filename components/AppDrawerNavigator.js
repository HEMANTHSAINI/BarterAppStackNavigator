import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';

import myBarters from '../screens/MyBarters';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator
  },
  Setting: {
    screen: SettingScreen
  },
  MyBarters: {
    screen: myBarters
  },
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })
