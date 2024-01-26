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
      <div className="mt-20 max-w-[500px]">
        <h1 className="text-5xl mb-4 text-center">Random Photos</h1>
        <div className="flex flex-col justify-center items-center">
          <button
            disabled={isLoading}
            onClick={getRandomDog}
            className="border-[1px] border-black py-1 px-4 bg-lime-600 hover:bg-lime-500 active:scale-95 active:bg-lime-400 rounded-lg mb-6"
          >
            Get Photo
          </button>

          <div className="flex w-full max-w-64 hover:max-w-[25rem] transition-all duration-300 ease-in">
            {dogImage ? (
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden group ">
                <img
                  src={dogImage}
                  alt="random photo"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 from-30% p-4">
                  <div className="w-48">
                    <h2 className="text-white text-2xl font-medium leading-tight">
                      Random Card Title Here
                    </h2>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all">
                      <p className="text-white/70 mt-2 overflow-hidden opacity-0 transiton group-hover:opacity-100 duration-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem, veniam quo magnam id reprehenderit sit sunt et
                        alias exercitationem minima!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <p className="text-3xl font-semibold m-4 mt-6">Loading...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
