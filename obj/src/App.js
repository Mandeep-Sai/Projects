import React from "react";
import "./App.css";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import * as faceapi from "face-api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: null,
    };
    this.videoTag = React.createRef();
  }

  startVideo = () => {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => (this.videoTag.current.srcObject = stream))
      .catch(console.log);
  };
  componentDidMount = async () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(this.startVideo());
    const video = document.getElementById("video");
    const app = document.querySelector(".App");

    mobilenet.load().then((model) => {
      // Classify the image.
      model.classify(video).then((predictions) => {
        console.log("Predictions: ");
        console.log(predictions);
      });
    });
    video.addEventListener("play", () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      // app.append(canvas);
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
        //console.log(detections);
        if (detections.length > 0) {
          let kys = Object.keys(detections[0].expressions);
          let vals = Object.values(detections[0].expressions);
          let highVal = vals.indexOf(Math.max(...vals));
          this.setState({ expression: kys[highVal] });
          console.log(kys[highVal]);
        } else {
          this.setState({ expression: "Face not detected" });
        }
        //   const resizedDetections = faceapi.resizeResults(
        //     detections,
        //     displaySize
        //   );
        //   canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        //   faceapi.draw.drawDetections(canvas, resizedDetections);
      }, 1000);
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.expression ? <p>{this.state.expression}</p> : null}
        <video
          id="video"
          ref={this.videoTag}
          width="360"
          height="360"
          autoPlay
        ></video>
      </div>
    );
  }
}

export default App;
