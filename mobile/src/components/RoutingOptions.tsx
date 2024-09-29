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
import { fetchRoute } from '../../requests';

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
  },
  bikeTypeContainer: {
    width: '100%',
    height: 240,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: 'space-evenly',
  },
  bikeTypeRow: {
    flexDirection: 'row',
    width: '100%',
    height: '40%',
    justifyContent: 'space-evenly',
  },
  bikeType: {
    width: '44%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10
  },
  bikeTypeTitle: {
    fontSize: 18,
    marginTop: 5,
  }
});

const bikeTypeOptions = [
  {}
]

function RoutingOptions() {
  const isOpen = useSharedValue(true);
  const { startMarker, setStartMarker, endMarker, setEndMarker, route, setRoute } = useMarkers();
  async function getRoute() {
    const filter = {
      bicycle_type: "Road",
      use_roads: true,
      use_hills: false,
      use_living_streets: false,
      avoid_bad_surfaces: true,
      shortest: true
    }

    const fetchedRoute = await fetchRoute({start: {lon: startMarker.longitude, lat: startMarker.latitude}, target: {lon: endMarker.longitude, lat: endMarker.latitude}, filter: null});
    setRoute(fetchedRoute.waypoints)
  }

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
      <View style={styles.bikeTypeContainer}>
        <View style={styles.bikeTypeRow}>
          <View style={styles.bikeType}>
            <Image source={require('./../../assets/Bike_black.png')} />
            <Text style={styles.bikeTypeTitle}>Rower szosowy</Text>
          </View>
          <View style={styles.bikeType}>
            <Image source={require('./../../assets/City_black.png')} />
            <Text style={styles.bikeTypeTitle}>Rower miejski</Text>
          </View>
        </View>
        <View style={styles.bikeTypeRow}>
          <View style={styles.bikeType}>
            <Image source={require('./../../assets/Forest_black.png')} />
            <Text style={styles.bikeTypeTitle}>Rower crossowy</Text>
          </View>
          <View style={styles.bikeType}>
            <Image source={require('./../../assets/Mountain_black.png')} />
            <Text style={styles.bikeTypeTitle}>Rower górski</Text>
          </View>
        </View>
      </View>
      <View style={styles.points}>
        <View style={styles.btnWrapper}>
          <CustomBtn iconPath={require("../../assets/Settings.png")}>Ustawienia trasy</CustomBtn>
        </View>
        <View style={styles.btnWrapper}>
          <CustomBtn 
            iconPath={require("../../assets/Arrow.png")} 
            backgroundColor='#F56A3E' 
            color='#FFFFFF'
            onPress={getRoute}>Wyznacz trasę</CustomBtn>
        </View>
      </View>
    </BottomSheet>
  )
}

export default RoutingOptions;
