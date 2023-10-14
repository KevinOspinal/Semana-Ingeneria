import React from "react";
import './Context.css'


export default function Context({componentPage,stadePage}) {
  
  return (
    <main className="main col-sm-8 col-md-9 ms-sm-auto col-lg-10 p-0 context-container vh-100">
      { componentPage[stadePage] }
    </main>
  );
}