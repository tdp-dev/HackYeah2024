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

function CustomButton({iconPath, isActive, onPress, children}) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, isActive && {backgroundColor: "#F56A3E"}]}>
        <Text style={styles.label}>{ children }</Text>
        <Image source={iconPath} />
      </View>
    </Pressable>
  );
}

export default CustomButton;
