import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";
import Card from "./Components/Card";
import Search from "./Components/Search";

function App() {
  // const [CARDS, setCard] = useState(data)

  function onClickSpace() {}

  return (
    <div className="MainDiv">
      <Search onClickSpace={onClickSpace} />

      {data.map((t, idx) => {
        return (
          <Card
            key={nanoid()}
            id={t.id}
            img={t.logo}
            company={t.company}
            position={t.position}
            role={t.role}
            level={t.level}
            languages={t.languages}
            tools={t.tools}
            new={t.new}
            featured={t.featured}
            postedAt={t.postedAt}
            contract={t.contract}
            location={t.location}
          />
        );
      })}
    </div>
  );
}

export default App;
