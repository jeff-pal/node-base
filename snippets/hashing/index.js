var string = 'whoistheboss?';
var crypto = require('crypto');
var hash = crypto.createHash('sha256').update(string).digest('hex');
console.log(hash);
