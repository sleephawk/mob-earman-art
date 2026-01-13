export default function VideoBackground({ src }: { src: string }) {
  return (
    <video autoPlay={true} className="background-file">
      <source src={src} />
      Your browser does not support webm files
    </video>
  );
}
