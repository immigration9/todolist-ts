import React, { ReactChild } from 'react'

/**
 * https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64
 * To Read: React Children Composition Patterns
 */
interface LinkProps {
  active: boolean,
  children: ReactChild,
  onClick(e: React.MouseEvent<HTMLButtonElement>): void
}

const Link: React.SFC<LinkProps> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

export default Link
