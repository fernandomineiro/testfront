import React from "react";
import "../css/overview-card.css";
import OverviewCard from "./overview-card";

const cardListData = [
  {
    id: 1,
    title: "Page Views",
    social: "facebook",
    number: "87",
    tendence: "up",
    percentage: "3%",
  },
  {
    id: 2,
    title: "Likes",
    social: "facebook",
    number: "52",
    tendence: "down",
    percentage: "2%",
  },
  {
    id: 3,
    title: "Likes",
    social: "instagram",
    number: "5462",
    tendence: "up",
    percentage: "2257%",
  },
  {
    id: 4,
    title: "Profile Views",
    social: "instagram",
    number: "52k",
    tendence: "up",
    percentage: "1375%",
  },
  {
    id: 5,
    title: "Retweets",
    social: "twitter",
    number: "117",
    tendence: "up",
    percentage: "303%",
  },
  {
    id: 6,
    title: "Likes",
    social: "twitter",
    number: "507",
    tendence: "up",
    percentage: "553%",
  },
  {
    id: 7,
    title: "Likes",
    social: "youtube",
    number: "107",
    tendence: "down",
    percentage: "19%",
  },
  {
    id: 8,
    title: "Total Views",
    social: "youtube",
    number: "1407",
    tendence: "down",
    percentage: "12%",
  },
];
const OverviewCardList = () => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2 className="overview-title">Overview - Hoje</h2>
        <div className="grid">
          {cardListData.map((cardData) => (
            <OverviewCard key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewCardList;
