export const data = [
    {
        question: "What is the difference between `let` and `var` in JavaScript?",
        options: [
            "`let` is block-scoped while `var` is function-scoped.",
            "`let` variables are not initialized until their definition is evaluated.",
            "`var` declarations are globally or functionally scoped regardless of the block.",
            "`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used."
        ],
        correctAnswer: "`let` is block-scoped while `var` is function-scoped.",
        userAnswer: "",
        questionNumber: 1,
        totalQuestions: 10
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A closure is a function that remembers its outer variables and can access them.",
            "Closures are created every time a function is created, at function creation time.",
            "They are useful for creating private variables.",
            "It allows a function to access variables from an enclosing scope, even after the scope in which they were declared has closed."
        ],
        correctAnswer: "A closure is a function that remembers its outer variables and can access them.",
        userAnswer: "",
        questionNumber: 2,
        totalQuestions: 10
    },
    {
        question: "How do you create a promise in JavaScript?",
        options: [
            "A promise represents the eventual completion (or failure) of an asynchronous operation.",
            "Promises have three states: pending, fulfilled, and rejected.",
            "A promise can be created using the `Promise` constructor, e.g., `let promise = new Promise(function(resolve, reject) {...});`.",
            "The `resolve` function is used to move the promise from pending to fulfilled."
        ],
        correctAnswer: "A promise can be created using the `Promise` constructor, e.g., `let promise = new Promise(function(resolve, reject) {...});`.",
        userAnswer: "",
        questionNumber: 3,
        totalQuestions: 10
    },
    {
        question: "What is the purpose of the `async` and `await` keywords?",
        options: [
            "`async` is used to declare a function as asynchronous, and `await` is used to wait for a promise to resolve inside an async function.",
            "`async` functions always return a promise.",
            "Using `async` and `await` makes asynchronous code look and behave more like synchronous code.",
            "`await` pauses the execution of the function until the promise is resolved."
        ],
        correctAnswer: "`async` is used to declare a function as asynchronous, and `await` is used to wait for a promise to resolve inside an async function.",
        userAnswer: "",
        questionNumber: 4,
        totalQuestions: 10
    },
    {
        question: "Explain the concept of event delegation in JavaScript.",
        options: [
            "Event delegation is a technique where you use a single event handler to manage all events for child elements of a parent.",
            "Event delegation is useful when you need to handle events on dynamically added elements.",
            "It works by taking advantage of event bubbling.",
            "This improves performance by reducing the number of event handlers attached to DOM elements."
        ],
        correctAnswer: "Event delegation is a technique where you use a single event handler to manage all events for child elements of a parent.",
        userAnswer: "",
        questionNumber: 5,
        totalQuestions: 10
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        options: [
            "`===` compares two values for strict equality, without type conversion.",
            "`==` performs type coercion, whereas `===` does not.",
            "`==` compares two values for equality after converting both to a common type.",
            "`===` is generally recommended for comparisons to avoid unexpected results."
        ],
        correctAnswer: "`==` compares two values for equality after converting both to a common type.",
        userAnswer: "",
        questionNumber: 6,
        totalQuestions: 10
    },
    {
        question: "What does the `map()` function do in JavaScript?",
        options: [
            "`map()` creates a new array populated with the results of calling a provided function on every element in the calling array.",
            "The new array created by `map()` has the same length as the original array.",
            "`map()` is commonly used for transforming arrays.",
            "It does not change the original array."
        ],
        correctAnswer: "`map()` creates a new array populated with the results of calling a provided function on every element in the calling array.",
        userAnswer: "",
        questionNumber: 7,
        totalQuestions: 10
    },
    {
        question: "How do you remove a property from an object in JavaScript?",
        options: [
            "After deletion, the property will be `undefined` if accessed.",
            "The `delete` operator should not be used on predefined JavaScript object properties.",
            "You can remove a property from an object using the `delete` operator, e.g., `delete obj.property;`.",
            "The `delete` operator removes both the property and its value."
        ],
        correctAnswer: "You can remove a property from an object using the `delete` operator, e.g., `delete obj.property;`.",
        userAnswer: "",
        questionNumber: 8,
        totalQuestions: 10
    },
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: [
            "`this` refers to the object from which the function was called.",
            "`this` can refer to different objects depending on the context in which it is used.",
            "Its value is determined by how a function is called.",
            "In strict mode, `this` will be `undefined` if the function is called without an object."
        ],
        correctAnswer: "`this` refers to the object from which the function was called.",
        userAnswer: "",
        questionNumber: 9,
        totalQuestions: 10
    },
    {
        question: "Explain the concept of hoisting in JavaScript.",
        options: [
            "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.",
            "Only the declarations are hoisted, not the initializations.",
            "Hoisting allows functions to be used before they are declared.",
            "This means that variables can be used before they are declared."
        ],
        correctAnswer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.",
        userAnswer: "",
        questionNumber: 10,
        totalQuestions: 10
    }
]
