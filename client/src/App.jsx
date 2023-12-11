import { useState, useEffect } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
// Use UseEffect Hook for handle 
  useEffect(() => {
    // Function to fetch random number from the API
    const getRandomNumber = async () => {
      const response = await fetch('http://localhost:3000/api/random');
      const data = await response.json();
      setRandomNumber(data.number);
    };

    // Update the UI every second
    const intervalId = setInterval(() => {
      setRandomNumber((prevNumber) => prevNumber - 1);

      // Check if the random number is negative
      if (randomNumber <= 0) {
        // Stop the interval
        clearInterval(intervalId);

        // Fetch a new random number
        getRandomNumber();
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);

  }, [randomNumber]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#001974] font-bold">
      <header>
        <h1 className=' w-[16rem] h-[16rem] gredientClass shadow-md text-6xl p-4 m-3 rounded-xl text-white flex flex-col md:flex-row text-center justify-center items-center'><span>{randomNumber}</span></h1>
      </header>
    </div>
  );
}

export default App;
