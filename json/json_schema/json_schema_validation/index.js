const process = require("process");
const fs = require("fs");
const jsonschema = require("jsonschema");

const schemaPath = process.argv[2];
const definitionsPath = process.argv[3];
const dataPath = process.argv[4];

console.log(schemaPath);
console.log(definitionsPath);
console.log(dataPath);

const schemaJson = fs.readFileSync(schemaPath);
console.log(schemaJson);
const schema = JSON.parse(schemaJson);
console.log(schema);

if (definitionsPath !== "") {
    const definitionsJson = fs.readFileSync(definitionsPath);
    console.log(definitionsJson);
    const definitions = JSON.parse(definitionsJson);
    console.log(definitions);

    schema.definitions = definitions.definitions;
}

const dataJson = fs.readFileSync(dataPath);
console.log(dataJson);
const data = JSON.parse(dataJson);
console.log(data);

console.log(jsonschema.validate(data, schema));
