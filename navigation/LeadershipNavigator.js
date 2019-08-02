import React from 'react';
import { Platform, TouchableOpacity, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import LeadershipScreen from '../screens/LeadershipScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const BackButton = (props) => {
	return (
    <View>
      <TouchableOpacity onPress={() => {console.log('Back'); console.log(props); props.navigation.navigate('HomeStack')}}>
      <Ionicons 
        name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
        size={32} color="#000" style={{paddingLeft: 16}}/>
      </TouchableOpacity>
    </View>
  );
};

const leadershipNavigator = createStackNavigator(
    {
       Leadership: LeadershipScreen,
    },    
    config
  );

export default leadershipNavigator;