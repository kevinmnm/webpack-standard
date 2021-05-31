const path = require('path');

module.exports = {
   entry: ["./Source2/source2.js"],
   output: {
      path: path.resolve(__dirname, "Final"),
      filename: "final_prod.js",
   }
}