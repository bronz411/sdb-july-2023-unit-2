let i = 1;

while (i <= 100) {
  if (i % 4 == 0 && i % 8 != 0) {
    console.log(i + "!");
  } else if (i % 8 == 0) {
    console.log("More!");
  } else {
    console.log(i + " potato,");
  }
  i++;
}
