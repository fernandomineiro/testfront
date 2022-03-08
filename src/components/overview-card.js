import React from "react";

const OverviewCard = ({ title, social, number, tendence, percentage }) => {
  return (
    <article className="card-small">
      <p className="card-small-title">{title}</p>
      <p className="card-small-icon">
        <img src={`images/icon-${social}.svg`} alt="" />
      </p>
      <p className="card-small-number">{number}</p>
      <p className={`card-small-percentage ${tendence}`}>
        <span>
          <img src={`images/icon-${tendence}.svg`} alt="" />
          {percentage}
        </span>
      </p>
    </article>
  );
};

export default OverviewCard;
