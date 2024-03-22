import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2>Something went wrong</h2>
      <div>{err.status}: {err.statusText}</div>
    </div>
  )
}

export default Error
