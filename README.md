# wikiSparqlRequest
Funzione per l'interrogazione dello SPARQL Endpoint Wikidata


## Importazione


### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME `application/javascript`, l'URL segue il formato `https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>`

```
import { wikiSparqlRequest } from 'https://cdn.jsdelivr.net/gh/labaib/wikiSparqlRequest@main/index.js';
```

> Pro: aggiornamento automatico; Contro: pagina carica più lentamente 

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
import { wikiSparqlRequest } from './js/wikiSparqlRequest.js';
```

> Pro: più veloce; Contro: aggiornamento manuale 


## Esempi

```
<script type="module">
        
 import { wikiSparqlRequest } from 'https://cdn.jsdelivr.net/gh/labaib/getWikiAuthToken@main/index.js';

 (async () => {
    
    // Gatti
    let query = `
    SELECT ?item ?itemLabel
    WHERE
    {
    ?item wdt:P31 wd:Q146. # deve essere un gatto
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    `
    const results = await wikiSparqlRequest(query);

 })();

</script>
```
```
<script type="module">
        
  import { wikiSparqlRequest } from './js/wikiSparqlRequest.js';

  (async () => {

    // Gatti
    let query = `
    SELECT ?item ?itemLabel
    WHERE
    {
    ?item wdt:P31 wd:Q146. # deve essere un gatto
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    `
    const results = await wikiSparqlRequest(query);
    
  })();

</script>
```