const credentialsContexts = require('@transmute/credentials-context');
const securityContexts = require('@transmute/security-context');
const didContexts = require('@transmute/did-context');

const fs = require('fs');
const path = require('path');

const documentLoader = (iri) => {
  if (didContexts.contexts.has(iri)) {
    return {
      documentUrl: iri,
      document: didContexts.contexts.get(iri),
    };
  }
  if (credentialsContexts.contexts.has(iri)) {
    return {
      documentUrl: iri,
      document: credentialsContexts.contexts.get(iri),
    };
  }
  if (securityContexts.contexts.has(iri)) {
    return {
      documentUrl: iri,
      document: securityContexts.contexts.get(iri),
    };
  }
  if (iri.startsWith('https://dlt.mobi/mobility-schema')) {
    return {
      documentUrl: iri,
      document: JSON.parse(
        fs
          .readFileSync(
            path.resolve(
              __dirname,
              '../../../../../docs/contexts/mobility-v1.jsonld'
            )
          )
          .toString()
      ),
    };
  }
  if (
    iri.startsWith('did:key:z6MktHQo3fRRohk44dsbE76CuiTpBmyMWq2VVjvV6aBSeE3U')
  ) {
    return {
      documentUrl: iri,
      document: require('./didDocument.json'),
    };
  }
  console.error(`unsupported iri ${iri}`);
  throw new Error(`unsupported iri ${iri}`);
};

module.exports = { documentLoader };
