export default (date: Date): string =>
  `${date.getHours() > 13 ? "오후" : "오전"} ${
    date.getHours() % 12
  }시 ${date.getMinutes()}분`;
