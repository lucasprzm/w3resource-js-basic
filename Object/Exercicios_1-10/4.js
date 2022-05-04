var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];
for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus) {
    console.log(`Você já leu o livro ${library[i].title}!`);
  } else {
    console.log(`Você não leu o livro ${library[i].title}!`);
  }
}
