import Menu from "./components/Menu";
import "./App.css";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Playlist from "./components/Playlist";
import PlayerPlayList from "./components/playerPlayList";

function App() {
  return (
    <div>
      <Menu />
      <PlayerPlayList />
    </div>
  );
}

export default App;
