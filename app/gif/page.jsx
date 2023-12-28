import GiphySearch from '../components/gif';

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-between">
     <h1>My Giphy App</h1>
      <GiphySearch /> 
    </main>
  );
};

export default HomePage;
