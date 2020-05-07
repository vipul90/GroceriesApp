import React from 'react'
import {Paper,Button} from '@material-ui/core'


export default function CarouselItem(props)
{
    return (
        <div>
            <img className="carouselImage" src={props.item.ItemImage} alt={props.item.Name} />
        </div>
    )
}