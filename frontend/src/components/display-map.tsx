import { APIProvider } from "@vis.gl/react-google-maps";
import { Container } from "react-bootstrap";
import { CustomMap } from "./custom-map";

export function DisplayMap() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error("api key might be wrong");
  }

  return (
    <Container>
      <APIProvider apiKey={apiKey}>
        <CustomMap />
        {/* <GetFountains /> */}
      </APIProvider>
    </Container>
  );
}
