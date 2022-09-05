import "./App.css";
import styles from "../src/Globals.module.css";
import Data from "../src/data.json";
import { useState } from "react";

function App() {
  const [query, SetQuery] = useState("");

  return (
    <>
      <div className={styles.titleDiv}>
        <h1 style={{ paddingTop: "30px" }}>MINI SEARCH BAR DEMO</h1>
      </div>

      <div className={styles.searchBarCont}>
        <input
          className={styles.searchBar}
          placeholder="Enter city"
          onChange={(e) => SetQuery(e.target.value)}
        />
      </div>

      <div
        style={{ display: "grid", width: "1000px", flexDirection: "column" }}
      >
        {Data.filter((data) => {
          if (query === "") {
            return data;
          } else if (
            data.last_name.toLowerCase().includes(query.toLowerCase()) ||
            data.first_name.toLowerCase().includes(query.toLowerCase())
          ) {
            return data;
          }
        }).map((data) => (
          <div className={styles.locationCard}>
            <h2>{data.first_name}</h2>
            <h2>{data.last_name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
