import { useRef } from "react";

const App = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5;
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div>
      <h2>Custom Video Player</h2>

      <video
        ref={videoRef}
        width="500"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleForward}>⏩ Forward</button>
        <button onClick={handleRewind}>⏪ Rewind</button>
      </div>
    </div>
  );
};

export default App;
