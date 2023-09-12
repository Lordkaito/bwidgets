import Cereza from "./components/chats/cereza";
import Customizable from "./components/chats/customizable";
import Girasoles from "./components/chats/girasoles";
import Margaritas from "./components/chats/margaritas";
import Tulipanes from "./components/chats/tulipanes";
import Sleepy from "./components/chats/sleepy";
import Rainbow from "./components/chats/rainbow";
import cherry from "./assets/images/cherry.webp";
import daisy from "./assets/images/daisy.webp";
import sunflower from "./assets/images/sunflower.webp";
import tulip from "./assets/images/tulip.webp";
import rainbow from "./assets/images/rainbow.webp";
import sleepychat from "./assets/images/sleepy.webp";
const routesToChatComponents = [
  {
    id: 1,
    component: Cereza,
    name: "Cereza Chat",
    hasEvents: false,
    eventsToEmulate: [],
    image: cherry,
    url: "https://www.etsy.com/es/listing/1547426989/chat-widget-for-twitch-custom-chat?click_key=3bdd9eb951eb6272c80df91317c155dba6059e8f%3A1547426989&click_sum=3eed6b8b&ref=shop_home_active_7&crt=1&sts=1",
  },
  {
    id: 2,
    component: Girasoles,
    name: "Girasoles Chat",
    hasEvents: true,
    eventsToEmulate: [
      "subscriber",
      "follow",
      "cheer",
      "host",
      "raid",
    ],
    image: sunflower,
  },
  {
    id: 3,
    component: Margaritas,
    name: "Margaritas Chat",
    hasEvents: true,
    eventsToEmulate: [
      "subscriber",
      "follow",
      "cheer",
      "host",
      "raid",
    ],
    image: daisy,
  },
  {
    id: 4,
    component: Tulipanes,
    name: "Tulipanes Chat",
    hasEvents: true,
    eventsToEmulate: [
      "subscriber",
      "follow",
      "cheer",
      "host",
      "raid",
    ],
    image: tulip,
  },
  {
    id: 5,
    component: Rainbow,
    name: "Rainbow Chat",
    hasEvents: false,
    eventsToEmulate: [],
    image: rainbow,
  },
  {
    id: 6,
    component: Sleepy,
    name: "Sleepy Chat",
    hasEvents: true,
    eventsToEmulate: [
      "subscriber",
      "follow",
      "cheer",
      "host",
      "raid",
    ],
    image: sleepychat,
  },
];

export default routesToChatComponents;
