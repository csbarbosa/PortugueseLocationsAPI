# PortugueseLocationsAPI

A simple API to get information about portuguese districts, councils and parishes.

## Installation

To install all the dependencies, run **npm install** or **npm i**:

```bash
npm install
```

Otherwise, to install only the production dependencies, run **npm install --omit=dev** or **npm i --omit=dev**:

```bash
npm install --omit=dev
```

## Usage

To start the project, run **npm start** (by default, it's listening through the port 3000):

```bash
npm start

> portuguese-locations-api@1.0.0 start
> node ./bin/www

Listening at port 3000...
```

There are 5 endpoints available:

- **/** - returns a list of all the parishes with their respective district and council
- **/districts** - returns a list of all the districts
- **/councils/{district}** - returns a list of all the councils of a given district
- **/parishes/{district}/{council}** - returns a list of all the parishes of a given council and a given district
- **/apiDocs** - redirects to the API's documentation page
