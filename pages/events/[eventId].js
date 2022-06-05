import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const EventDetails = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found!!! </p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetails;
