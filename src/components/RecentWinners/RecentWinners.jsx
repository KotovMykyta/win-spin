import "./RecentWinners.scss";
import recentWinnersIcon from "@/assets/recent-winners-icon.svg";
import recentWinnersText from "@/assets/recent-winners-text.svg";
import { recentWinnersData } from "./helpers";
import RecentWinnerCard from "./RecentWinnerCard";

const RecentWinners = () => {
  return (
    <div className="recent-winners">
      <div className="wrapper top"></div>
      <div className="wrapper bottom"></div>
      <div className="content">
        <div className="icons">
          <img
            src={recentWinnersIcon}
            className="recent-winners-logo"
            alt="logo"
          />
          <img
            src={recentWinnersText}
            className="recent-winners-logo"
            alt="logo"
          />
        </div>
        <div className="winner-card-wrapper">
          <div className="winner-card-carousel">
            {recentWinnersData.map((winner) => (
              <RecentWinnerCard key={winner.id} winner={winner}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWinners;
