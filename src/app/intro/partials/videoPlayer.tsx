import ReactPlayer from "react-player";

export default function VideoPlayer() {
  return (
    <ReactPlayer
      playing
      controls={true}
      url="https://res.cloudinary.com/caturteguh/video/upload/v1735899578/other/videoplayback_arviof.mp4"
      width="100%"
      height="100%"
    />
  );
}
