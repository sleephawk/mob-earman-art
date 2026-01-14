export default function VideoBackground({ src }: { src: string }) {
  return (
    <video autoPlay={true} loop={true} className="background-file">
      <source src={src} type="video/webm" />
      Your browser does not support webm files
    </video>
  );
}
