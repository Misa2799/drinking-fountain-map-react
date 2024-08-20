import { AdvancedMarker, InfoWindow, Pin } from "@vis.gl/react-google-maps";
import { LocationType } from "../types/location-type";
import { useCallback, useRef, useState } from "react";

// pin fountains on map
export const LocationMarkers = (props: { locations: LocationType[] }) => {
  const [openMarkerId, setOpenMarkerId] = useState<string | null>(null);

  const handleMarkerClick = useCallback(
    (markerId: string) =>
      setOpenMarkerId((prevMarkerId) =>
        prevMarkerId === markerId ? null : markerId
      ),
    []
  );

  const handleClose = useCallback(() => setOpenMarkerId(null), []);

  return (
    <>
      {props.locations.map((location, index) => {
        const markerRef =
          useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

        return (
          <AdvancedMarker
            key={`${location.mapid}_${index}`}
            ref={markerRef}
            position={location.geo_point_2d}
            onClick={() => {
              handleMarkerClick(location.mapid);
            }}
          >
            <Pin
              background={`#2E679A`}
              glyphColor={"#C1C8CE"}
              borderColor={"#C1C8CE"}
            />

            {openMarkerId === location.mapid && markerRef.current && (
              <InfoWindow anchor={markerRef.current} onClose={handleClose}>
                <h3>{location.name}</h3>
                <h5>{location.location}</h5>
              </InfoWindow>
            )}
          </AdvancedMarker>
        );
      })}
    </>
  );
};
