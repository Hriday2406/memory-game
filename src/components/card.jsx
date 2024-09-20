export default function Card({ item, level, onClick }) {
  let isNameVisible = level == 2;
  return (
    <div
      className={`transition-all duration-200 p-5 border-2 rounded-[32px] flex flex-col items-center gap-5 hover:scale-105 uppercase hover:shadow-lg ${
        level == 2 && "hover:shadow-med"
      } ${level == 3 && "hover:shadow-hard"} ${level == 2 && "border-med"} ${
        level == 3 && "border-hard"
      } group`}
      onClick={onClick}
    >
      <div className="w-64 h-64 overflow-hidden transition-all duration-200 select-none rounded-xl group-hover:scale-90">
        <img
          src={item.url[Math.floor(Math.random() * 25)]}
          alt={item.alias}
          className="h-64"
        />
      </div>
      <h2 className={`${!isNameVisible && "hidden"}`}>{item.name}</h2>
    </div>
  );
}
