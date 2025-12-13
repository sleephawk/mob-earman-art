import EventListing from "./EventListing";
import Page from "./Page";

export default function Events({
  cb,
  visible,
}: {
  cb: () => void;
  visible: boolean;
}) {
  return (
    <div>
      <Page
        cb={cb}
        h="Events"
        classN="eventsPage"
        visible={visible}
        content="Coming Soon 👀"
      />
      {/* <EventListing
        title={"Open Studios"}
        image={""}
        dateOf={"5th - 7th Dec 2025"}
        location={"Electric Elephant Cafe"}
        desc={""}
      ></EventListing> */}
    </div>
  );
}
