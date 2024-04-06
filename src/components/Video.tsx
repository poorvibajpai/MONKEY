import video from "../assets/video.mp4"
export default function Example() {
  return (
    <video className="h-full w-full rounded-lg" controls autoPlay muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}