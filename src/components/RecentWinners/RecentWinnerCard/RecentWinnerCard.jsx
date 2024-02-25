/* eslint-disable react/prop-types */
import "./RecentWinnerCard.scss";

const RecentWinnerCard = ({ winner }) => {
  return (
    <div className="winner-card">
      <div className="winner-card-text">
        <p>
          {winner.winnerName} - {winner.winning} <br /> in{" "}
          <span className="winner-game">{winner.game}</span>
        </p>
      </div>
      <div className="winner-card-game-icon">
        <img
          src={winner.gameIcon}
          alt="gameIcon"
        />
      </div>
    </div>
  );
};

export default RecentWinnerCard;
