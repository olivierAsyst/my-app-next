
const Home = async () => {

    const slug = "Anubis"
    const res = await fetch(`http://localhost:3000/api/items/${slug}`);
    const data = await res.text();

  return (
      <div>
        <p className="flex-1 bg-gradient-to-l from-gray-900 to-gray-400 text-transparent bg-clip-text">Mon app</p>
          {/*<Button />*/}
          <h1>{data}</h1>
      </div>
  );
}

export default Home;
