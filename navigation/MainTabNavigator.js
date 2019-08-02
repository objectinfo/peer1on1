import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeTabNavigator from './HomeTabNavigator';
import LeadershipNavigator from './LeadershipNavigator'

import SideBar from "../screens/sidebar";

//Drawer menu
const drawerNavigator = createDrawerNavigator(
  {
    MainStack: { screen: HomeTabNavigator },
    LeadershipStack: { screen: LeadershipNavigator }
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    initialRouteName: 'MainStack',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  },
);

export default drawerNavigator;
