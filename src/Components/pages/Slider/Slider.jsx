
const Slider = () => {
  return (
    <div>
      <div className="carousel h-96 w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/2tZTZ4p/nicolas-cool-ht-B7v-Jg-JTRQ-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/S0GKn9v/brandon-green-F-KSc-PBU93-I-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4wk9552/oscar-hr-KX3-Rv-FEVTEM-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    </div>
  );
};

export default Slider;