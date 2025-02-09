import Header from './Header';
function Home() {
  return (
    <div>
      <h1 className="p-5 mt-10 text-2xl text-center">
        The best pizza. Straight out of the oven, straight to you.
      </h1>

      <div className="flex ">
        <input
          type="text"
          className="p-2  m-auto rounded-full bg-white"
          placeholder="Your full name"
        />
      </div>
    </div>
  );
}

export default Home;
