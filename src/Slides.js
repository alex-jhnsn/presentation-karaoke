import { useEffect, useState } from "react";
import Controls from "./Controls";

const url = "https://api.unsplash.com/photos/random";
const accessKey = "SZ6bDYbZc8xa7ej2Jd7Dd7f3-Op79tnfCgZ0wcjpNjE";
const noImages = 10;

function Slides() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    fetch(url + "?orientation=landscape&content_filter=high&count=" + noImages , {
      headers: new Headers({
        "Authorization": "Client-ID " + accessKey
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          const imageUrls = result.map(
            imageData => imageData.urls.regular
          );
          setIsLoaded(true);
          setImages(imageUrls);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <img src={images[currentSlide]} alt="test"/>
        <Controls currentSlide={currentSlide} totalSlides={images.length}/>
      </div>
    )
  }
}

export default Slides;