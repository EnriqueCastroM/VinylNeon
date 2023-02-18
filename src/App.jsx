import { useState } from 'react'
import Vinilsillon from './assets/Sillon.jpg'
import Vinilneonlogo from './assets/Vndestino.jpg'
import Tidallogo from './assets/Tidal.png'
import Applemusic from './assets/Applemusic.png'
import Deezer from './assets/Deezer.png'
import Spotify from './assets/Spotify.png'
import Instalogo from './assets/Instagram.png'
import Facelogo from './assets/Facebook.png'
import Youtubelogo from './assets/Youtube.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="App"  style={{ backgroundImage: `url(${Vinilneonlogo})` }}>
<div className="App" >
      
      <Header/>
      <div className="card"  style={{ backgroundImage: `url(${Vinilneonlogo})` }}>
      <p  style={{ backgroundColor: 'black' }}>
      No estamos destinados a conocer a ciertas personas, aunque al principio así lo parezca. En nuestra primer entrega hablamos sobre cómo es bajar de las nubes cuando se está enamorado y darnos cuenta que nada era tan lindo como creíamos.
      </p>
      
      <div className='fotos'>
      <a href="https://www.youtube.com/watch?v=VfUwlbGju1Q&ab_channel=VinylNeón" target="_blank">
          <img src={Vinilsillon} className="sillon" alt="sillonVinyl" />
          <p  style={{ backgroundColor: 'black' }}>Mira nuestro Video "DESTINO" click aquí o en la imagen.</p>
      </a>
      <div className='musicplatforms'  style={{ backgroundColor: 'black' }}>
      <a href="https://open.Spotify.com/album/08NHQbzSh36QMhqyfDITkZ">
      <img src={Spotify} className="Spotify" alt="Spotify" />
      </a>
      <a href="https://tidal.com/browse/album/266646379">
      <img src={Tidallogo} className="Tidallogo" alt="Tidallogo" />
      </a>
      <a href="https://www.Deezer.com/es/album/386600327">
      <img src={Deezer} className="Deezer" alt="Deezer" />
      </a>
      <a href="https://music.apple.com/mx/album/destino-single/1659830200">
      <img src={Applemusic} className="Applemusic" alt="Applemusic" />
      </a>
      
      </div>
      

      <a href="https://onerpm.link/894544538051/presavecallback?context=pre_save&service=Spotify&redirecturl&actionid&order=639a1582f9bf66da3719210f&user=Jose%20Luis%20Navarro%20Hernandez&status=success&origin=presavecallback" target="_blank">
        <p  style={{ backgroundColor: 'black' }}>Escucha "DESTINO en las diferentes plataformas digitales.</p>
        <div className='socialcontainer' style={{ backgroundColor: 'black' }}>
        <a href="https://www.instagram.com/vinylneonband/">
        <img src={Instalogo}  className='socialmedia' alt="socialmedia"/>
      </a>
      <a href="https://www.youtube.com/@vinylneon">
        <img src={Youtubelogo}  className='socialmedia' alt="socialmedia"/>
      </a>
      <a href="https://www.facebook.com/VinylNeon">
        <img src={Facelogo}  className='socialmedia' alt="socialmedia"/>
      </a>
     
        </div>
        <img src={Vinilneonlogo} className="logo" alt="sillonVinyl" />
      </a>      
      </div>     
      </div>  
      <Footer/>

</div>  

  )
}

export default App
