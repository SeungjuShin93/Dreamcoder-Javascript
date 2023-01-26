// import increase3 from './counter.js';
// increase3();
// increase3();
// increase3();
// increase3();

// import{ increase } from './counter.js';
// increase();
// increase();
// increase();

// import{ increase as increase1 } from './counter.js';
// increase1();
// increase1();
// increase1();

import { increase, getCount } from './counter.js';
increase();
increase();
increase();
const count = getCount();
console.log(count);

// import * as counter from './counter.js';
// counter.increase();
// counter.increase();
// counter.increase();
// const count = getCount();
// console.log(count);