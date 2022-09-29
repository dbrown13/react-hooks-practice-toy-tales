import React from "react";

function ToyCard( {toys, handleDeleteToy, handleUpdatedToy} ) {
  const {name, image, likes} = toys

  function onChange() {
    fetch(`http://localhost:3001/toys/${toys.id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => {
    handleDeleteToy(toys)})
  }

  function handleLikeClick() {
    const updatedObj = {
      likes: toys.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${toys.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedObj)
    })
    .then((response) => response.json())
    .then(handleUpdatedToy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button onClick={onChange} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
