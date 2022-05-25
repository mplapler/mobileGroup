import React from "react";
import AppCard from "./AppCard";
import { useState, useEffect } from "react";

const AppsList = ({ appList }) => {
  const [latestVersionList, setLatestVersionList] = useState([]);

  const sortByName = () => {
    const sorted = appList.sort((a, b) => {
      return (
        a.payload.app_name.toLowerCase() + b.payload.app_name.toLowerCase()
      );
    });
    return sorted;
  };

  const removeOlderVersions = (sortedArray) => {
    sortedArray.forEach((app, index, arr) => {
      if (app?.payload?.app_name == arr[index + 1]?.payload?.app_name) {
        if (
          Number(app?.payload?.version) >
          Number(arr[index + 1]?.payload?.version)
        ) {
          sortedArray.splice(index + 1, 1);
        } else {
          sortedArray.splice(index, 1);
        }
      }
    });
    return sortedArray;
  };

  useEffect(() => {
    if (appList) {
      const sortedArray = sortByName();
      const newVersionsArray = removeOlderVersions(sortedArray);
      setLatestVersionList(newVersionsArray);
    }
  }, [appList]);

  return (
    <div className="apps-list">
      {latestVersionList &&
        latestVersionList.length > 0 &&
        latestVersionList.map((app, i) => (
          <AppCard key={i} app={app.payload} />
        ))}
    </div>
  );
};
export default AppsList;
