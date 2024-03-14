import React, { forwardRef } from 'react'

const ForwardRefChildComponent = forwardRef((props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
})

export default ForwardRefChildComponent