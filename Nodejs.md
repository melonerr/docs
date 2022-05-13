# Node.js

###### OS

```javascript
const os=require('os');  
console.log("os.freemem(): \n",os.freemem());  
console.log("os.homedir(): \n",os.homedir());  
console.log("os.hostname(): \n",os.hostname());  
console.log("os.endianness(): \n",os.endianness());  
console.log("os.loadavg(): \n",os.loadavg());  
console.log("os.platform(): \n",os.platform());  
console.log("os.release(): \n",os.release());  
console.log("os.tmpdir(): \n",os.tmpdir());  
console.log("os.totalmem(): \n",os.totalmem());  
console.log("os.type(): \n",os.type());  
console.log("os.uptime(): \n",os.uptime());  
console.log("os.cpus(): \n",os.cpus());  
console.log("os.arch(): \n",os.arch());  
console.log("os.networkInterfaces(): \n",os.networkInterfaces());   
```

###### Timer

**Set timer functions:**

* **setImmediate():** It is used to execute setImmediate.
* **setInterval():** It is used to define a time interval.
* **setTimeout():** It is used to execute a one-time callback after delay milliseconds

**Clear timer functions:**

* **clearImmediate(immediateObject):** It is used to stop an immediateObject, as created by setImmediate
* **clearInterval(intervalObject):** It is used to stop an intervalObject, as created by setInterval
* **clearTimeout(timeoutObject):** It prevents a timeoutObject, as created by setTimeout

  EX Code

```javascript
//loop
setInterval(function() {  
 console.log("setInterval: Hey! 1 millisecond completed!..");   
}, 1000);  

//One time
setTimeout(function() {  
 console.log("setTimeout: completed!");   
}, 1000);  
```

###### try & catch

```javascript
try {  
  const a = 1;  
  const c = a + b;  
} catch (err) {  
  console.log(err);  
}  
```

###### DNS

* dns.getServers()
* dns.setServers(servers)
* dns.lookup(hostname[, options], callback)
* dns.lookupService(address, port, callback)
* dns.resolve(hostname[, rrtype], callback)
* dns.resolve4(hostname, callback)
* dns.resolve6(hostname, callback)
* dns.resolveCname(hostname, callback)
* dns.resolveMx(hostname, callback)
* dns.resolveNs(hostname, callback)
* dns.resolveSoa(hostname, callback)
* dns.resolveSrv(hostname, callback)
* dns.resolvePtr(hostname, callback)
* dns.resolveTxt(hostname, callback)
* dns.reverse(ip, callback)

Ex code

```javascript
const dns = require('dns');  

dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  
```

###### Crypto encrypt and decrypt

**Hash**

```javascript
const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome to JavaTpoint')  
                   .digest('hex');  
console.log(hash);  
```

**encrypt**

```javascript
const crypto = require('crypto');  
const cipher = crypto.createCipher('aes192', 'a password');  

var encrypted = cipher.update('Hello JavaTpoint', 'utf8', 'hex');  

encrypted += cipher.final('hex');  

console.log(encrypted);  
```

**decrypt**

```javascript
const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');  

var encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';  

var decrypted = decipher.update(encrypted, 'hex', 'utf8');  

decrypted += decipher.final('utf8');
  
console.log(decrypted);  
```

##### Buffers

```javascript
var buf = new Buffer([10, 20, 30, 40, 50]);   
var buf = new Buffer("Simply Easy Learning", "utf-8");   

buf = new Buffer(256);  
len = buf.write("Simply Easy Learning");  
console.log("Octets written : "+  len);  
```

##### Path

```javascript
var path = require("path");  
// Normalization  
console.log('normalization : ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/..'));  

// Join  
console.log('joint path : ' + path.join('/sssit', 'javatpoint', 'node/newfolder', 'tab', '..'));  

// Resolve  
console.log('resolve : ' + path.resolve('path_example.js'));  

// Extension   
console.log('ext name: ' + path.extname('path_example.js'));  
```

##### Query String

**parse()**

```javascript
querystring = require('querystring');  
const obj1=querystring.parse('name=sonoo&company=javatpoint');  
console.log(obj1);  
```

**stringify()**

```javascript
querystring = require('querystring');  
const qs1=querystring.stringify({name:'sonoo',company:'javatpoint'});  
console.log(qs1);  
```

---
