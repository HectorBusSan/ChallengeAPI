const VisualServices = require("./lib/services/VisualServices");
const Reader = require("./lib/utils/Reader");

console.log(Reader.readingjson().length);
const visual= Reader.readingjson();

console.log(VisualServices.haveCertification(visual));
console.log(VisualServices.credits(visual));
