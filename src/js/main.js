let page = require('./page.js');
let msg = page.print();
import '../css/css.css';

function test(msg) {
    let h1 = document.createElement('h1');
    h1.textContent = msg;
    document.querySelector('#app').appendChild(h1);
}

(function (msg) {
    test(msg);
})(msg)