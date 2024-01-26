import { useEffect, useState } from "react";

function ExpenseTracker() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomDog = () => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setDogImage(data.message);
      });
  };

  useEffect(() => {
    getRandomDog();
  }, []);

  return (
    <div className=" h-screen flex justify-center mx-auto">
      <main className="max-w-[500px] mt-20">
        <h1 className="text-5xl my-6 text-center">Dog Photos</h1>
        <div className="flex flex-col justify-center items-center">
          <button
            disabled={isLoading}
            onClick={getRandomDog}
            className="border-[1px] border-black py-1 px-4 bg-lime-600 hover:bg-lime-500 active:scale-95 active:bg-lime-400 rounded-lg"
          >
            Fetch!
          </button>

          <div className="mt-6">
            {dogImage ? (
              <img
                src={dogImage}
                alt="random dog photo"
                className="rounded-lg max-w-[300px] h-auto shadow-lg"
              />
            ) : (
              <div className="flex justify-center items-center">
                <p className="text-3xl font-semibold m-4 mt-6">Loading...</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ExpenseTracker;
