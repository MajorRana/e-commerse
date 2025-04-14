import Carousel from '@/components/Carousel'
import CategoryListing from '@/components/CategoryListing'
import Featured from '@/components/Featured'
import NavBar from '@/components/NavBar'
import TopBar from '@/components/TopBar'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Carousel/>
    <Featured/>
    <CategoryListing/>
    </>
  )
}

export default Home