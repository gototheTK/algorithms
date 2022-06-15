function solution(genres, plays) {
  var answer = [];
  // plays => genres => each plays => genre num

  let sumPlays = {};
  genres.map((item, index) => {
    sumPlays[item] = sumPlays.hasOwnProperty(item)
      ? sumPlays[item] + plays[index]
      : plays[index];
  });

  let numbers = {};
  genres.map((item, index) => {
    let number = sumPlays[item];
    console.log(numbers[number]);
    numbers[number] = numbers.hasOwnProperty(number)
      ? [...numbers[number], index]
      : [index];
  });

  let keys = Object.keys(numbers).sort(function (a, b) {
    return b - a;
  });

  console.log(sumPlays, numbers, keys);

  keys.map((item) => {
    const arr = numbers[item]
      .sort(function (a, b) {
        return plays[b] - plays[a];
      })
      .slice(0, 2)
      .map((item) => {
        answer.push(item);
      });
  });

  return answer;
}
