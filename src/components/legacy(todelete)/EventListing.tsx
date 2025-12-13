export default function EventListing({
  title,
  alte,
  image,
  dateOf,
  location,
  desc,
}: {
  title: string;
  alte?: string;
  image?: string;
  dateOf: string;
  location: string;
  desc: string;
}) {
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt={alte ? alte : desc} />
      <p>
        <em>{dateOf}</em>
      </p>
      <p>{location}</p>
      <p>{desc}</p>
    </>
  );
}
