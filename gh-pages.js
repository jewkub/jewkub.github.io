/*
TODO: use Typescript for this file
useful issues:
  https://github.com/TypeStrong/ts-node/issues/1007
  https://github.com/microsoft/TypeScript/issues/18442
  https://github.com/vercel/next.js/issues/9607
*/

/* import * as ghpages from 'gh-pages';
import moment from 'moment'; */
let ghpages = require('gh-pages');
let moment = require('moment');

ghpages.publish('out', {
  branch: 'master',
  dotfiles: true,
  message: `🚀 Deploy [${ moment().format('DD/MM/YY') }]`,
}, () => {
  console.log('yayyy');
});

// from https://stackoverflow.com/a/59542798/4468834