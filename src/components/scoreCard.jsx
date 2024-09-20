export default function ScoreCard({ level, currScore, bestScore }) {
  return (
    <>
      <div
        className={`p-3 border-2 rounded-2xl shadow-lg
        ${level == 1 && "border-easy shadow-easy"} 
        ${level == 2 && "border-med shadow-med"} 
        ${level == 3 && "border-hard shadow-hard"} `}
      >
        <div className="flex gap-14">
          <p className="scoreText">Score</p>
          <p className="score">{currScore}</p>
        </div>
        <div className="flex gap-5">
          <p className="scoreText">Best Score</p>
          <p className="bestScore">{bestScore}</p>
        </div>
      </div>
    </>
  );
}
