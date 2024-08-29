/**
 * src/App.jsx
 * 
 * Imports two React elements:
 * 1. A Provider from the Context.jsx script
 * 2. A Component which is made a child of the Provider
 * 
 * The Component can now use useContext() to obtain data from
 * the Context's `value` property.
 * 
 * A custom prop is also sent directly from App (the parent) to
 * Component (its immediate child).
 */


import React from 'react'
import { Provider } from './Context'
import { Component} from './Component'


export const App = () => {
  return (
    <Provider>
      <Component custom="custom"/>
      <a
        class="github"
        href="https://github.com/FunForks/minimal-context"
      >
        <img src="github.svg" alt="github"/>
      </a>
    </Provider>
  )
}