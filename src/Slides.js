import { useEffect, useState } from "react";
import Controls from "./Controls";
import Image from "./Image";

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
          console.log(images)
          setImages(images);
          setIsLoaded(true);
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
    console.log(images)
    console.log(images[currentSlide-1]);
    return (
      <div>
        <Image image={images[currentSlide-1]} />
        <Controls currentSlide={currentSlide} totalSlides={images.length} changeSlide={setCurrentSlide}/>
      </div>
    )
  }
}

export default Slides;