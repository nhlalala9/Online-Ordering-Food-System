import React from 'react'
import Categories from "../../Components/Catergories/Categories.jsx"
//import Contact from '../../components/Contact/Contact'
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts.jsx"
import Slider from "../../Components/Slider/Slider.jsx"
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Organic"/>
      <Categories/>
      <FeaturedProducts type="Halal"/>
      {/* <Contact/> */}
    </div>
  )
}

export default Home
