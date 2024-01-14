const { createHash } = require('crypto')

function hash(input) {
    return createHash('sha256').update(input).digest('hex')
}

let password = 'hi-d!';
const hash1 = hash(password)
console.log(hash1)

password = 'hi-d!';
const hash2 = hash(password);
const match = hash1 == hash2;

console.log(match ? 'Greate good password' : 'Password does not match');