import React from 'react';
import Card from './Card';

const CardArray = ({robots}) => {
    // if(true) {
    //     throw new Error("Vazhkaye pochu!");
    // }
    return (
        <div>{
            robots.map((robot, i) => {
                return <Card key={robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} />
        })
        }
        </div>
    )
}

export default CardArray;