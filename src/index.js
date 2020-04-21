import './index.css';

/* eslint-disable no-debugger */
/* eslint-disable no-console */

import numeral from 'numeral';
debugger;
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`); // use backtrick because ES6 feature and it tells JS to parse placeholders in code
