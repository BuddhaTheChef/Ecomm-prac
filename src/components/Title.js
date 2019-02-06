import React from 'react'
const Title = ({name, title}) => {
  return (
    <div>
      <div>
          <h1 style={{textAlign: 'center'}}>
            {name} <strong>{title}</strong>
          </h1>
      </div>
    </div>
  )
}

export default Title;