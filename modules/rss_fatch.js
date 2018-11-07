// document.addEventListener('DOMLoadedContent', init());

// function init() {
    const veiculos = [
        {
            nome: 'O Globo',
            endpoint: 'https://oglobo.globo.com/rss.xml?completo=true',
            itens: []            
        },
        {
            nome: 'Folha de São Paulo',
            endpoint: 'https://feeds.folha.uol.com.br/mundo/rss091.xml',
            itens: []     
        },
        {
            nome: 'Revista Época',
            endpoint: 'http://revistaepoca.globo.com/Revista/Epoca/Rss/0,,EDT0-15223,00.xml',
            itens: []     
        },
        {
            nome: 'Revista Época',
            endpoint: 'http://revistaepoca.globo.com/Revista/Epoca/Rss/0,,EDT0-15228,00.xml',
            itens: []     
        }
    ];
    
    const CORS_PROXY = 'https://cors.io/?';
    
    let xml = null;
    
    for (const veiculo of veiculos) {
        fetch(CORS_PROXY + veiculo.endpoint)
            .then((r) => r.text())
            .then((str) => {
                const parser = new window.DOMParser();
                const xml = parser.parseFromString(str, "text/xml");
                for (const itemTag of xml.querySelectorAll('item')) {
                    veiculo.itens.push(itemTag);
                }
            }
        );
        console.log(veiculo);
    }   
// }