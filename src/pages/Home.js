import React from 'react'
import '../css/home.css';
import banner from '../res/prime_banner.jpg';
import Product from '../components/Product';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
                <div className="home__row">
                    <Product 
                        title="Acer Nitro 5/Ryzen 2500U/RX 560X"
                        price={49990}
                        rating={5}
                        img="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"/>
                    <Product 
                        title="Lego"
                        price={1499}
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/LEGO/DesktopGateway_CategoryCard_758X608-1-1x-LEGO._SY304_CB666764715_.jpg"/>
                </div>

                <div className="home__row">
                    <Product title="Latest Books"
                        price={699}
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/062021/1x_758x608_Desktop-QC_books-homepage._SY304_CB667750558_.jpg"/>
                    
                    <Product title="DSLR Camera 2021"
                        price={72500}
                        rating={5}
                        img="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Shutterbug/Fest/August/GW/379x304_Shutterbug_fest_Home_studio_photography._SY304_CB407732303_.jpg"/>
                    
                    <Product title="Pack of 10 masks"
                        price={499}
                        rating={4}
                        img="https://m.media-amazon.com/images/I/41k9ZijkPHS._AC_SY200_.jpg"/>
                    
                </div>

                <div className="home__row">
                    <Product />
                </div>


            </div>
        </div>
    )
}

export default Home
