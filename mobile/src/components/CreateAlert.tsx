import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AlertCard from "./AlertCard";
import { createAlert } from "../requests"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    width: windowWidth,
    height: windowHeight,
    alignItems: "stretch",
    justifyContent: "space-between",
    barckgroundColor: "blue",
  },
  topBar: {
    barckgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bottomBar: {
    flexDirection: "row",
    width: windowWidth,
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
});


const alertTypes = [
  {iconPath: require("../../assets/Traffic.png"), activeIconPath: require("../../assets/TrafficActive.png"), value: 'traffic'},
  {iconPath: require("../../assets/Animals.png"), activeIconPath: require("../../assets/AnimalsActive.png"), value: 'animals'},
  {iconPath: require("../../assets/Load.png"), activeIconPath: require("../../assets/LoadActive.png"), value: 'load'},
  {iconPath: require("../../assets/Package.png"), activeIconPath:  require("../../assets/PackageActive.png"), value: 'package'},
]

function CreateAlert({ coordinates }) {
  const [selectedType, setSelectedType] = useState(null);

  async function onCreate() {
    const data = {
      "Name": "another test",
      "Type": selectedType,
      "lat": coordinates.lat,
      "lon": coordinates.lon
    };
    console.log({ data });
    await createAlert(data);
  }

  const alertTypeCads = alertTypes.map(t => (
    <AlertCard 
      key={t.value}
      iconPath={t.iconPath}
      activeIconPath={t.activeIconPath}
      isActive={t.value === selectedType}
      onPress={() => { setSelectedType(t.value) }}
    />
  ))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Pressable>
          <Image source={require("../../assets/Cancel.png")} />
        </Pressable>
        <Pressable onPress={onCreate}>
          <Image source={require("../../assets/Done.png")} />
        </Pressable>
      </View>
      <View style={styles.bottomBar}>
        { alertTypeCads }
      </View>
    </SafeAreaView>
  );
}

export default CreateAlert;
