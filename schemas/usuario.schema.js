//const Ajv = require("ajv")
//const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const dados = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    senha: { type: "string" }
  },
  required: ["email", "senha"],
  additionalProperties: false
}
// ESTRUTURA ORIGINAL DO AJV
/* 
const validate = ajv.compile(usuarioSchema)
const usuario = {
  foo: 1,
  bar: "abc"
}
const valid = validate(usuario)
if (!valid) console.log(validate.errors) 
*/
module.exports = dados