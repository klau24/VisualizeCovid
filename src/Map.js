import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = ({ heatMapData }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "80vh", width: "80%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{
          lat: 37.0902,
          lng: -95.7129,
        }}
        heatmapLibrary={true}
        heatmap={heatMapData}
        defaultZoom={5}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
      {/* {getCsvData("all-states-history.csv")} */}
      {/* {console.log(data)} */}
    </div>
  );
};

export default SimpleMap;
