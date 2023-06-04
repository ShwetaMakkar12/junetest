import React, { useEffect, useState } from "react";
import Row from "./components/Row";

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

function App() {
  let [arr, setArr] = useState([]);
  
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setArr(data);
    }
    catch (e) {
      console.log("Error", e);
    }
  }

  useEffect(() => {
    fetchData(url);
  },[]);


  return (
    <div>
      <table style={{borderCollapse:"collapse",background:"#1A1A1C", color:"white",margin:"0% 19%"}}>
        <tbody>
          <Row arr={arr} />
        </tbody>
      </table>
    </div>
  );
}

export default App;