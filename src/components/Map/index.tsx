import { useContext, useEffect, useState } from "react";

import { StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getLatLongWithAddress } from "../../hooks/requestMaps";

export default function Maps({ address }: { address: string }) {
  const [latLong, setLatLong]: [any, any] = useState();
  useEffect(() => {
    getLatLongWithAddress(address).then(({ data }) => {
      console.log(data);
      setLatLong(data);
    });
  }, []);
  return latLong ? (
    <MapView
      initialRegion={{
        latitude: latLong.lat,
        longitude: latLong.lng,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }}
      style={styles.maps}
    >
      <Marker
        coordinate={{
          latitude: latLong.lat,
          longitude: latLong.lng,
        }}
      ></Marker>
    </MapView>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  maps: {
    width: "100%",
    height: 300,
  },
});
