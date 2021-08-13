import "./App.css";
import Map from "./Map";
import React from "react";
import Papa from "papaparse";

function cleanUp(data){
  //parse
  data.forEach((entry)=> {
    console.log(entry)
  })
  return data;
  
}

function App() {
  const [data, SetData] = React.useState();
  const [heatMapData, SetHeatMapData] = React.useState({});
  // const heatMapData =  {
  //     positions: cleanUp(data),
  //     options: {
  //       radius: 20,
  //       opacity: 0.6,
  //     },
  // };

  const setData = (result) => {
    SetData({ data: result.data });
    SetHeatMapData({ 
      positions: cleanUp(data),
      options: {
        radius: 20,
        opacity: 0.6,
      },});
  };

  const getCsvData = async (file) => {
    let csvData = await fetchCsv(file);

    Papa.parse(csvData, {
      complete: setData,
    });
  };

  const fetchCsv = (file) => {
    return fetch(file).then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  };

  React.useEffect(() => {
    getCsvData("statelatlong.csv");
  }, []);

  return (
    <div className="App">
      {console.log(data)}
      <Map props={heatMapData} />
    </div>
  );
}

export default App;
