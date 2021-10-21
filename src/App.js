import { useState } from "react";
import data  from "./data";
import Card from "./Components/Card";

function App() {
 
  const [CARDS, setCard] = useState(data)


  return (
    <div className="MainDiv">

        {CARDS.map((t,idx) => {
          return(
            <Card 
              key={t.id}
              img={t.logo}
              company={t.company}
              position={t.position}
              role={t.role}
              level={t.level}
            />
          )
        })

        }

    </div>
  );
}

export default App;
