import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, handleDeleteToy, handleUpdatedToy} ) {

  

  const toyCards = toys.map((toy) => (
    <ToyCard key={toy.id} toys={toy} handleDeleteToy={handleDeleteToy} handleUpdatedToy={handleUpdatedToy}/>
  ))
  
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
