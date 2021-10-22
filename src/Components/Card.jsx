import React from "react";

const Card = (props) => {
  const arr = [
    props.role,
    props.level,
    ...props.languages,
    ...props.tools
  ];

  return (
    <div className="CardDiv"
    style={{
      display: (props.display  ? "flex" : "none"),
    }}
    >
      <img src={props.img} alt="" />

      <div className="Info">
        <div className="one">
          {props.company}
          {props.new && <span className="New">New</span>}
          {props.featured && <span className="Featured">Featured</span>}
        </div>
        <div className="two">{props.position}</div>
        <div className="three">
          <span className="postedAt">{props.postedAt}</span>
          <span className="contract">{props.contract}</span>
          <span className="location">{props.location}</span>
        </div>
      </div>

      <div className="languagesandtools">
        {arr.map(t => (
          <span key={t} className="list">{t}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
