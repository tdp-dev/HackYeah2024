import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView, Image } from 'react-native';
import { shadow } from "../utils"

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 10,
    right: 10,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row",
    height: 48,
    flexGrow: 1,
    paddingLeft: 24,
    paddingRight: 24,
    ...shadow,
  },
  profile: {
    top: -4,
    height: 56,
    width: 56,
    marginLeft: 5,
    marginBottom: 20,
  }
});

function TopBar() {
  return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Text>Szukaj</Text>
          <Image source={require('../../assets/Search.png')}></Image>
        </View>
        <Image style={styles.profile} source={require('../../assets/Profile.png')}></Image>
      </View>
  )
}

export default TopBar;
