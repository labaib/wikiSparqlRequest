/**
* Esegui interrogazione SPARQL
* @param {string} query - Query SPARQL
* @returns {Array<Object>|[]} - Ritorna un array di oggetti 
*/

const wikiSparqlRequest = async (query) => {

    // Parametri URL
    const params = new URLSearchParams({
        query: query
    });

    let url = `https://query.wikidata.org/sparql?${params.toString()}`;
    let headers = { 'Accept': 'application/sparql-results+json' };
    let response = await fetch( url, { headers } );
    let json = await response.json();
    let data = json.results.bindings
    return data

};

export { wikiSparqlRequest };