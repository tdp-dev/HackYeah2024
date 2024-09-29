import React, { useState, useRef, useCallback, useMemo } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView, Image } from 'react-native';
import { shadow } from "../utils"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#F4F4F4",
    borderWidth: 2,
    ...shadow,
  },
  isActive: {
    borderColor: "#F56A3E",
  }
});

function AlertCard({ iconPath, onPress, isActive, activeIconPath }) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, isActive && styles.isActive]}>
        <Image source={isActive ? activeIconPath : iconPath } />
      </View>
    </Pressable>
  );
}

export default AlertCard;
