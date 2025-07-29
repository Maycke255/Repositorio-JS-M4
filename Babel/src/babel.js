/* Usando arquivos JSON e atualizando codigos modernos para codigos antigos */

const user = {
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
}

// A propriedade phone e ddd não existe, então retorna apenas undefined e não da erro
const acess = user?.friends[0]?.phone?.ddd

// Uma boa coisa e verificar se a opção não existe e exibir um alerta para o usuario
if (acess === undefined) {
    console.log('O conteudo não existe.')
}