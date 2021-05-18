import React from 'react'

const Child = React.forwardRef((props, ref) => {
    const {ref1, ref2} = ref

    return (
        <div>
            <div ref={ref1}>child</div>
            <div ref={ref2}>other</div>
        </div>
    )
})
export default Child