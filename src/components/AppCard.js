import { FaDownload } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import noImage from "../images/noImage.jpeg";

const AppCard = ({ app }) => {
  useEffect(() => {}, [app]);

  async function handleDownload() {
    const downloadApp = await axios.get(app.download_url1);
    console.log(downloadApp.data);
  }

  return (
    <div className="card">
      <div className="icon">
        <img
          src={app && app.icon_url ? app.icon_url : noImage}
          alt={app.name}
        />
      </div>
      <span> {app.description} </span>
      <div className="card-footer">
        <small> {app.version} </small>
        <button className="download-btn">
          <FaDownload className="download-icon" onClick={handleDownload} />
        </button>
      </div>
    </div>
  );
};

export default AppCard;
