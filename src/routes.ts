import Navbar from "./components/navbar";
import Widget from "./components/widget";
import WidgetsPage from "./pages/Widgets";
import Cereza from "./components/chats/cereza";
import Customizable from "./components/chats/customizable";
import Girasoles from "./components/chats/girasoles";
import Margaritas from "./components/chats/margaritas";
import Mario from "./components/chats/mario";
import Tulipanes from "./components/chats/tulipanes";
import Alpaca from "./components/chats/alpaca";

const routesToChatComponents = [
  {
    id: 1,
    component: Cereza,
    name: "Cereza Chat",
    hasEvents: { status: false },
  },
  {
    id: 2,
    component: Customizable,
    name: "Customizable Chat",
    hasEvents: { status: false },
  },
  {
    id: 3,
    component: Girasoles,
    name: "Girasoles Chat",
    hasEvents: { status: false },
  },
  {
    id: 4,
    component: Margaritas,
    name: "Margaritas Chat",
    hasEvents: { status: false },
  },
  {
    id: 5,
    component: Tulipanes,
    name: "Tulipanes Chat",
    hasEvents: { status: false },
  },
  { id: 6, component: Mario, name: "Mario Chat", hasEvents: { status: false } },
  {
    id: 7,
    component: Alpaca,
    name: "Alpaca Chat",
    hasEvents: {
      status: true,
      events: ["message", "tip", "cheer", "follower", "subscriber"],
    },
  },
];

export default routesToChatComponents;
