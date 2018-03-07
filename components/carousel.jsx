import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';

class HomeCarousel extends Component{
    render(){
        return(
            <Carousel showArrows={true}>
                <div>
                    <img src="../images/ppmimg1.jpeg"></img>
                    <p className="legend">legend 1</p>
                </div>

                <div>
                    <img src="../images/ppmimg2.jpeg"></img>
                    <p className="legend">legend 2</p>
                </div>

                <div>
                    <img src="../images/ppmimg3.jpeg"></img>
                    <p className="legend">legend 3</p>
                </div>

                <div>
                    <img src="../images/ppmimg4.jpeg"></img>
                    <p className="legend">legend 4</p>
                </div>

            </Carousel>

        );
    }
}

export default HomeCarousel;