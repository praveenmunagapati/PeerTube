#!/bin/bash

npm run build:server

cd client || exit -1
npm test || exit -1

cd .. || exit -1
npm run tslint -- --type-check --project ./tsconfig.json -c ./tslint.json server.ts "server/**/*.ts" || exit -1
mocha --exit --require ts-node/register --bail server/tests/index.ts
