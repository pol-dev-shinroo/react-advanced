## Why use const for useState

useState triggers re-render. On re-renders, you are getting a new variable entirely.

## useState and useEffect

-   ### useState

When trying to change a variable when clicking a button, the internal value for the button will be changed but this change will not be displayed on the screen. This is because the changing of the value does not trigger re-rendering of the component.

For normal JS, a change of a value will cause the entire webpage to re-render. However, react is designed so, that only if certain conditions are met, the relavant component will re-render (for performance reasons)

Hence, react introduced useState.

```js
const [value, setValue] = useState("hello world");
```

Essentially useState is an array containing two items. The state value, and setState function which changes the state value.
By using setValue, it not only internally changes the value for a variable, but also triggers re-render (while remembering the changed value for the variable).

-   ### useEffect

When a component re-renders, everything within the component will be re-rendered.
Hence, React also introduced a mechanism to control what will be run each time a component re-renders.

```js
useEffect(() => {
    console.log("run only for the initial render");
}, []);

useEffect(() => {
    console.log("run only when the dependency changes");
}, [dependency]);
```

## conditions of re-rendering in React

-   state change
-   props change (changes in the parent)

## Tricks for setTimeout(using <span style="color: red">prev</span>)

```js
const valueHandler = () => {
    setTimeout(() => {
        setValue(value + 1);
    }, 2000);
};
```

In the above example, the value will only increase by one no matter how many times you click the button during the 2000s.
This is because setTimeout is asynchronous.
But also because we are looking at the value directly.

```js
const valueHandlerProper = () => {
    setTimeout(() => {
        setProperValue((prev) => {
            return prev + 1;
        });
    }, 2000);
};
```

In the above example, we are looking at the previous value right before the update. (hence, not the value from the useState).

This is known as the functional approach to state changing.
<b>Basically, you can use it all the time whenever you are to change state value</b>
