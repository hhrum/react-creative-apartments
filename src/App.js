import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {FlatList} from "./components/FlatList";
import './App.scss';
import {loadFlats} from "./redux/flatsAsyncActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFlats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <FlatList/>
    </div>
  );
}

export default App;
