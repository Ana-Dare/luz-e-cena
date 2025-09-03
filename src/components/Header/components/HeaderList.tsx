import React, { Children } from 'react'

const HeaderList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul>{children}</ul>
  )
}

export default HeaderList