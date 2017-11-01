import '../css/index.css';

import numeral from 'numeral';

const courseVal = numeral(100).format('$0,0.00');

console.log(`pay ${courseVal} for this package`); // eslint-disable-line no-console
