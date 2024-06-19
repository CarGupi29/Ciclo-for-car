for (let i = 1; i <= 9; i += 2) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    for (let j = 0; j < (9 - i) / 2; j++) {
      process.stdout.write(" ");
    }
    process.stdout.write(str + "\n");
    console.log(i);
  }