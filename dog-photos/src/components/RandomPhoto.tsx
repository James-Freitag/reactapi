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
            className="border-[1px] border-black py-1 px-4 bg-lime-600 hover:bg-lime-500 active:scale-95 active:bg-lime-400 rounded-lg"
          >
            Get Photo
          </button>

          <div>
            {getRandomPhoto ? (
              <img
                src={getRandomPhoto}
                alt="random dog photo"
                className="rounded-lg max-w-[300px] h-auto mt-4 shadow-black shadow-sm"
              />
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
