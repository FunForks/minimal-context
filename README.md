# Minimal Context #

[Demo](https://FunForks.github.io/minimal-context)

React's Context feature requires n steps:

1. Create a Context, with `useContext`
2. Generate a Provider from that Context, using `Context.Provider`
3. Create a `value` object which the Provider sends as props to its children
4. Export both these objects: `export { Context, Provider }`
(See Context.jsx)

---
5. In the parent of any component that wants to share the context, import the `<Provider>` and wrap the parent's children in it. (See App.jsx)

6. In the components that want to share data, read in `React.useContext` and import the `Context` from step 1.
7. Use `useContext(Context)` to obtain access to the members of the `value` object created in step 3.
(See Component.jsx)

Note that parent components can still pass props to their direct children, but those props are not automatically inherited by their grandchildren.