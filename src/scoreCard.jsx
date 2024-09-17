export default function ScoreCard() {
  return (
    <>
      <div className="p-3 border-2 rounded-2xl ">
        <div className="flex gap-14">
          <p className="scoreText">Score</p>
          <p className="score"></p>
        </div>
        <div className="flex gap-5">
          <p className="scoreText">Best Score</p>
          <p className="bestScore"></p>
        </div>
      </div>
    </>
  );
}
