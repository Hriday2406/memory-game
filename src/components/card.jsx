export default function Card({ item, level, onClick }) {
  let isNameVisible = level == 2;
  return (
    <div
      className={`transition-all duration-200 p-3 border-2 rounded-3xl flex flex-col items-center gap-3 hover:scale-105 uppercase hover:shadow-lg group backdrop-blur-sm active:scale-90 sm:gap-5 sm:p-5 sm:rounded-[32px]
      ${level == 2 && "hover:shadow-med"} 
      ${level == 3 && "hover:shadow-hard"} 
      ${level == 2 && "border-med"} 
      ${level == 3 && "border-hard"} `}
      onClick={onClick}
    >
      <div className="w-40 overflow-hidden transition-all duration-200 select-none rounded-xl group-hover:scale-90 lg:w-44 ">
        <img
          src={item.url[Math.floor(Math.random() * 25)]}
          alt={item.alias}
          className="h-24 sm:h-28 lg:h-40"
        />
      </div>
      <h2 className={`${!isNameVisible && "hidden"}`}>{item.name}</h2>
    </div>
  );
}
