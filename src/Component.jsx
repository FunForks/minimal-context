/**
 * src/Component.jsx
 * 
 * Uses React.useContext() to read data from a shared Context.
 * This is only possible because Component is one of the 
 * children of the Context Provider.
 * 
 * A component can also read props send directly from its parent.
 */

import React, { useContext } from 'react'
import { Context } from './Context'
import { SubComponent } from './SubComponent'


export const Component = (props) => {
  const { variable } = useContext(Context)
  const { custom } = props

  return (
    <div id="component">
      <h1>Component</h1>
      <p>Context variable is `<code>{variable}</code>`</p>
      <p>Parent's custom prop is `<code>{custom}</code>`</p>
      <SubComponent sub="sub"/>
    </div>
  )
}