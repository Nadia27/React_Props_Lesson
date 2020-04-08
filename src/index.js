import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 7891"
      email="b@beyonce.com"
    />
    <Card
      name="Jay Z"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg/330px-Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg"
      tel="+123 456 7890"
      email="hov@rocnation.com"
    />
  </div>,
  document.getElementById("root")
);
