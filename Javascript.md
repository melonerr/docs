# Javascript

#### activeElement

```javascript
const element = document.activeElement.value;
const element = document.activeElement.id;
```

#### EventListener

```javascript
// Add event
document.addEventListener("click", Function);
document.addEventListener("mouseout", Function);
document.addEventListener("mouseover", Function);
document.addEventListener("mousemove", Function);

//remove event
document.removeEventListener("click", Function);
document.removeEventListener("mouseout", Function);
document.removeEventListener("mouseover", Function);
document.removeEventListener("mousemove", Function);
```

#### Attribute

```javascript
// set attribute
document.setAttribute("class", "active");

// set attribute
document.removeAttribute("class")
```

#### Add Class

```javascript
//add class
document.classList.add("active");

//remove class
document.classList.remove("active");
```

#### Toggle

    **class(sj)**

```javascript
document.classList.toggle("active");
```

    **display(js)**

```javascript
if (document.style.display === "none") {
    x.style.display = "block";
  } else {
    document.style.display = "none";
  }

//Or toggle class d-none
document.classList.toggle("d-none");
```

    **smoot Toggle (css)**

```css
#active {
  opacity: 0;
  transition: opacity 1s;
}

#active.active {
  opacity: 1;
  transition: opacity 1s;
}
```

#### Selector

**
    getElement**

```javascript
//getElementById()
document.getElementById("example");

//getElementsByClassName()
document.getElementsByClassName("example");

//getElementsByName()
document.getElementsByName("example");

//getElementsByTagName()
document.getElementsByTagName("example");
```

**
    query**

```javascript
//querySelector()
document.querySelector(".example");
//Select *first* element

//querySelectorAll()
document.querySelectorAll(".example");
//Select *all* element
```

#### Output

```javascript
document.innerHTML 
document.write();
alert();
console.log()
console.table()
```

#### Operators

```
==		equal to
===		equal value and equal type
!=		not equal
!==		not equal value or not equal type
>		greater than
<		less than
>=		greater than or equal to
<=		less than or equal to
?		ternary operator
```

#### Typeof

```javascript
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```

#### Date

```javascript
const date = new Date();
console.log(date)
// Fri May 13 2022 16:15:25 GMT+0700 (Indochina Time)

const year = date.getFullYear();
console.log(year)
// 2022

const month = date.getMonth()+1;
console.log(month)
// 5

const day = date.getDate(); 
console.log(day)
//13 

const hours = date.getHours();
console.log(hours)
//16

const minutes = date.getMinutes();
console.log(minutes)
//15

const seconds = date.getSeconds();
console.log(seconds)
//25

const milliseconds = date.getMilliseconds();
console.log(milliseconds)
//756

const time = date.getTime();
console.log(time)
//1652433507415

const dayInWeek = date.getDay()+1;
console.log(dayInWeek)
//6

const setDate = new Date("13/5/2022");
console.log(setDate)
//Fri May 13 2022 16:21:20 GMT+0700 (Indochina Time)
```

#### Format

```javascript
var todayDate = new Date().toISOString().slice(0, 10); 
// output: "m-d-y"


const date = new Date();

console.log(new Intl.DateTimeFormat('en-US').format(date));
// output: "m/d/y"

console.log(new Intl.DateTimeFormat('en-GB').format(date));
// output: "d/m/y"

console.log(new Intl.DateTimeFormat('ko-KR').format(date));
// output:  "2012. 12. 19."

console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date));
//output "Sunday, 20 December 2020 at 14:23:16 GMT+11"

options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// output: "Thursday, December 20, 2012, GMT"

```

#### If&Else

    **Simple**

```javascript
//if
if (age < 15) {
}

//if else
if (age < 15) {
} else {
}
```

 **
    Short if**

```javascript
data == 10? 'active': 'd-none'
```

#### Switch&case

```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

#### Loop

    **For**

```javascript
const arr = ["apple", "Mango", "Peach"];

for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
}
```

    **Short for**

```javascript
const obj = [{ id: 0, name: "apple" }, { id: 1, name: "Mango" }, { id: 2, name: "Peach" }];

for (let data of obj) console.log(data);
```

**
    For In**

**
    For Of**

    **While**

 **
    Foreach**





# JS Tips

#### Check network status

```javascript
window.addEventListener('offline', (e) => {
    console.log("⚫");
});

window.addEventListener('online', (e) => {
    console.log("⚪");
});
```

or 

```javascript
if (navigator.onLine) {
    console.log("⚫");
} else {
    console.log("⚪");
}
```


#### Auto complement func

```javascript
/**
 * auto complement func
 * @param {array} arg
 *
 */
```


#### Map

```javascript
let data = new Map();
data.set('0', { name: 'Jack', age: 26 });
data.set('1', { name: 'Jira', age: 25 });
data.set('2', { name: 'Song', age: 24 })

data.forEach((value, key) => {
	console.log(value);
});

data.delete('0');
data.clear();
```


#### String to Number

```javascript
let num = '0'
let stringNumber = Number(num);

console.log(typeof num);
console.log(typeof stringNumber);
```


#### Math Random

```javascript
let rand = Math.floor(Math.random() * (10 - 0))
console.log(rand);
```







---
