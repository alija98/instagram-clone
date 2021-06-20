import React, { useState } from "react";
import firebase from "firebase";
import { Input, Button } from "@material-ui/core";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState("");

  const handleChange = (e) => {};

  const handleUpload = (e) => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Insert a caption"
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      ></input>
      <input type="file" onChange={handleChange}></input>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
