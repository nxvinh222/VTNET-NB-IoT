import React from "react"; 


const logoUri =
  "https://www.vodafone.com/business/media/image/1508862781296/640/251121730-h_800x400.jpg";

// const carouselPicture =
//     "https://upload.wikimedia.org/wikipedia/commons/5/52/Golden_sky_%284080648531%29.jpg"


function Banner(props) {

  return (
      <div className="hero-text">         
          <img className="col-12 p-0" src={logoUri} style={{minHeight: "275px",   objectFit: "cover"}}  alt="hero banner"/>
          <div className="hero-text-top text-center">
              <h1 className="display-3 text-center" id="hero-text-detail" >{props.bannerText}</h1>
          </div>
      </div>
  );
}


export default Banner;