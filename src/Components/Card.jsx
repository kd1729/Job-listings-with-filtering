import React from 'react'

const Card = (props) => {
    return (
        <div className="CardDiv">
            <img src={props.img} alt="" />

            <div className="Info">
                <div className="one">
                    {props.company}
                    
                </div>
                <div className="two">
                    {props.position}
                </div>
                <div className="three">

                </div>
            </div>
        </div>
    )
}

export default Card
