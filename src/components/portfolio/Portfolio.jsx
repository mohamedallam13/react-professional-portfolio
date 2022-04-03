import { useEffect, useState } from "react";
import Card from '../card/Card'
import './portfolio.css'

import {
  allInfo
} from "../../allInfo";

const { portfolioDesc, portfolio } = allInfo;
const items = Object.keys(portfolio);


export default function Portfolio() {
  
  const [selected, setSelected] = useState(items[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = portfolio[selected].projects;
    setData(data);
  }, [selected]);

  return (
    <div className="p" id="p">
      <div className="p-texts">
        <h1 className="p-title">Turn Dreams into Reality</h1>
        <p className="p-desc">
          {portfolioDesc}
        </p>
        <ul>
          {items.map((item) => (
            <li
              className={selected === item ? "p-menu active" : "p-menu"}
              onClick={() => setSelected(item)}
            >
              {portfolio[item].title}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-list">
        {data.map((project) => (
          <Card key={project.id}
            title={project.projectName}
            img={project.projectImage}
            link={project.projectLink} />
        ))}
      </div>
    </div>
  )
}
