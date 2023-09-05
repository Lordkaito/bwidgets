const removeEvent = (mainContainer: HTMLElement) => {
  console.log(mainContainer, event)
  const elem = mainContainer;

  elem.style.animationName = "removeMessage";
  setTimeout(() => {
    elem.remove();
  }, 1000);
};

export default removeEvent;