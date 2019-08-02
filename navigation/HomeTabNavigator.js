import React from 'react';
import { Platform, Image, TouchableOpacity, View } from 'react-native';
import { createStackNavigator, 
  createBottomTabNavigator
} from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/ActivityScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const DrawerButton = (props) => {
	return (
    <View>
      <TouchableOpacity onPress={() => {props.navigation.openDrawer()}}>
      <MaterialCommunityIcons name="menu" size={32} color="#000" style={{paddingLeft: 16}}/>
      </TouchableOpacity>
    </View>
  );
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerLeft: <DrawerButton navigation={navigation}  />
    }),
    navigationOptions: { header: null }
  },
  config
);


HomeStack.navigationOptions =({navigation}) => ({
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-homr'
          : 'md-home'
      }
    />
  )
});

HomeStack.path = '';

const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerLeft: <DrawerButton navigation={navigation}  />
    }),
  },  
  config
);

ActivityStack.navigationOptions = {
  tabBarLabel: 'Activity',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

ActivityStack.path = '';

const GalleryStack = createStackNavigator(
  {
    Gallery: GalleryScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerLeft: <DrawerButton navigation={navigation}  />
    }),
  },  
  config
);

GalleryStack.navigationOptions = {
  tabBarLabel: 'Gallery',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-images' : 'md-images'} />
  ),
};

GalleryStack.path = '';

ActivityStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerLeft: <DrawerButton navigation={navigation}  />
    }),
  },  
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ActivityStack,
    GalleryStack,
    ProfileStack,
  },
  {
    initialRouteName: 'ActivityStack',
  }
);

tabNavigator.path = '';

export default tabNavigator;
