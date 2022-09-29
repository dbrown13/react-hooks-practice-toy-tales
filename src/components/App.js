import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((data) => setToys(data))
  }, [])
 
  const handleAddToy = (newToy) => {
    setToys([newToy, ...toys])
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDeleteToy(toyToDelete) {
    const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
    setToys(updatedToys)
  }

  function handleUpdatedToy(toyToUpdate) {
    const updatedToyLikes = toys.map((toy) => toy.id === toyToUpdate.id ? toyToUpdate.likes += 1 : toy.likes)
    setToys(updatedToyLikes)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToy={handleDeleteToy} handleUpdatedToy={handleUpdatedToy} />
    </>
  );
}

export default App;
