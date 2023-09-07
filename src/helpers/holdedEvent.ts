import dispatchNewEvent from "./dispatchNewEvent";
let previousSender = "";
let currentSender = "";

const holdedEvent = async (event: any) => {
  if (event.gifted) {
    currentSender = event.sender;
    dispatchNewEvent(event);
  } else {
    window.dispatchEvent(
      new CustomEvent("onEventReceived", {
        detail: {
          listener: "subscriber",
          event: event,
        },
      })
    );
  }
};

export default holdedEvent;
