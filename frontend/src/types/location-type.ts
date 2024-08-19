export type LocationType = {
  mapid: string;
  name: string;
  location: string | null;
  geo_point_2d: google.maps.LatLngLiteral;
};
