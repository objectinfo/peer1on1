import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import { MonoText } from '../components/StyledText';

 const aboutHTML = require('../assets/about.html');
// const aboutHTML = Asset.fromModule(require('../assets/about.html')).uri;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.contentContainerTop}>Peer 1 on 1 is a non-profit organization which targets autism and other developmental disorders by allowing
        autistic children from ages five to eighteen with opportunities to interact with our teen volunteers.
        Activities include watching movies together, going on hiking trips, playing sports together, and attending
        major events against autism, and much more (refer to our "Activities" page and our "Upcoming Activities" page).
      </Text>
      <Text style={styles.contentContainer}>Peer 1 on 1 not only seeks to benefit autistic children, but to also benefit our volunteers. We accept teen
        volunteers over the age of 11 and adult volunteers. Teen volunteers would benefit through an increased knowledge of
        autism, service hours, and the getting to know autistic peers. Adult volunteers would volunteer the same way as teen
        volunteers but would also be able to provide supervision. We operate in the Los Angeles and Orange County areas of
        Southern California in the United States. However, if you do not live near Los Angeles or Orange County and are
        interested in volunteering or would like to set up your own chapter of Peer1on1 in your area, please contact us. If
        a club, group, or organization would like to get involved as a whole with Peer1on1, please contact us through the
        “Contact Us” page. Such ways for different groups to get involved include hosting joint activities or events with
        Peer1on1 or allowing members of high school clubs to receive hours for volunteering in Peer1on1.
      </Text>
      <Text style={styles.contentContainer} >Peer 1 on 1’s purpose is to create a more autistic friendly environment for future generations by improving the social and communication skills of autistic teens and by increasing autism awareness in non-autistic teens.
      </Text>
      <Text style={styles.contentContainer} >Many autistic people have limited contact with their peers. As a result, many accumulate feelings such as helplessness, disappointment, and frustration. These detrimental emotions often push for further negative behavior, which encourage their peers to alienated, excluded, or even bully them. Peer 1 on 1 plans to reduce these behaviors by creating opportunities for autistic teens to practice social interactions with high school volunteers through activities and programs which will expose autistic teens to scenarios close to the daily life of a non-autistic teen. Past activities we’ve had together include watching movies, playing games, and playing sport together. In addition, these activities will improve the quality of life of autistic teens by giving them more opportunities to participate in active activities to avoid having them stay home too long, where they often endorse in unhealthy behaviors such as oversleeping, overeating, or spending too much time on electronics.
      </Text>
      <Text style={styles.contentContainer} >Many people do not know how to treat or handle autistic people when they meet them, leading them to misunderstand, harm, or ignore them. Peer 1 on 1’s plans to increase the autism awareness, especially by erasing negative stigmas of autism in children and teens and educating them on handling autistic behaviors. This way, they will understand how to treat autistic people in their futures, be compelled to befriend autistic people, and possibly continue to support autism-related causes in the future. So far, teen volunteers have shown great capability in handling autistic children through their hard work and patience.
      </Text>
      <Text style={styles.contentContainer} >Note: Although Peer1on1 focuses on autism, we welcome all special needs individuals to participate in activities and become a part of our organization.
      </Text>
    </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = ({navigation}) => ({
  title: 'About Us',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },  
  contentContainerTop: {
    flex: 1,
    fontSize: 18,
    paddingTop: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  contentContainer: {
    flex: 1,
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
