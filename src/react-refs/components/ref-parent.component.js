import React, { Component } from 'react'
import RefChildComponent from './ref-child.component';

class RefParentComponent extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    console.log(this.componentRef.current)
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <RefChildComponent ref={this.componentRef}></RefChildComponent>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default RefParentComponent