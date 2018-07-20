# Function Stack
Easily collect and run functions at once.

## Quick Start

```
npm i --save functionstack
```


```js
import FunctionStack from 'functionstack';

const myFunctions = new FunctionStack();

myFunctions.add((name) => {
  console.log(`Hello ${name}`)
})

myFunctions.add((name) => {
  console.log(`${name}, how are you?`)
})

myFunctions.runAll({name: "Mike"});

// Hello Maik
// Maik, how are you?
```


## Public Methods

- .add(fct)
- .runAll(params)
- .remove(fct)
- .removeAllFunctions()