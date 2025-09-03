import React from 'react'

const HeaderList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul>{children}</ul>
  )
}

export default HeaderList