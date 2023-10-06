import React from "react";
import './Context.css'
import Headquarters from "./Pages-Admin/Headquarters";
import Conferences from "./Pages-Admin/Conferences";
import Document_Types from "./Pages-Admin/Document_Types";
import Project_User from './Pages-Admin/Project_User'

export default function Context() {
  return (
    <main className="main col-sm-8 col-md-9 ms-sm-auto col-lg-10 p-0">
      <Project_User/>
    </main>
  );
}