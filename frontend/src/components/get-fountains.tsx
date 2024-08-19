import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { LocationType } from "../types/location-type";
import { useCallback, useState } from "react";

// pin fountains on map
export const LocationMarkers = (props: { locations: LocationType[] }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [openMarkerId, setOpenMarkerId] = useState<string | null>(null);

  const handleMakerClick = useCallback(
    (markerId: string) =>
      setOpenMarkerId((prevMarkerId) =>
        prevMarkerId === markerId ? null : markerId
      ),
    []
  );

  const handleClose = useCallback(() => setOpenMarkerId(null), []);

  return (
    <>
      {props.locations.map((location) => (
        <AdvancedMarker
          key={location.mapid}
          ref={markerRef}
          position={location.geo_point_2d}
          onClick={() => {
            handleMakerClick(location.mapid);
          }}
        >
          <Pin
            background={`#2E679A`}
            glyphColor={"#C1C8CE"}
            borderColor={"#C1C8CE"}
          />

          {openMarkerId === location.mapid && marker && (
            <InfoWindow anchor={marker} onClose={handleClose}>
              <h3>{location.name}</h3>
              <h5>{location.location}</h5>
            </InfoWindow>
          )}
        </AdvancedMarker>
      ))}
    </>
  );
};
