import Favourite from "./components/Favourite/Favourite";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Modal/Modal";
import Search from "./components/Search/Search";
import {useGlobalContext} from "./Context";
function App() {
  const {showModal, favourites} = useGlobalContext();
  return (
    <>
      <Search />
      {favourites.length > 0 && <Favourite />}
      <Meals />
      {showModal && <Modal />}
    </>
  );
}

export default App;
