import Navbar from "../components/navbar";
import Button from "../components/button";
import Cards from "../components/cardscontainer";
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Navbar />
      <Cards />
    </>
  )
}

export default HomePage;