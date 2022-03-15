const fun = function(string, num) {
  return setTimeout(() => {
    process.stdout.write(string);
  }, num);
};
const sys = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ', '\n'];
let count = 100;
for (let item of sys) {
  fun(item, count);
  count = count + 200;
}



