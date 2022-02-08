# MOBI Vocabulary Specification

 ![CI](https://github.com/mobi-dlt/traceability-vocab/workflows/CI/badge.svg)  [![CD](https://github.com/w3c-ccg/traceability-vocab/actions/workflows/cd.yml/badge.svg)](https://github.com/w3c-ccg/traceability-vocab/actions/workflows/cd.yml)

## About 

This specification describes a Linked Data vocabulary for asserting Verifiable
Credentials related to mobility information, such as vehicle ideneity,
, registration, infrastructure, telematics data and other attributes used to in mobility applications.

This repo is based on the [W3C traceability vocab](https://github.com/w3c-ccg/traceability-vocab). Mobility specific vocabulary and schemas are created based on MOBI standards. This repo provides sample verifiable credentials for members who want to implement MOBI standards. 

We encourage contributions meeting the [Contribution
Guidelines](CONTRIBUTING.md). 


## Testing 

There is also a [**test
suite **](https://w3c-ccg.github.io/traceability-vocab/testsuite/) (to be implemented) that is run
against PRs, checking separately both the JSON Schema-based data shape
validation and the JSON-LD–based semantic anchoring. See the underlying test
scripts
[here](https://github.com/mobi-dlt/mobi-vocab/tree/main/packages/traceability-schemas/src/__tests__).

## Getting Started

If you are only interested in the vocabulary itself, the items contained
therein, and/or the example Verifiable Credentials, please see the [spec
itself](https://w3c-ccg.github.io/traceability-vocab/).(To be impelemented)

If you are a developer who is interested in working directly with the
vocabulary, possibly adding schemas, and/or running tests and viewing details of
how the JSON-JD and resultant Verifiable Credentials are built, then read on.

### Developer Setup

To get started building, testing, or contributing to this repository, you will
need [`Node.js`](https://nodejs.org/en/) and [`git`](https://git-scm.com/).

After you have the dependencies, the first-time setup is as follows:

1. checkout this repository —

   ```
   $ git checkout https://github.com/mobi-dlt/mobi-vocab.git
   ```

2. Once the repository is checked out, run `npm install` in the created
   directory to get all project dependencies —

   ```
   $ cd traceability-vocab
   $ npm install
   ```

3. After the repository is checked out, and all dependencies have been
   installed, then you can build the vocabulary itself —

   ```
   $ npm run build:all
   ```

   This can take a while, as it will run through the entire process of merging
   the individual schemas, creating test vectors, and ultimately creating a
   signed verifiable credential for each vocabulary item. If you would like to
   view details on the build process, please see the
   [README](https://github.com/mobi-dlt/mobi-vocab/tree/main/packages/traceability-schemas)
   located in the actual schemas build project folder.

4. Finally, once everything is built and tested, you can serve up the spec 
   and related documentation locally:

   ```
   $ npx serve docs
   ```

## Ontology Structure 

This repository hosts [JSON Schema](https://json-schema.org/) which it uses 
to create [JSON-LD](https://json-ld.org/).

All JSON Schema must have an `$id` property, which must resolve to the
JSON-Schema Document.

For example, see (To be Implemented)
[https://w3id.org/traceability/schemas/Person.json](https://w3id.org/traceability/schemas/Person.json).

We are currently 🚧 EXPERIMENTING 🚧 with injecting JSON-LD concepts like `@id`
and `@type` in JSON Schema using `$comment`.

For example see:

```json
"$id": "https://w3id.org/traceability/schemas/Person.json",
"$schema": "http://json-schema.org/draft-07/schema#",
"$comment": "{\"term\": \"Person\", \"@id\": \"https://schema.org/Person\"}",
"title": "Person",
"description": "A person",
```

These attributes are then used to deterministically build a JSON-LD context 
hosted at:

[https://dlt.mobi/mobility-schmea](https://dlt.mobi/mobility-schmea)

This context can then be used to produce verifiable credentials for supply chain
traceability, for example:

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/mobility"
  ],
  "id": "https://example.com/123",
  "type": ["VerifiableCredential"],
  "issuer": {
    "id": "did:key:z6MkoTHsgNNrby8JzCNQ1iRLyW5QQ6R8Xuu6AA8igGrMVPUM"
  },
  "issuanceDate": "2020-03-10T04:24:12.164Z",
  "expirationDate": "2029-03-10T04:24:12.164Z",
  "credentialSubject": {
    "id": "did:example:123",
    "type": "Place",
    "address": {
      "type": "PostalAddress",
      "organizationName": "Bednar - Kutch",
      "streetAddress": "8440 Khalid Canyon",
      "addressLocality": "Gislasonland",
      "addressRegion": "Ohio",
      "postalCode": "96546",
      "addressCountry": "Liechtenstein"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2021-02-09T21:54:29.223Z",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..1Xba7-B-YTstwnbIewQFpbMgGfOdRuoDLEBezZlb4M1qMwI9GCUAbeTCsGCPd62XLwyNjPqb9aJGj_xk7iUiBw",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:key:z6MkoTHsgNNrby8JzCNQ1iRLyW5QQ6R8Xuu6AA8igGrMVPUM#z6MkoTHsgNNrby8JzCNQ1iRLyW5QQ6R8Xuu6AA8igGrMVPUM"
  }
}
```

Inside JSON Schema, you will see things like —

```json
 "$ref": "https://w3id.org/mobility/schemas/Product.json"
```

These are JSON Schema reference tags, and they allow for nesting of types that
are defined in JSON Schema.

In general, you should strive to model concepts as types that are defined in
JSON Schema and composed from smaller types.

## Versioning (TO be implemented, talk with team)

This repository will be versioned at periodic points in time with a Q1 Calendar
Year target for major releases. Versioning tags will follow a pattern of
`[MAJOR].[MINOR].[PATCH]`, defined as follows:

- `MAJOR` - significant changes rolled forward from the previous major version.
  Major versions MAY include breaking or non-backwards compatible changes.
- `MINOR` - backwards compatible changes that may introduce new functionality
  or extensions of objects that are backwards compatible
- `PATCH` - minor changes that are non-breaking and resolve discovered issues 
  or bugs

As a rule, versioning will follow the specification outlined in the [Semantic
Versioning 2.0](https://semver.org/) spec.

This approach to versioning gives the ability to integrate with provided
automated testing and validation against defined types without worry of
instability or breaking changes being introduced, while also limiting the
frequency of possibly breaking changes to prevent a large number of incompatible
versions.

## Project Structure

This project uses [lerna](https://github.com/lerna/lerna) to manage packages and
dependencies as a single project.

In addition, the following key areas in the repo should be noted for
understanding how to add schemas and understand the code layout:

- The index file in [docs](./docs/index.html) is the master public-facing
  documentation page. It is a baseline specification, with the bulk of the
  contents being automatically generated after tests have been run on items.
- JSON Schema for each object to be referenced is stored in the 
  [schemas](.docs/schemas) folder.
- Code Generation to create synthetic test data is located in
  [generators](./packages/traceability-schemas/src/generators).
- Test Vectors are run against fixtures that are auto-generated, located in
  the [fixtures](./packages/traceability-schemas/src/__fixtures__) folder, and
  correspond to the defined schemas
- [Contexts](./docs/contexts) stores the interim combined JSON-LD vocabulary for
  test and verification
- Verifiable Credential Examples are auto-generated and populated into the spec.
  Example single credential and VC examples are located in the
  [fixtures](./packages/traceability-schemas/src/__fixtures__) folder mentioned
  above.

### Contributing to the Vocabulary

All terms, schemas, and context definitions are generated from
[./packages/traceability-schemas](./packages/traceability-schemas).

The following commands will build the spec and test vectors deterministically
from source, clean up any formatting using lint, and run all tests.

```
cd ./packages/traceability-schemas
npm i
npm run build:all
npm run test:schemas
```

### Adding a new type

1. Create a [JSON Schema](https://json-schema.org/) in the
   [schemas](./packages/traceability-schemas/schemas) folder.
2. Add synthetic data generation for it to the
   [generators](./packages/traceability-schemas/src/generators).
3. Run the build using: `npm run build:all`
   Fix any errors found.
4. Review the latest spec changes by serving docs: `npx serve ./docs`.

## Additional notes

If you are unsure of how to do something, please open an issue, and ask for help.

Please follow the conventions established for the other properties, as below.

### General Formatting and Guidelines

UTF-8 should be used as the standard encoding for all assets in this repository,
and any services utilizing these objects as schemas should support UTF-8

Wherever possible JSON-LD in use as a Verifiable Credential should be ["small in
size"](https://www.w3.org/TR/vc-imp-guide/#pf4a). Some harder limits will likely
be established based on common and broadly distributed VC libraries, but at this
time, be aware that a VC could be rejected from this repo for exceeding
reasonable size limits

### Room for Improvements

Certain items such as `allOf` on the JSON Schema side of things would be quite
helpful to support, so that better patterns of inheritance can be modeled. We
are open to contributions that improve our support of auto-generation of JSON-LD
from JSON Schema.

### Date and Time

Wherever possible, dates should be formatted as `YYYY-MM-DD` so as to be
directly compatible with `xsd:date`. Static Dates should be used in generated
data so as to avoid unnecessary changes in the repository on build.

### Place (as an example)

- [JSON Schema](./docs/schemas/Place.json)
- [Data Generator](./packages/traceability-schemas/src/generators/Place.js)
- [JSON-LD Context (derived)](./docs/contexts/traceability-v1.jsonld)
- [Vocabulary Definition (derived)(to be implemented)](https://w3id.org/traceability#place)

### Common Environment Variables for Build and Development

Some useful environment variables to make testing, generation, and validation
stricter or more verbose are detailed here:

```
VERBOSE_BUILD=true        # sets general verbosity levels up when building

FULL_ERROR_HANDLING=true  # forces hard stops at points in the process 
                          # when warning or other exceptions are caught

VERBOSE_BUILD_GENERAL     # increases verbosity in object generation on 
                          # common objects

VERBOSE_BUILD_AG=true     # industry vertical specific stops, see also 
                          # VERBOSE_BUILD_STEEL and related
```
