import React, {Component} from 'react';

class HomeCarousel extends Component{
    render(){
        return(
            <div  id="mainCarousel" className="carousel carousel-slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#mainCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#mainCarousel" data-slide-to="1"></li>
                    <li data-target="#mainCarousel" data-slide-to="2"></li>
                    <li data-target="#mainCarousel" data-slide-to="3"></li>
                </ol>

                <div>
                    <div className="item active carousel-image">
                        <img src="../images/ppmimg1.jpeg"></img>
                    </div>

                    <div className="item carousel-image">
                        <img src="../images/ppmimg2.jpeg"></img>
                    </div>

                    <div className="item carousel-image">
                        <img src="../images/ppmimg3.jpeg"></img>
                    </div>

                    <div className="item carousel-image">
                        <img src="../images/ppmimg4.jpeg"></img>
                    </div>


                </div>

                <a className="left carousel-control" href="#mainCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="right carousel-control" href="#mainCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>


            </div>


        );
    }
}

export default HomeCarousel;