import { useEffect, useState } from "react";
import Controls from "./Controls";
import Image from "./Image";
import { useTimer } from "./Timer";

const url = "https://api.unsplash.com/photos/random";
const accessKey = "SZ6bDYbZc8xa7ej2Jd7Dd7f3-Op79tnfCgZ0wcjpNjE";

function Slides(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [time, setTime] = useState(props.timer)

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
    if (time < 1) {
      setCurrentSlide(currentSlide + 1);
      setTime(props.timer);
    }
      
    if (currentSlide < props.slides) {
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
        <div>{time}</div>
        <Image image={images[currentSlide-1]} />
        <Controls currentSlide={currentSlide} totalSlides={images.length} changeSlide={setCurrentSlide}/>
      </div>
    )
  }
}

export default Slides;