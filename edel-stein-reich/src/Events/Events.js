import { useState } from "react";
import React from "react";

const eventsDirectory = '/resources/event/'
const eventsCount = 30

function Events() {

  const drawEventCard = () =>
    eventDeck[Math.floor(Math.random() * eventDeck.length)]

  const zeroPad = (num, places) =>
    String(num).padStart(places, '0')

  const createDeck = () => {
    let tmp = []
    for (let i = 1; i < 18; i++) {
      tmp.push(eventsDirectory + 'edel_' + zeroPad(i,2) + '.jpg')
    }
    return tmp
  }

  const eventDeck = createDeck() 
  const [eventCard, setEventCard] = useState(drawEventCard())
  
  return (
    <div className="Events">
      <img src={eventCard} width="100" />
      <p>
      Event {eventCard} card
      </p>
      <button onClick={() => setEventCard(eventDeck[Math.floor(Math.random() * 17)])}>
        Draw Event
      </button>
    </div>
  );
}

export default Events;
