import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  SafeAreaView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native-gesture-handler';
import PostCard from './PostCard'

let post = require('./temp_posts.json');

export default class Feed extends Component {
  renderItem = ({ item: post }) => {
    return <PostCard post={post} />;
  };

  keyExtractor = (item, index) => index.toString();
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={post}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  androidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
    
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  cardContainer: {
    flex: 0.93,
  },
});
