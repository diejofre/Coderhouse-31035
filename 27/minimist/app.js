import minimist from "minimist";

const options = { alias: { m: "modo", p: "puerto", d: "debug" } };
console.log(minimist(process.argv.slice(2), options));
