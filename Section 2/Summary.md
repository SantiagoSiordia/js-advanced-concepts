# Section 2: Javascript foundations II

## Execution context

[Javascript file to remember](./resources/executionContext.js)

Code in JavaScript is always ran inside a type of **execution context**. Execution context is simply the environment within which your code is ran. There are 2 types of execution context in JavaScript, global or function. There are 2 stages as well to each context, the creation and executing phase. As the JavaScript engine starts to read your code, it creates something called the **Global Execution Context**.

### Global Execution context

- Creation phase
    1. Global object is created
    2. Initializes `this` keyword to global
- Executing phase
    3. Variable Environment created - memory space for `var` variables and functions created
    4. Initializes all variables to `undefined` (also known as **hoisting**) and places them with any functions into memory

```JS
this;
window;
this === window;
// Window {...}
// Window {...}
// true
```

![Global context](./images/global-context.png)

### Functional execution context

A `function` context is created by the Javascript engine when it sees a function call. Each function gets its own execution context.

- Creation phase
	1. **Argument object** created with any arguments
	2. Sets `this` to the global object unless in strict mode, where it's undefined.
- Executing phase
	3. **Variable Enviroment** created - memory space for variable and functions created
	4. Initializes all variables to undefined and places them into memory with any new functions.

```JS
function showArgs(arg1, arg2) {
	console.log("arguments: ", arguments);
	return `argument 1 is: ${arg1} and argument 2 is: ${arg2}`;
}

showArgs("Hello", "World!");

// arguments: { 0: "Hello", 1: "World!" }
// argument 1 is Hello and argument 2 is World!

function noArgs() {
	console.log("arguments: ", arguments);
};

noArgs();

// arguments: {}
// even though there are no arguments, the object is still created.

```

```JS
function showArgs(arg1, arg2){
	console.log("arguments: ", arguments);
	console.log(Array.from(arguments));
};

showArgs("Hello", "World!");

// arguments: { 0: "Hello", 1: "World!" }
// [ "Hello", "World!" ]

function showArgs2(...args) {
	console.log("arguments: ", args);
	console.log(Array.from(arguments));
	return `${args[0]} ${args[1]}`
}

showArgs2("Hello", "World!");

// arguments: [ "Hello", "World!" ]
// [ "Hello", "World!" ]
// Hello World!

```

The keyword arguments can be dangerous to use in your code as is. In ES6, a few methods were introduced that can help better use arguments.

### Arrow functions

    Some people think of arrow functions as just being syntactic sugar for a regular function, but arrow functions work a bit differently than a regular function. They are a compact alternative to a regular function, but also without its own bindings to `this`, `arguments`, `super`, or `new` target keywords. Arrow functions cannot be used as constructors and are **NOT** the best option for methods.

```JS

var obj = {
    // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
        console.log(this.i, this);
    }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

```