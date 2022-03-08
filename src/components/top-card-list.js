import React from "react";
import "../css/top-card.css";
import TopCard from "./top-card";

const cardListData = [
  {
    id: 1,
    social: "facebook",
    username: "@nathanf",
    number: "1987",
    typeFollowers: "Followers",
    today: "12",
    tendence: "up",
  },
  {
    id: 2,
    social: "twitter",
    username: "@nathanf",
    number: "1044",
    typeFollowers: "Followers",
    today: "99",
    tendence: "up",
  },
  {
    id: 3,
    social: "instagram",
    username: "@realnathanf",
    number: "11k",
    typeFollowers: "Followers",
    today: "1099",
    tendence: "up",
  },
  {
    id: 4,
    social: "youtube",
    username: "Nathan F.",
    number: "8239",
    typeFollowers: "Subscribers",
    today: "144",
    tendence: "down",
  },
];
const TopCardList = () => {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <TopCard key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCardList;
