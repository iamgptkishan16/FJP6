let cp = require("child_process");
console.log(cp);

//opening calculator
cp.execFileSync("calc");
//for linuyx if gnome calculator is installed
// cp.execFileSync("gnome-calculator");