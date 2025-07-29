"use strict";

var _user$friends$;
var user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
};

// A propriedade phone e ddd não existe, então retorna apenas undefined e não da erro
var acess = user === null || user === void 0 || (_user$friends$ = user.friends[0]) === null || _user$friends$ === void 0 || (_user$friends$ = _user$friends$.phone) === null || _user$friends$ === void 0 ? void 0 : _user$friends$.ddd;

// Uma boa coisa e verificar se a opção não existe e exibir um alerta para o usuario
if (acess === undefined) {
  console.log('O conteudo não existe.');
}