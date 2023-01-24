import React, { useState } from "react";
import Header from "../components/Header";
import Images from "../components/Images";
function Home() {
  const [search, setSearch] = useState("");
  const changeSearch = (value) => {
    setSearch(value);
  };
  return (
    <div>
      <Header props={changeSearch} />
      <Images props={search} />
    </div>
  );
}

export default Home;
