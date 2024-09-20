export function shuffleArray({ arr, setArr }) {
  let newArr = [...arr];
  let currentIndex = newArr.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }
  setArr(newArr);
}
