import React from 'react'

export default function WelcomeFunctionComponent(props) {
    // You can destructuring above as well and just featch first and last name
    return <h1>Welcome {props.firstName} {props.lastName} for react learning!</h1>
  
}