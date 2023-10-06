import React from "react";
import './Context.css'
import Headquarters from "./Pages-Admin/Headquarters";
import Conferences from "./Pages-Admin/Conferences";

export default function Context() {
  return (
    <main className="main col-sm-8 col-md-9 ms-sm-auto col-lg-10 p-0">
      <Conferences/>
    </main>
  );
}