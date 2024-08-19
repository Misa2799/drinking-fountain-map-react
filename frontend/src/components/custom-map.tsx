import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { LocationMarkers } from "./get-fountains";
import jsonData from "../../../fountains-data/drinking-fountains.json";
import { LocationType } from "../types/location-type";

const locations: LocationType[] = jsonData.map((fountain) => {
  return {
    mapid: fountain.mapid,
    name: fountain.name,
    location: fountain.location,
    geo_point_2d: {
      lat: fountain.geo_point_2d.lat,
      lng: fountain.geo_point_2d.lon,
    },
  };
});

export function CustomMap() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [markerLocation, _setMarkerLocation] = useState({
    // set default in Vancouver
    lat: 49.2827,
    lng: -123.1207,
  });

  return (
    <Container>
      <Map
        mapId={"c18fc510825237b"}
        style={{
          borderRadius: "20px",
          width: "100%",
          height: "600px",
          marginTop: "32px",
        }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <AdvancedMarker position={markerLocation} />
        <LocationMarkers locations={locations} />
      </Map>
    </Container>
  );
}
