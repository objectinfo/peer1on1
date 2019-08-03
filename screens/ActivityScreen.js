import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Tab, Tabs, TabHeading, 
  Icon, Text, Left, Button, Body, Title, Right,
  ScrollableTab, StyleProvider
} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default function ActivityScreen() {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>         
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#00ffff' }}>
          <Tab heading={ <TabHeading><Icon ios='ios-clock' android="md-clock" /><Text>Upcoming</Text></TabHeading>}>
          <Text>Current activity schedule</Text>
          </Tab>
          <Tab heading={ <TabHeading ><Icon ios='ios-archive' android="md-archive" /><Text>Archive</Text></TabHeading>}>
          <Text>Archived activities</Text>
          </Tab>
        </Tabs>
      </Container>
      </StyleProvider>
  );
}

ActivityScreen.navigationOptions = {
  title: 'Activity',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
