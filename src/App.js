import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import SummeryModel from "./components/Meals/SummeryModel";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header/>
      {/* <SummeryModel/> */}
      <Meals/>
    </Fragment>
  );
}

export default App;
