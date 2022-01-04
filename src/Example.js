import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(22)}
        </div>
    )
}

export default Example