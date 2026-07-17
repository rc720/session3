import React from 'react'

const StatusMessage = ({ status }) => {
  let message

  switch (status) {
    case 'loading':
      message = <p>Loading, please wait...</p>
      break
    case 'success':
      message = <p style={{ color: 'green' }}>Success! Data loaded.</p>
      break
    case 'error':
      message = <p style={{ color: 'red' }}>Something went wrong.</p>
      break
    default:
      message = <p>Unknown status.</p>
  }

  return <div>{message}</div>
}

export default StatusMessage