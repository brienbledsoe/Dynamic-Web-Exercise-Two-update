import React from 'react';
import VideoMod from '../Videos';
import Videos from '../Videos'
export default function PageWrapper({clouds, children}) {
  const wrapperOpacity = clouds ? (clouds * 0.01) : 0;
  const currentSky = "189, 195, 199"
  const updatedCurrentSky = "246, 71, 71"
  if(clouds > 75){
    return(
      <div style={{
        height: '100%',
        width: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: `rgba(${currentSky}, ${wrapperOpacity})`


      }}className="PageWrapper grey">
      {children}
      <div>
      <iframe className="youtube-player"
      type="text/JavaScript"
      width="420"
      height="315"
      src="https://youtu.be/FZkc_-DGU14?autoplay=1&loop=1&mute=1">
      </iframe>
      </div>
      </div>


    )
  }else{
    return(
      <div style={{
        height: '100%',
        width: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: `rgba(${updatedCurrentSky}, ${wrapperOpacity})`


      }}className="PageWrapper red">
      {children}
      <div>
      <iframe className="youtube-player"
      type="text/JavaScript"
      width="420"
      height="315"
      src="https://youtu.be/3LSZSJJ98x0?autoplay=1&loop=1&mute=1">
      </iframe>
      </div>
      </div>
    )
  }


} /*end of function*/
