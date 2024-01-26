import { useEffect, useState } from "react";

function RandomPhoto() {
  const [getRandomPhoto, setGetRandomPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const clientId = "L2kmDwHaKuncpadZIJwOD0QP69Z142mZMDYTgqk60ac";

  const randomPhoto = () => {
    setLoading(true);
    fetch(`https://api.unsplash.com/photos/random?client_id=${clientId}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setGetRandomPhoto(data.urls.raw);
      });
  };

  useEffect(() => {
    randomPhoto();
  }, []);

  return (
    <div className=" h-screen flex justify-center mx-auto">
      <div className="mt-20 max-w-[500px]">
        <h1 className="text-5xl mb-4 text-center">Random Photos</h1>
        <div className="flex flex-col justify-center items-center">
          <button
            disabled={loading}
            onClick={randomPhoto}
            className="border-[1px] border-black py-1 px-4 bg-lime-600 hover:bg-lime-500 active:scale-95 active:bg-lime-400 rounded-lg mb-6"
          >
            Get Photo
          </button>

          <div className="flex w-full max-w-64 hover:max-w-[25rem] transition-all duration-300 ease-in">
            {getRandomPhoto ? (
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden group ">
                <img
                  src={getRandomPhoto}
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

export default RandomPhoto;
