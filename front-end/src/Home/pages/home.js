//Importing Packages
import React from "react";
import {Autoplay,Navigation,Pagination} from 'swiper';
import {Swiper, SwiperSlide } from "swiper/react";

//Importing Files
import Nav from "../../Navigation/Nav/components/nav";
import Aux from "../../Auxiliary/auxiliary";
import Footer from "../../Navigation/Footer/components/footer";

//Importing Images
import firstCarasouel from './images/first.jpg';
import secondCarasouel from './images/second.jpg';

//Importing Css
import './home.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const HomePage = () => {
    return(
        <Aux>
            <Nav />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper"
            >
                <SwiperSlide className="swiperSlides">
                    <img src={firstCarasouel} alt="Slide1" />
                </SwiperSlide>
                <SwiperSlide className="swiperSlides">
                    <img src={secondCarasouel} alt="Slide2" />
                </SwiperSlide>
            </Swiper>
            <div className="introductionDiv">
                <h2>A Brief Introduction</h2>
                <p>BISE Abbottabad came into being as a result of the break-up of Peshawar Board in 1990 under the North West Frontier</p>
                <p>Board of Intermediate and Secondary Education Act 1990.It is working in its own building on Murree Road , Abbottabad.</p>
                <p>Due to increase in work load on matric section, the conduct section has been divided into two separate sections.</p>
                <p>Conduct 1 to deal with matric and conduct 2 to deal with intermediate.</p>
            </div>
            <Footer />
            
        </Aux>
    )
}

export default HomePage;