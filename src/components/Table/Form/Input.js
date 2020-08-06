import React from 'react'
import PropTypes from 'prop-types'


export const Input = () => {

 const handleSubmit = (event) => {
event.preventDefault()
 }

  return (
      <form onSubmit={handleSubmit}>
    <label>name<input type="string" id="name" placeholder="name"/></label>
    <label>job<input type="string" id="job" placeholder="job"/></label>
      <button>click here</button>
    </form>

  )
}

PropTypes.Input = {
  handleSubmit: PropTypes.func
}
