import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Thumbnail from './Thumbnail';

export default class FeedCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {height} = this.props;
    const id = 'IDIDIDIDDID';
    const imageSource = {
      url: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350',
      cache: 'cache-if-only',
    };
    return (
      <View style={[styles.container, {height: height}]}>
        <View style={styles.headerContainer}>
          <Thumbnail />
          <View style={styles.idContainer}>
            <Text>{id}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={{flex:1}} source={imageSource}/>
        </View>
        <View style={styles.contentsContainer}>
          <Text>123123</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    marginBottom: 5,
    flex: 1,
  },
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    borderTopColor: '#ebebeb',
    borderTopWidth: 1,
    paddingLeft: 15,
    alignItems: 'center'
  },
  idContainer: {
    marginLeft: 15,
  },
  imageContainer: {
    // borderBottomColor: '#ebebeb',
    // borderBottomWidth: 1,
    // flex: 1,
    height: 150,
    overflow: 'hidden',
  },
  contentsContainer: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
})