import React from 'react'
import Frame1 from '../Frame1.png'
export default function Home() {
  return (
    <div>
        <div className="App relative h-screen flex flex-col items-center justify-center" style={{backgroundImage: `url(${Frame1})`, backgroundSize: 'cover'}}>
      
    <h1 className="text-white text-9xl mb-4">
      EarthWise <br />
      <div className='-my-14'>
        <span className="my-3 text-4xl">Cultivate Sustainability Together</span>
      </div>
    </h1>
    <div className="absolute bottom-0 left-0 mb-4 ml-4 flex">
      <a href="https://www.instagram.com"><img src="instagram_logo_url" className="h-6 w-6 mr-4" alt="Instagram Logo" /></a>
      <a href="https://www.twitter.com"><img src="twitter_logo_url" className="h-6 w-6 mr-4" alt="Twitter Logo" /></a>
      <a href="https://web.whatsapp.com"><img src="whatsapp_logo_url" className="h-6 w-6" alt="WhatsApp Logo" /></a>
    </div>
    </div>
    </div>
  )
}
