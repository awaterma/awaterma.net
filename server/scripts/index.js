var forever = require('forever');
forever.start('node_modules/http-server/bin/http-server', { 
  options: [
    "-d false",
    "html"
]});
