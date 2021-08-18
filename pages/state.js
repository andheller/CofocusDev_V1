import React, { useState } from 'react'


const json = {
  "tag": "div",
  "className": "bg-red-100 mt-2 text-red-800",
  "style": { "background": "bg-red-100" },
  "children": ["hello", { "tag": "h1", "className": "text-green-700 text-8xl", "children": ["world", { "tag": "span", "className": "text-blue-700 text-sm", "children": ["! I think this is working!"] }] }]
}

const tagOptions = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6", "b", "u", "i"];



function mapJSON(mapThis) {
  return mapThis.children.map((child) => child.hasOwnProperty("children") ? createElements(child) : child);
}

function createElements(jstate) {
  if (tagOptions.includes(jstate.tag)) {
    return React.createElement(
      jstate.tag,
      { className: jstate.className },
      mapJSON(jstate)
    )
  } else {
    return React.createElement(
      "div",
      { className: jstate.className },
      mapJSON(jstate)
    )
  }
}


function Home({ json }) {
  const [jstate, setJstate] = useState(json);

  function updateJstate() {
    setJstate(prevState => {
      return { ...prevState, className: "bg-blue-200" }
    })
  }

  function updateTextColor() {
    setJstate(prevState => {
      return { ...prevState, children: ["Goodbye", { "tag": "h1", "className": "text-purple-700 text-8xl bg-purple-200", "children": ["world", { "tag": "span", "className": "text-blue-700 text-sm", "children": ["! I think this is working!"] }] }] }
    })
  }

  function reset() {
    setJstate(prevState => {
      return { ...prevState, className: "bg-red-100 mt-2 text-red-800", children: ["hello", { "tag": "h1", "className": "text-green-700 text-8xl", "children": ["world", { "tag": "span", "className": "text-blue-700 text-sm", "children": ["! I think this is working!"] }] }] }
    })
  }

  return (
    <>
      {createElements(jstate)}
      <div class="justify-between flex max-w-2xl">
        <button onClick={updateJstate} className="bg-blue-300 text-blue-800 px-8 py-2 rounded-sm">
          Update Background to Blue
      </button>
        <button onClick={updateTextColor} className="bg-purple-300 text-purple-800 px-8 py-2 rounded-md">
          Update Text Color to Purple
      </button>

        <button onClick={reset} className="bg-red-300 text-red-800 px-8 py-2 rounded">
          Reset
      </button>
      </div>

    </>
  );
}

export async function getStaticProps() {
  //const res = await fetch('https://cofocus-dev-v1.vercel.app/api/content');
  //const json = await res.json();



  return {
    props: {
      json

    }
  };
}

export default Home;
