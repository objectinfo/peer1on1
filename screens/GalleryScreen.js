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

export default function GalleryScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
     <Text style={styles.contentContainerTop}> Coming Soon. </Text>
  );
}

GalleryScreen.navigationOptions = {
  title: 'Gallery',
};

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
});

