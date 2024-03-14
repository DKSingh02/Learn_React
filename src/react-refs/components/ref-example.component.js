import React, { Component, createRef } from 'react';

export default class RefExampleComponent extends Component {
    constructor(props) {
        super(props);

        this.inputRef = createRef();
        // Second approach 

        this.defaultRef = null;
        this.setRef = (element) => {
            this.defaultRef = element;
        }
    }

    componentDidMount() {
        if(this.defaultRef) {
            this.defaultRef.focus();
        }
        // console.log(this.inputRef.current.value);
        // this.inputRef.current.focus();
    }

    clickHandler = (event) => {
        // console.log(event);
        // alert(this.inputRef.current.value);
        alert(this.defaultRef.value);
    }

    render() {

        return (
            <>
                <input type='text' ref={this.inputRef} value={this.inputRef?.current?.value} />
                <input type='text' ref={this.setRef}  />
                <button onClick={this.clickHandler}>click me</button>
            </>
        );
    }
}
