import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, 
  Icon, Text, Left, Button, Body, Title, Right,
  ScrollableTab, StyleProvider
} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import { Ionicons } from '@expo/vector-icons';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Styles from '../styles';

// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';

export default class LeadershipScreen extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>         
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#00ffff' }}>
          <Tab heading={ <TabHeading><Icon name="people" /><Text>Board</Text></TabHeading>}
          >
          <Text>Member</Text>
          </Tab>
          <Tab heading={ <TabHeading ><Text>Cypress</Text></TabHeading>}
          >
          <Text>Cypress</Text>
          </Tab>
          <Tab heading={ <TabHeading><Text>Cerritos</Text></TabHeading>}
          >       
          <Text>Cerritos</Text>   
          </Tab>
        </Tabs>
      </Container>
      </StyleProvider>
    );
  }
}

LeadershipScreen.navigationOptions = ({ navigation }) => ({
  title: "Leadership",
  headerLeft: (
      <TouchableOpacity
          onPress={() => navigation.navigate('HomeStack')}>
          <Ionicons 
        name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
        size={32} color="#000" style={{paddingLeft: 10}}/>
      </TouchableOpacity>
  ),

})

const styles = StyleSheet.create({
  tabStyling: {
    backgroundColor: '#37b372',
    borderColor: 'white'
  },
  tabTextStyle: {
    color: 'black'
  },
  activeTabStyle: {
    color: 'black',
    backgroundColor: 'blue',
    borderColor: 'white',
    borderBottomColor: 'white'
  },
  activeTabTextStyle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20
  }
});
