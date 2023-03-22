import React, { useState } from "react";
import Arrows from "../Arrows";
import { Intro } from "../Intro";
import { TestLayout } from "./testLayout";

function App() {
  return (
    <>
      <TestLayout />
      <Arrows />
      <Intro title="Hello you" subTitle="Hellow again" />
    </>
  );
}

export default App;
