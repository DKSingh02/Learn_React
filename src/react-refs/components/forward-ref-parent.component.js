import React, { Component, createRef } from 'react'
import ForwardRefChildComponent from './forward-ref-child.component'

export default class ForwardRefParentComponent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <>
                <ForwardRefChildComponent ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input Field</button>
            </>
        )
    }
}
