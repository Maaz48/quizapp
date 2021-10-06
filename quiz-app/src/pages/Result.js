import React from 'react'

const Result = () => {
    return (
        <div>
            <h2>YOUR SCORE IS {localStorage.getItem("result")}</h2>
        </div>
    )
}

export default Result
