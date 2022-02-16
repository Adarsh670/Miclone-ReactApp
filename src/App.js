import { Route, Routes } from 'react-router-dom';
import jsondata from './data/data.json';
import PreNavbar from './Component/PreNavbar';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Offers from './Component/Offers';
import Heading from './Component/Heading';
import StarProduct from './Component/StarProduct';
import Hotaccessories from './Component/Hotaccessories';
import ProductReviews from './Component/ProductReviews';
import Inthepress from './Component/Inthepress';
import Prefooter from './Component/Prefooter';
import Footer from './Component/Footer';
import Hotaccessoriesmenu from './Component/Hotaccessoriesmenu';
import './App.css';
import './style.css';


// Separate Json Data for all Single Components
const sliderCom = jsondata.banner.start;
const offerCom = jsondata.offer;
const starProducts = jsondata.starProduct;
const productReview = jsondata.productReviews;
const endslider = jsondata.banner.end;
const footer = jsondata.footer;
// const hotaccessories = jsondata.hotAccessories;
// const hotaccessoriescover = jsondata.hotAccessoriesCover;


function App() {

  return (
    <>

      <PreNavbar />


      <Navbar />
      <Slider start={sliderCom} />
      <Offers offers={offerCom} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starproduct={starProducts} />
      <Heading text="HOT ACCESSORIES" />
      <Hotaccessories />
      <Routes>
       
        <Route path="/music" element={
          <Hotaccessoriesmenu music={jsondata.hotAccessories.music}
            musicCover={jsondata.hotAccessoriesCover.music} />}>
        </Route>
        <Route path="/smartDevice" element={
          <Hotaccessoriesmenu smartDevices={jsondata.hotAccessories.smartDevice}
            smartDevice={jsondata.hotAccessoriesCover.smartDevice} />}>
        </Route>
        <Route path="/home" element={
          <Hotaccessoriesmenu home={jsondata.hotAccessories.home}
            homeCover={jsondata.hotAccessoriesCover.home} />}>
        </Route>
        <Route path="/mobileAccessories" element={
          <Hotaccessoriesmenu mobileaccessories={jsondata.hotAccessories.mobileAccessories}
          mobileaccessoriesCover={jsondata.hotAccessoriesCover.mobileAccessories} />}>
        </Route>
        <Route path="/lifeStyle" element={
          <Hotaccessoriesmenu lifestyle={jsondata.hotAccessories.lifeStyle}
          lifeStyleCover={jsondata.hotAccessoriesCover.lifeStyle} />}>
        </Route>

       
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productreview={productReview} />
      <Heading text="IN THE PRESS" />
      <Inthepress endslider={endslider} />
      <Prefooter />
      <Footer footer={footer} />

      <br />
       {/* <Route path="/smartDevice" element={
          <Hotaccessoriesmenu smartDevice={jsondata.hotAccessories.smartDevice}
            smartDevices={jsondata.hotAccessoriesCover} />}>
        </Route> */}
    </>
  );
}

export default App;