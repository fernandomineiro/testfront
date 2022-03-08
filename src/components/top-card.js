import React from "react";

const TopCard = ({
  social,
  username,
  number,
  typeFollowers,
  today,
  tendence,
}) => {
  return (
    <article className={`card ${social}`}>
      <p className="card-title">
        <img src={`images/icon-${social}.svg`} alt="" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{number}</span>
        <span className="card-followers-title">{typeFollowers}</span>
      </p>
      <p className={`card-today ${tendence}`}>
        <img src={`images/icon-${tendence}.svg`} alt="" />
        {today} Today
      </p>
    </article>
  );
};

export default TopCard;
