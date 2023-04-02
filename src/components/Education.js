import sd from "../assets/img/sd.svg";
import smp from "../assets/img/smp.svg";
import sma from "../assets/img/sma.svg";
import univ from "../assets/img/univ.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Education = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="education" id="educations">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="education-bx wow zoomIn">
                        <h2>Education</h2>
                        <p>Has received and complete some education.<br></br>Here is my educational background</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme education-slider">
                            <div className="item">
                                <img src={sd} alt="Image" />
                                <h5>SD Negeri 4 Sesetan</h5>
                            </div>
                            <div className="item">
                                <img src={smp} alt="Image" />
                                <h5>SMP Negeri 6 Denpasar</h5>
                            </div>
                            <div className="item">
                                <img src={sma} alt="Image" />
                                <h5>SMA Negeri 3 Denpasar</h5>
                            </div>
                            <div className="item">
                                <img src={univ} alt="Image" />
                                <h5>Universitas Udayana</h5>
                            </div>
                            {/* <div className="item">
                                <img src={sd} alt="Image" />
                                <h5>SD Negeri 4 Sesetan</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        <img className="background-image-right" src={colorSharp} alt="Image" />
    </section>
  )
}
