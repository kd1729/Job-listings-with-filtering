import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";
import Card from "./Components/Card";
import Search from "./Components/Search";

function App() {
  const [CARDS, setCards] = useState(data);

  const checker = (arr, target) => target.every((v) => arr.includes(v));

  function onPressEnter(Tags) {
    setCards(
      CARDS.map((t) => {
        t.display = true;
        let temp = [t.role, t.level, ...t.languages, ...t.tools];
        console.log(checker(temp, Tags));
        if (!checker(temp, Tags))
          t.display = false;
        return t;
      })
    );
  }

    function resetAll(){
      window.location.reload();
    }


  return (
    <div className="MainDiv">
      <div className="header">
      <Search onPressEnter={onPressEnter} />
      <div className="resetAll" onClick={resetAll}>Clear Tags </div>
      </div>

      {CARDS.map((t, idx) => {
        return (
          <Card
            display={t.display}
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
