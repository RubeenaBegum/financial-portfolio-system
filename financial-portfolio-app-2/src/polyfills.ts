import '@angular/localize/init';

(window as any).global = window;
global.Buffer = global.Buffer || require('buffer').Buffer;
global.process = require('process');

import 'zone.js/dist/zone';

if (typeof (window as any).global === 'undefined') {
  (window as any).global = window;
}