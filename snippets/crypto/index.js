'use strict';
const crypto = require('crypto');

const ENCRYPTION_KEY = "890497B3E0EF2ADDD0381A78A6ADEB97"; // Must be 256 bytes (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16
var algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

class randomEncryption {

  encrypt(text) {
   let iv = crypto.randomBytes(IV_LENGTH);
   console.log("iv:");
   console.log(iv);
   console.log("end");

   let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
   let encrypted = cipher.update(text);

   encrypted = Buffer.concat([encrypted, cipher.final()]);

   return iv.toString('hex') + ':' + encrypted.toString('hex');
  }

  decrypt(text) {
   let textParts = text.split(':');
   let iv = new Buffer(textParts.shift(), 'hex');
   let encryptedText = new Buffer(textParts.join(':'), 'hex');
   let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
   let decrypted = decipher.update(encryptedText);

   decrypted = Buffer.concat([decrypted, decipher.final()]);

   return decrypted.toString();
  }
}

class staticEncryption {

  encrypt(text){
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
  }

  decrypt(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }
}


var rCrypt = new randomEncryption();
let rCipher = rCrypt.encrypt("Random");
console.log(rCipher);
console.log(rCrypt.decrypt(rCipher));


var sCrypt = new staticEncryption();
let sCipher = sCrypt.encrypt("test");
console.log(sCipher);
console.log(sCrypt.decrypt(sCipher));
