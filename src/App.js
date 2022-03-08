import React, { useState, useEffect } from "react";
import "./css/global.css";
import Header from "./components/header";
import Switch from "./components/switch";
import TopCardList from "./components/top-card-list";
import OverviewCardList from "./components/overview-card-list";
import Footer from "./components/footer";

function App() {
  const [mode, setMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const mainClass = mode ? "dark-mode" : "light-mode";

  function changeMedia(mq) {
    setMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setMode(mq.matches);
    setChecked(mq.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          mode={mainClass}
          setMode={setMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCardList />
      <OverviewCardList />
      <Footer />
    </main>
  );
}

export default App;
