import MapComponents from '../components/MapComponents';

function Home({ components }) {
  return (
    <>
      <MapComponents arr={components} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://cofocus-dev-v1.vercel.app/api/content');
  const json = await res.json();

  return {
    props: {
      components: json.array
    }
  };
}

export default Home;
