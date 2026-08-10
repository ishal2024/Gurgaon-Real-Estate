import React, { useContext } from 'react'
import Hero from './Hero'
import ExplorePropertyTypes from './ExplorePropertyTypes'
import PopularProperties from './PopularProperties'
import WhyChooseUs from './WhyChooseUs'
import HowItWorks from './HowItWorks'
import QuickStatsBanner from './QuickStatBanner'
import ClientTestimonials from './ClientTestimonial'
import {ContactModalContext} from '../../App'
import ContactModal from '../Modal/ContactModal'

function Home() {

  // const {isContactModalOpen} = useContext(ContactModalContext)

  return (
    <>
   
      <Hero />
      <QuickStatsBanner />
      <ExplorePropertyTypes />
      <PopularProperties />
      <HowItWorks />
      <WhyChooseUs />
      <ClientTestimonials />
      
    </>
  )
}

export default Home