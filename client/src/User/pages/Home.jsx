import React, { useReducer } from 'react'
import HeaderSection from '../Components/HeaderSection'
import CategoriesSection from '../Components/CategoriesSection'
import FooterSection from '../Components/FooterSection'

export default function Home() {
  

  return (
    <div>
      <HeaderSection/>
      <CategoriesSection />
      <FooterSection/>
    </div>
  )
}
