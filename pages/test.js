import MapComponents from '../components/MapComponents2';

function Home({ components }) {
  return (
    <>
      <MapComponents arr={components} />
    </>
  );
}

export async function getStaticProps() {
  //const res = await fetch('https://cofocus-dev-v1.vercel.app/api/content');
  //const json = await res.json();
  const json = {
    "component": "Header",
    "tagline": "Hello World!",
    "array": [ 
   {
    "component": "Feature1",
    "tagline": "test 1",
    "taglineClass": "text-purple-300",
    "containerClassName":"bg-green-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
    },
    {
    "component": "Hero",
    "tagline": "test 2",
    "taglineClassName": "text-3xl font-extrabold text-blue-900",
    "containerClassName":"bg-green-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
    
    },{
      "component": "Hero",
      "tagline": "test 2",
      "taglineClassName": "text-3xl font-extrabold text-red-400"
      }
    ]
    }

  return {
    props: {
      components: json.array
    }
  };
}

export default Home;
