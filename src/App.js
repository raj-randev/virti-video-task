import './App.css';
import { useRef, useEffect } from 'react';
import timeInterval from './utilities/timeInterval';

function App() {

  //Reference elements on page
  const videoRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const appRef = useRef(null);

  //Variables
  let delay1 = 3500;
  let delay2 = 6000;
  let delay3 = 7000;

  let intervalTimeOne = 5000;
  let intervalTimeTwo = 2000;
  let intervalTimeThree = 1500;

  let displayNumberOne = 1;
  let displayNumberTwo = 2;
  let displayNumberThree = 3;

  useEffect(() => {
    
    const video = videoRef.current;
    const app = appRef.current;
    const imageOne = image1Ref.current;
    const imageTwo = image2Ref.current;
    const imageThree = image3Ref.current;

    //Function to Animate Images 
    const animateImage = () => {
      
      timeInterval(imageOne, displayNumberOne, intervalTimeOne, delay1);
      
      timeInterval(imageTwo, displayNumberTwo, intervalTimeTwo, delay2);
      
      timeInterval(imageThree, displayNumberThree, intervalTimeThree, delay3);

    }

    //Function to Change background Color on Hover
    const backgroundColorOnHover = () => {
      console.log('working');
      app.style.backgroundColor = `rgba(226, 179, 13, 1)`;
    }

    //Function to Revert background Color on Mouse Out
    const backgroundColorOnOut = () => {
      app.style.backgroundColor = 'rgba(90, 206, 236, 0.3)';
    }

    //Event Listeners
    video.addEventListener('play', animateImage);
    video.addEventListener('mouseover', backgroundColorOnHover);
    video.addEventListener('mouseout', backgroundColorOnOut)

  })

  return (
    <div ref={appRef} className="App">
      <div className="videoContainer" >
        <video ref={videoRef} src='/Big_Buck_Bunny_1080_10s_5MB.mp4' width='100%' height='auto' controls ></video>
        <img ref={image1Ref} className='videoImage topLeft noDisplay' src='/images/image1.png' alt='' />
        <img ref={image2Ref} className='videoImage topRight noDisplay' src='/images/image2.png' alt='' />
        <img ref={image3Ref} className='videoImage centre noDisplay' src='/images/image3.png' alt='' />
      </div>
    </div>
  );
}

export default App;
