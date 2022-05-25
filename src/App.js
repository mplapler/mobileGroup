import Greeting from "./components/Greeting";
import AppsList from "./components/AppsList";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import appsData from "./resources/data.json";
import Logo from "./components/LogoBox";

const App = () => {
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    setAppList(appsData.endpoint_response_items_array);
  }, []);

  
  return (
    <div>
      <div className="top-bar">
        <Logo />
        <Search />
      </div>
      <div className="container">
        <div className="header">
          <Greeting />
        </div>
        <AppsList appList={appList} setAppList={setAppList} />
      </div>
    </div>
  );
};

export default App;
