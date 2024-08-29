/**
 * src/SubComponent.jsx
 * 
 * Uses React.useContext() to read data from a shared Context.
 * This is only possible because Component is one of the 
 * children of the Context Provider.
 * 
 * A component can also read props send directly from its parent.
 * Props from its grandparent are not received unless they are
 * explicitly forwarded by the direct parent.
 */

import React, { useContext } from 'react'
import { Context } from './Context'


export const SubComponent = (props) => {
  const { variable } = useContext(Context)
  const { custom, sub } = props

  return (
    <div id="sub-component">
      <h2>SubComponent</h2>
      <p>Context variable is `<code>{variable}</code>`</p>
      <p>Grandparent's custom prop is `<code>{custom}</code>`</p>
      <p>Parent's sub prop is `<code>{sub}</code>`</p>
    </div>
  )
}