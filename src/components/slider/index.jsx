import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from '../../assets/images/new-cars-model/ncm1.png'
import bg2 from '../../assets/images/new-cars-model/ncm2.png'
import bg3 from '../../assets/images/new-cars-model/ncm3.png'


import './style.scss'

const Slides =()=>{

    
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};

let slider_list =[
    {
        img :bg1,
        car_name:'chevrolet camaro  za100',
        about_one: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        about_two:'Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        btn:'view details'

    },
    {
        img :bg2,
        car_name:'BMW series-3 wago',
        about_one: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        about_two:'Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        btn:'view details'

    },
    {
        img :bg3,
        car_name:'ferrari 488 superfast',
        about_one: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        about_two:'Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        btn:'view details'

    },

]
    return(
        <div className="slider-cont">
            <div className="title-part">
                <p>Checkout the Latest Cars</p>
                <h2>Newest Cars</h2>
                <div className="line"></div>
            </div>
            
        <Slider {...settings}  >
            {
                slider_list.map((el)=>{
                    
                    return(
                        <div >
                        <div  className={"slid"}>
                         <div className="img-div"> <img src={el.img} alt=""/></div>
                            <div className={"slid-cover"}>
                                    <p className={"slid-title"}>{el.car_name}</p>
                                <p className={"slid-desc"}>{el.about_one}</p>
                                <br/>
                                <p className={"slid-desc"}>{el.about_two}</p>
                                <button className={"slid-btn"}>{el.btn}</button>
                            </div>
                        </div>
                </div>
                    )
                })
            }
        </Slider>
        </div>
    )
}

export default Slides

