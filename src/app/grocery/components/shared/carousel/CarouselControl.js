import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItems from '../../../../Helpers/carouselItems';
import CarouselItem from './CarouselItem'

export default function CustomCarouselControl(props)
{
     return (
        <Carousel>
            {
                CarouselItems.map(item => {
                   return <CarouselItem item={item} />
                })
            }
        </Carousel>
    )
}
 
