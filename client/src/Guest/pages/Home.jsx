import React, { useReducer } from 'react'
import HeaderSection from '../Components/HeaderSection'
import CategoriesSection from '../Components/CategoriesSection'
import NavigationBar from '../Components/NavigationBar'

export default function Home() {
  

  return (
    <div>
      <NavigationBar/>
      <HeaderSection/>
      <CategoriesSection/>
    </div>
  )
}
