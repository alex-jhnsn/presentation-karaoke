import { useEffect, useState, useRef } from "react";
import Controls from "./Controls";
import Image from "./Image";

const url = "https://api.unsplash.com/photos/random";
const accessKey = "UNSPLASHED_API_KEY";

function Slides(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [time, setTime] = useState(props.timer);

  const updateSlide = ((slide) => {
    setCurrentSlide(slide);
    setTime(props.timer)
  });

  useEffect(() => {
    fetch(url + "?orientation=landscape&content_filter=high&count=" + props.slides , {
      headers: new Headers({
        "Authorization": "Client-ID " + accessKey
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          const images = result.map(
             imageData => {
              return {
                url: imageData.urls.regular,
                description: imageData.description,
                author: {
                  username: imageData.user.username,
                  name: imageData.user.name
                }
              }
            }
          );
          setImages(images);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [props.slides]);

  useEffect(() => {
    if (time < 1 && currentSlide < props.slides) {
      updateSlide(currentSlide + 1);
    }
      
    if (currentSlide <= props.slides) {
      const timeLeft = setInterval(() => {
        setTime(c => c - 1);
      }, 1000);
      return () => clearInterval(timeLeft);
    }
  }, [time]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {  
    return (
      <div>
        <Image image={images[currentSlide-1]} />
        <Controls currentSlide={currentSlide} totalSlides={images.length} changeSlide={updateSlide} time={time} initialTime={props.timer}/> 
      </div>
    )
  }
}

export default Slides;