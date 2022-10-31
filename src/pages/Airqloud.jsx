import React from "react";
import { useLoadScript } from "@react-google-maps/api";
// import Map from "../components/Map";
// import addIconAttribute from "../utils";

import Header from "../components/Header";

function Airqloud(data) {
  // const [markers, setMarkers] = React.useState(() => addIconAttribute(data));

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div className="Main">
      <Header />
      <div className="Container">
        <div className="MapSide">
          <div className="Slogan">Bigoto AirQloud</div>
          <div>Map Area</div>
          {/* <Map markers={markers} key={JSON.stringify(markers)} /> */}
          <div className="note">
            Note: You can only view public devices of the Akright Organisation.
          </div>
        </div>
        <div className="FormSide">
          <div className="DashboardForm">
            <div className="Details">AirQloud details</div>
            <div className="detailGroup">
              <div className="detailHeader">Name</div>
              <div className="detailValue">Bigoto</div>
            </div>
            <div className="detailGroup">
              <div className="detailHeader">Generated Name</div>
              <div className="detailValue">Bigoto1234291022</div>
            </div>
            <div className="detailGroup">
              <div className="detailHeader">Description</div>
              <div className="detailValue">
                Bigoto is an Akright AirQloud meant to monitor air quality in
                this housing estate
              </div>
            </div>
            <div className="detailGroup">
              <div className="detailHeader">Tags</div>
              <div className="detailValue">RealEstate, Lakeshore</div>
            </div>
            <div className="detailGroup">
              <div className="detailHeader">Location</div>
              <div className="detailValue">
                lat: 0.32219903018220497, lng: 32.59106383073049, <br/>lat:
                0.32219903018220497, lng: 32.59106383073049, <br/>lat:
                0.32219903018220497, lng: 32.59106383073049,<br/> lat:
                0.32219903018220497, lng: 32.59106383073049,<br/> lat:
                0.32219903018220497, lng: 32.59106383073049, <br/>lat:
                0.32219903018220497, lng: 32.59106383073049, <br/>lat:
                0.32219903018220497, lng: 32.59106383073049,
              </div>
            </div>
            <div className="detailGroup">
              <div className="detailHeader">Center Point</div>
              <div className="detailValue">
                {" "}
                lat: 0.32219903018220497, lng: 32.59106383073049,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airqloud;
