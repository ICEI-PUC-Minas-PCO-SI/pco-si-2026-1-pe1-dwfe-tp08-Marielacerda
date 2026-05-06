const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção", "drama"],
        nota: 9.9,
        assistido: true,
    },

    {
        id: 2,
        titulo: "Stranger things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção", "terror"],
        nota: 6.4,
        assistido: true,
    },

    {
        id: 3,
        titulo: "O Poderoso Chefão",
        tipo: "filme",
        ano: 1972,
        generos: ["drama"],
        nota: 9.0,
        assistido: false,
    },

    {
        id: 4,
        titulo: "Breaking Bad ",
        tipo: "serie",
        ano: 2008,
        generos: ["crime", "drama"],
        nota: 9.8,
        assistido: true,
    },

    {
        id: 5,
        titulo: "A Origem",
        tipo: "filme",
        ano: 2010,
        generos: ["ação", "ficção"],
        nota: 2.9,
        assistido: false,
    },

    {
        id: 6,
        titulo: "The Crown",
        tipo: "serie",
        ano: 2019,
        generos: ["drama", "história"],
        nota: 7.7,
        assistido: false,
    }
    
]

// acesso e leitura dos dados
console.log("Catálogo completo:", catalogo);
// título do 1 item
console.log("primeiro título:", catalogo[0].titulo);

// ano do ultimo item
console.log("Ano do ultimo item:", catalogo[catalogo.length - 1].ano);

// segundo genero do 3 item
if (catalogo[2].generos[1]) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero só.");
}



    //iteraçoes com iterators (tarefas)
//Listagem com forEach
console.log("lista de titulos:");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


//Transformação com map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase()); // titulosEmCaixaAlta
console.log("títulos em caixa alta :", titulosEmCaixaAlta);


//Seleção com filter
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Qtd não assistidos :", naoAssistidos.length);


//Busca com find
const notaAlta = catalogo.find(item => item.nota >= 9);

if (notaAlta) {
    console.log("primeiro con nota >= 9;", notaAlta.titulo, notaAlta.nota);
} else {
    console.log("nenhum item com nota >= 9 encontrado");
}

//Agregação com reduce


//Checagens com some e every

//Saída na tela (DOM simples)

//
