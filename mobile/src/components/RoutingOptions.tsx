import BottomSheet from './BottomSheet';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet, View, Text, Pressable, SafeAreaView, Image } from 'react-native';
import CustomBtn from "./CustomBtn";
import { useMarkers } from './MarkersProvider';

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexGrow: 1,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 16,
  },
  btn: {
    
  },
  points: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  btnWrapper: {
    width: "48%",
  }
});

const bikeTypeOptions = [
  {}
]

function RoutingOptions() {
  const isOpen = useSharedValue(true);
  const { startMarker, setStartMarker, endMarker, setEndMarker } = useMarkers();

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const contentStyle = {
    color: '#001a72',
    textDecorationColor: '#001a72'
  };


  return (
    <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
      <View style={styles.title}>
        <Text style={styles.h2}>Wyznacz trasę</Text>
      </View>
      <View style={styles.points}>
        <View style={styles.btnWrapper}>
          <CustomBtn iconPath={require("../../assets/Marker.png")}>Początek trasy</CustomBtn>
        </View>
        <View style={styles.btnWrapper}>
          <CustomBtn iconPath={require("../../assets/Marker.png")}>Koniec trasy</CustomBtn>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.h2}>Rodzaj roweru</Text>
      </View>
    </BottomSheet>
  )
}

export default RoutingOptions;
