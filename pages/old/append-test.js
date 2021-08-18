import Feature1 from '../components/Feature1';
import { useState } from 'react'


   
  const mapComponents = {
    //'Hero':(item) =><Hero obj={item}/>,
    //'Header':(item) =><Header obj={item}/>,
    'Feature1':(item) =><Feature1 obj={item}/>
    //'Feature2':(item) =><Feature2 obj={item}/>
  
  }



function Home({ components }) {
  const [jstate, setJstate] = useState(['hi', 'hi', <Feature1 />, <Feature1 />])
  //const [count, setCount] = useState(0);
  const child =[mapComponents.Feature1]

  return (
    <>    
    {/*
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    */}
      <div className="h-16 flex flex-wrap content-center min-w-full">
        <button onClick={() => setJstate(jstate.push('hi'))} className = "bg-indigo-500 px-4 py-1 m-auto -m-0" >Add Component</button></div>
        
        <div>{
        jstate.map(item =><div>{item}</div>)
          }
          
        </div>
    </>
  );
}

export async function getStaticProps() {
  //const res = await fetch('https://cofocus-dev-v1.vercel.app/api/content');
  //const json = await res.json();
  
  const json = {
    "Name": "Hello World",
    "Slug": "hello-world!",
    "content": [ 
   {
    "component": "Feature1",
    "key":"1987-1234-1241-1231",
    "tagline": "<b>test 1</b>",
    "taglineClass": "text-purple-300",
    "desctiption": 'text-blue-300: test',
    "containerClassName":"bg-green-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4",
    'content': [
      '<p>Text based on this footnote <span>1</span></p>  '
    ]
    },
    {
    "component": "Hero",
    "key":"1987-1234-1241-4231",
    "tagline": '3',
    "taglineClassName": "text-3xl font-extrabold text-blue-900",
    "containerClassName":"bg-green-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
    
    },{
      "component": "Hero",
      "key":"1987-1234-1241-2231",
      "tagline": "test 2",
      "taglineClassName": "text-3xl font-extrabold text-red-400",
      //"spanTest":"<span>testing if this works</span>"
      }
    ]
    }

  return {
    props: {
      components: json.content
    }
  };
}

export default Home;
