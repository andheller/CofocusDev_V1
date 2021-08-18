import React, { useState } from 'react'
  
  
  const json = {
        "tag": "div",
        "className": "border-2 border-white bg-white max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8",
        "style":{"background":"bg-red-100"},
        "children": [
            {
            "tag": "h2",
            "className": "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
            "style":{"background":"bg-red-100"},
            "children": [
                {
                "tag": "span",
                "className": "block",
                "style":{"background":"bg-red-100"},
                "children": ["Ready to dive in?"]
                },
                {
                  "tag": "span",
                  "className": "block",
                  "style":{"background":"bg-red-100"},
                  "children": ["Start your free trial today."]
                  }
            ]
            },
            {
              "tag": "div",
              "className": "mt-8 flex justify-center",
              "style":{"background":"bg-red-100"},
              "children": [
                {
                  "tag": "div",
                  "className": "inline-flex rounded-md shadow",
                  "style":{"background":"bg-red-100"},
                  "children": [
                    {
                      "tag": "a",
                      "className": "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",
                      "style":{"background":"bg-red-100"},
                      "children": ["Get started"]
                      }
                  ]
                  },
                {
                  "tag": "div",
                  "className": "ml-5 inline-flex",
                  "style":{"background":"bg-red-100"},
                  "children": [
                    {
                      "tag": "a",
                      "className": "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200",
                      "style":{"background":"bg-red-100"},
                      "children": ["Learn More"]
                      }
                  ]
                  }
              ]
              }
        ]
        }



    const tagOptions = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6", "b", "u", "i", "a"];

    

  function mapJSON(mapThis){
    return mapThis.children.map((child)=> child.hasOwnProperty("children") ? createElements(child) : child); 
  }

  function createElements(jstate){
    if (tagOptions.includes(jstate.tag)){
    return React.createElement(
      jstate.tag,
      {className: jstate.className},
      mapJSON(jstate)
    )} else{
      return React.createElement(
        "div",
        {className: jstate.className},
        mapJSON(jstate)
      )} 
  }


function Home({json}) {
  const [jstate, setJstate] = useState(json);  
  
  function transformIndigo(){
    setJstate(prevState =>{
      return { ...prevState, className: "border-2 border-white bg-indigo-200 max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8"}
    })}

    function transformGradient(){
      setJstate(prevState =>{
        return { ...prevState, className: "border-2 border-white bg-gradient-to-r from-blue-200 to-indigo-300 via-purple-300 max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8"}
      })}

  function transformPurple(){
      setJstate(prevState =>{
        return { ...prevState, className: "border-2 border-white bg-purple-200 max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8"}
      })}

  function transformWhite(){
      setJstate(prevState =>{
        return { ...prevState, className: "border-2 border-gray-400 shadow bg-white max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8"}
       })}
  return (
    <>
      <div class="justify-between flex bg-gray-800 p-8">
      <button onClick={transformIndigo} className ="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> 
        Transform Indigo
      </button>
      <button onClick={transformGradient} className ="bg-gradient-to-r from-indigo-300 to-purple-300 text-gray-900 px-8 py-2 rounded-md"> 
        Transform Gradient
      </button>

      <button onClick={transformPurple} className ="bg-purple-300 text-purple-800 px-8 py-2 rounded-md"> 
        Transform Purple
      </button>

      <button onClick={transformWhite} className ="bg-white text-gray-800 px-8 py-2 rounded"> 
        Transform White
      </button>
      </div>

      {createElements(jstate)}   
    </>
  );
}

export async function getStaticProps() {
  //const res = await fetch('https://cofocus-dev-v1.vercel.app/api/content');
  //const json = await res.json();
  


  return {
    props: { json
      
    }
  };
}

export default Home;
