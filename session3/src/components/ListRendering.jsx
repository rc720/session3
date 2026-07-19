import React from 'react'

const ListRendering = () => {
  const user = [
    { id: 1, name: 'rahul' },
    { id: 2, name: 'rohit' },
    { id: 3, name: 'laksh' }
  ]
  return (
    <div>
      <ul>
        {user.map((u) => (
          <li key={u.id}>{u.id}--{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRendering