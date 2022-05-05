// 16. Função interessante para aprender a desestruturar melhor objetos.
var obj = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function invert_key_value() {
  var result = {};
  var keys = Object.keys(obj);
  for (var i = 0, length = keys.length; i < length; i++) {
    console.log("obj[keys[i]]", obj[keys[i]]);
    console.log("keys[i]", keys[i]);
    result[obj[keys[i]]] = keys[i];
  }
  console.log(result);
}
invert_key_value();
