import React from 'react'
import icon from '../images/icoc-remove.svg'



const Tag = (props) => {

    

    function handleClick(id){
       
    }

    return (
        <div>
            <span className="tagName">{props.name}</span>
            <span> <img src={icon} alt="" onClick={handleClick} /></span>
        </div>
    )
}

export default Tag
