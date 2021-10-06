import React from 'react'
import { Button } from 'react-bootstrap'

const Buttoncomp = ({ value, onClick }) => {
    return (
        <div>
            <Button variant="primary" onClick={(e) => { onClick(e) }}>{value}</Button>
        </div>
    )
}

export default Buttoncomp
