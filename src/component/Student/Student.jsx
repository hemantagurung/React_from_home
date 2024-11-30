import React from 'react'
import './Student.css'
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div className='student'> 
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.isStudent }</p>

    </div>
  )
}

  Student.PropTypes ={
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool

}

Student.defaultProps={
    name :"Guest",
    age : "0",
    isStudent : false
}


export default Student