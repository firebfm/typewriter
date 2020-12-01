const sentence = "hello there from lighthouse labs";

let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i*50)
  i += 1;
}
setTimeout(() => {
  console.log("\n");
}, i*51);