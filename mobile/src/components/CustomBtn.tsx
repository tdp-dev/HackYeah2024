import {
  Pressable,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {shadow} from "../utils";

const styles = StyleSheet.create({
  container: {
     flexGrow: 1,
     backgroundColor: "#FFFFFF",
     flexDirection: "row",
     justifyContent: "space-between",
     paddingVertical: 15,
     paddingHorizontal: 16,
     borderRadius: 30,
     width: "100%",
     ...shadow,
  },
  label: {
    fontSize: 14,
  }
});

function CustomButton({iconPath, isActive, onPress, children, backgroundColor = "#FFFFFF", color = "#000000"}) {
  return (
    <Pressable onPress={onPress}>
      <View style={[ styles.container, {backgroundColor: backgroundColor}, isActive && {backgroundColor: backgroundColor}]}>
        <Text style={[styles.label, {color: color}]}>{ children }</Text>
        <Image source={iconPath} />
      </View>
    </Pressable>
  );
}

export default CustomButton;
