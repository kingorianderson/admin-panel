import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={69} text="69%" strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">KSH 300</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be icluded.
        </p>
      </div>
    </div>
  );
};

export default Featured;
