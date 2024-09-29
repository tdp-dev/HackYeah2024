import React, { useState, useRef, useCallback, useMemo } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView, Image } from 'react-native';
import { shadow } from "../utils"

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 20,
    bottom: 20,
    alignItems: "flex-end"
  },
  activator: {
    width: 45,
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    ...shadow,
  },
  content: {
    marginBottom: 10,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
    marginTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnLabel: {
    fontSize: 11,
    paddingRight: 6,
  },
});

const options = [
  {label: "Ustawienia", icon: require('../../assets/Settings.png')},
  {label: "Trasy", icon: require('../../assets/Path.png')},
  {label: "Zgłoś niebezpieczeństwo", icon: require('../../assets/Danger.png')},
  {label: "Wyznacz trasę", icon: require('../../assets/Navigation.png'), active: true },
]

const subBtns = options.map(o => (
    <View style={[styles.btn, o.active && {backgroundColor: "#F56A3E"}]} key={o.label}>
      <Text style={[styles.btnLabel, o.active && {color: "#FFFFFF"}]}>{ o.label }</Text>
      <Image source={ o.icon } />
    </View>
))

function ContextMenu() {
  const [isActive, setIsActive] = useState(false);
  
  const onClick = useCallback(() => {
    setIsActive((prevState => !prevState));
  }, []);

  const icon = useMemo(() => {
      if (!isActive) {
        return <Image source={require('../../assets/Dots.png')} />;
      }
      return <Image source={require('../../assets/ArrowDown.png')} />;
  }, [isActive]);

  const subMenu = useMemo(() => {
    if (isActive) {
      return (
        <View style={styles.content}>
          { subBtns }
        </View>
      );
    }
  }, [isActive])

  return (
    <View style={styles.container}>
      { subMenu }
      <Pressable onPress={onClick}>
        <View style={styles.activator}>
          { icon }
        </View>
      </Pressable>
    </View>
  );
}

export default ContextMenu;
