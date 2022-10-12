import Spinner from "./components/Spinner";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import Footer from "./components/Footer";
import "./App.css";
import axios from "axios";
function App() {
  const [lists, setLists] = useState();

  const onUpdateList = (list) => {
    const listItemIndex = lists.findIndex((x) => x.id === list.id);
    const newLists = [...lists];

    const newList = newLists[listItemIndex];
    newList.completed = !newList.completed;
    newLists[listItemIndex] = newList;
    setLists(newLists);
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      //console.log(result.data);
      setLists(result.data);
    });
  }, []);
  return (
    <>
      <div className="header"></div>
      <div className="container cont ">
        <div className="container-md">
          {lists ? (
            <UserList lists={lists} onUpdateList={onUpdateList} />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
