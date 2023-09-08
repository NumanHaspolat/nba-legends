import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Main from "./components/Main";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} />
      <Main search={search} />
    </div>
  );
}

export default App;
