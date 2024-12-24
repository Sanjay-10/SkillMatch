import React from 'react'
import Bgc from '../components/Bgc'
import Header from '../components/Header'

function DetailedPage() {
  return (
    <div>
        <Bgc />
        <Bgc style={{rotate:"180deg"}}/>

        <Header />

    </div>
  )
}

export default DetailedPage