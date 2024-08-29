/**
 * src/Context.jsx
 * 
 * Exports two components:
 * 
 * 1. a Context created by React.useContext
 * 2. a Provider which gives its children access to the Context
 * 
 * The data to be shared is held in the Context, but no component
 * can get access to that data unless it is one of the children
 * of the Provider component. The `value` object is set as a 
 * prop for all the Provider's children.
 */



import React, { createContext, useState } from 'react'


export const Context = createContext()


export const Provider = ({ children }) => {
  const [ variable, setvariable ] = useState("default")

  return (
    <Context.Provider
      value ={{
        variable,
        setvariable
      }}
    >
      {children}
    </Context.Provider>
  )
}