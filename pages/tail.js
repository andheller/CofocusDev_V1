import React, { useState, useEffect, createElement } from 'react';


const json = {
  "tag": "div",
  "className": "bg-white max-w-full mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8",
  "style": { "background": "bg-red-100" },
  "children": [{
    "tag": "div",
    "className": "bg-indigo-200 max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8",
    "style": { "background": "bg-red-100" },
    "children": [
      {
        "tag": "h2",
        "className": "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
        "style": { "background": "bg-red-100" },
        "children": [
          {
            "tag": "span",
            "className": "block",
            "style": { "background": "bg-red-100" },
            "children": ["Ready to dive in?"]
          },
          {
            "tag": "span",
            "className": "block",
            "style": { "background": "bg-red-100" },
            "children": ["Start your free trial today."]
          }
        ]
      },
      {
        "tag": "div",
        "className": "mt-8 flex justify-center",
        "style": { "background": "bg-red-100" },
        "children": [
          {
            "tag": "div",
            "className": "inline-flex rounded-md shadow",
            "style": { "background": "bg-red-100" },
            "children": [
              {
                "tag": "a",
                "className": "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",
                "style": { "background": "bg-red-100" },
                "children": ["Get started"]
              }
            ]
          },
          {
            "tag": "div",
            "className": "ml-5 inline-flex",
            "style": { "background": "bg-red-100" },
            "children": [
              {
                "tag": "a",
                "className": "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200",
                "style": { "background": "bg-red-100" },
                "children": ["Learn More"]
              }
            ]
          }
        ]
      }
    ]
  },

  {
    "tag": "div",
    "className": "bg-white min-w-full",
    "style": { "background": "bg-red-100" },
    "children": [{
      "tag": "div",
      "className": "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8",
      "style": { "background": "bg-red-100" },
      "children": [
        {
          "tag": "div",
          "className": "",
          "style": { "background": "bg-red-100" },
          "children": [
            {
              "tag": "h2",
              "className": "text-base font-semibold text-indigo-600 uppercase tracking-wide",
              "style": { "background": "bg-red-100" },
              "children": [
                "Everything you need"
              ]
            },
            {
              "tag": "p",
              "className": "mt-2 text-3xl font-extrabold text-gray-900",
              "style": { "background": "bg-red-100" },
              "children": [
                "All-in-one platform"
              ]
            },
            {
              "tag": "p",
              "className": "mt-4 text-lg text-gray-500",
              "style": { "background": "bg-red-100" },
              "children": [
                "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
              ]
            }]
        }, {
          "tag": "div",
          "className": "mt-12 lg:mt-0 lg:col-span-2",
          "style": { "background": "bg-red-100" },
          "children": [
            {
              "tag": "dl",
              "className": "space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8",
              "style": { "background": "bg-red-100" },
              "children": [
                {
                  "tag": "div",
                  "className": "relative",
                  "style": { "background": "bg-red-100" },
                  "children": [
                    {
                      "tag": "dt",
                      "className": "",
                      "style": { "background": "bg-red-100" },
                      "children": [

                        {
                          "tag": "p",
                          "className": "ml-9 text-lg leading-6 font-medium text-gray-900",
                          "style": { "background": "bg-red-100" },
                          "children": ["Feature 1"]
                        }]
                    }, {
                      "tag": "dd",
                      "className": "mt-2 ml-9 text-base text-gray-500",
                      "style": { "background": "bg-red-100" },
                      "children": ["Feature 1 Description! Lorem Ipsum is simply dummy text of the printing and typesetting industry."]
                    }
                  ]
                },

                {
                  "tag": "div",
                  "className": "relative",
                  "style": { "background": "bg-red-100" },
                  "children": [
                    {
                      "tag": "dt",
                      "className": "",
                      "style": { "background": "bg-red-100" },
                      "children": [

                        {
                          "tag": "p",
                          "className": "ml-9 text-lg leading-6 font-medium text-gray-900",
                          "style": { "background": "bg-red-100" },
                          "children": ["Feature 2"]
                        }]
                    }, {
                      "tag": "dd",
                      "className": "mt-2 ml-9 text-base text-gray-500",
                      "style": { "background": "bg-red-100" },
                      "children": ["Feature 2 Description! Lorem Ipsum is simply dummy text of the printing and typesetting industry."]
                    }
                  ]
                },

                {
                  "tag": "div",
                  "className": "relative",
                  "style": { "background": "bg-red-100" },
                  "children": [
                    {
                      "tag": "dt",
                      "className": "",
                      "style": { "background": "bg-red-100" },
                      "children": [

                        {
                          "tag": "p",
                          "className": "ml-9 text-lg leading-6 font-medium text-gray-900",
                          "style": { "background": "bg-red-100" },
                          "children": ["Feature 3"]
                        }]
                    }, {
                      "tag": "dd",
                      "className": "mt-2 ml-9 text-base text-gray-500",
                      "style": { "background": "bg-red-100" },
                      "children": ["Feature 3 Description! Lorem Ipsum is simply dummy text of the printing and typesetting industry."]
                    }
                  ]
                },

                {
                  "tag": "div",
                  "className": "relative",
                  "style": { "background": "bg-red-100" },
                  "children": [
                    {
                      "tag": "dt",
                      "className": "",
                      "style": { "background": "bg-red-100" },
                      "children": [

                        {
                          "tag": "p",
                          "className": "ml-9 text-lg leading-6 font-medium text-gray-900",
                          "style": { "background": "bg-red-100" },
                          "children": ["Feature 4"]
                        }]
                    }, {
                      "tag": "dd",
                      "className": "mt-2 ml-9 text-base text-gray-500",
                      "style": { "background": "bg-red-100" },
                      "children": ["Feature 4 Description! Lorem Ipsum is simply dummy text of the printing and typesetting industry."]
                    }
                  ]
                },

                {
                  "tag": "div",
                  "className": "relative",
                  "style": { "background": "bg-red-100" },
                  "children": [
                    {
                      "tag": "dt",
                      "className": "",
                      "style": { "background": "bg-red-100" },
                      "children": [

                        {
                          "tag": "p",
                          "className": "ml-9 text-lg leading-6 font-medium text-gray-900",
                          "style": { "background": "bg-red-100" },
                          "children": ["Feature 5"]
                        }]
                    }, {
                      "tag": "dd",
                      "className": "mt-2 ml-9 text-base text-gray-500",
                      "style": { "background": "bg-red-100" },
                      "children": ["Feature 5 Description! Lorem Ipsum is simply dummy text of the printing and typesetting industry."]
                    }
                  ]
                },

                {
                  "tag": "div",
                  "className": "relative",
                  "style": { "background": "bg-red-100" },
                  "children": [
                    {
                      "tag": "dt",
                      "className": "",
                      "style": { "background": "bg-red-100" },
                      "children": [

                        {
                          "tag": "p",
                          "className": "ml-9 text-lg leading-6 font-medium text-gray-900",
                          "style": { "background": "bg-red-100" },
                          "children": ["Feature 6"]
                        }]
                    }, {
                      "tag": "dd",
                      "className": "mt-2 ml-9 text-base text-gray-500",
                      "style": { "background": "bg-red-100" },
                      "children": ["Feature 6 Description! Lorem Ipsum is simply dummy text of the printing and typesetting industry."]
                    }
                  ]
                }
              ]
            }
          ]
        }

      ]
    }

    ]
  }]
}



const tagOptions = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6", "b", "u", "i", "a", "dl", "dt", "dd"];



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

  function transformBlue() {
    setJstate(prevState => {
      return { ...prevState, className: "min-w-full bg-blue-300 max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8" }
    })
  }

  function transformGradient() {
    setJstate(prevState => {
      return { ...prevState, className: "min-w-full bg-gradient-to-r from-green-300 to-blue-300 max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8" }
    })
  }

  function transformGreen() {
    setJstate(prevState => {
      return { ...prevState, className: "min-w-full bg-green-200 max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8" }
    })
  }

  function transformWhite() {
    setJstate(prevState => {
      return { ...prevState, className: "min-w-full bg-white max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 rounded-md mt-8" }
    })
  }

  function addHeader() {
    setJstate(prevState => {
      return {
        ...prevState, children: [...prevState.children.concat({
          "tag": "span",
          "className": "block text-4xl p3 max-w-6 p-4 text-center",
          "style": { "background": "bg-red-100" },
          "children": ["Hello World"]
        })]
      }
    })
  }

  function addCTA() {
    setJstate(prevState => {
      return {
        ...prevState, children: [...prevState.children.concat({
          "tag": "span",
          "className": "block text-4xl p-4 text-center",
          "style": { "background": "bg-red-100" },
          "children": ["It's Working"]
        })]
      }
    })
  }

  function toggleTransform() {
    document.getElementById('transform').classList.toggle("hidden")
    document.getElementById('transformToggle').classList.toggle("hidden")
  }
  function hideTransform() {
    document.getElementById('transform').classList.toggle("hidden")
    document.getElementById('transformToggle').classList.toggle("hidden")
  }
  function mapChildren(arr) {
    return arr.children.map((child) => child.hasOwnProperty("children") ? '<' + child.tag.toString() + ' className="' + child.className.toString() + '">' + mapChildren(child) + '</' + child.tag.toString() + '>' : child);
  }
  function copyJSX() {
    let JSX = '<' + jstate.tag.toString() + ' className="' + jstate.className.toString() + '">' + mapChildren(jstate) + '</' + jstate.tag.toString() + '>'
    navigator.clipboard.writeText('hello world eventually JSX will go here!')
    console.log(JSX)
  }

  useEffect(() => {
    document.addEventListener('keydown', logKey);

    function logKey(e) {
      if (e.altKey == true && e.key == '.') { toggleTransform() }
      if (e.key == 'Escape') { hideTransform() }
      if (e.altKey == true && e.key == 'c') { copyJSX() }
    }
  });
  return (
    <>
      <div className="border-3 drop-shadow-sm border gray-900 justify-between flex bg-white/50 z-10 backdrop-blur-lg fixed w-2xl top-2 right-2 overflow-scroll max-h-screen">
        <a onClick={toggleTransform} id="transformToggle" className="text-center p-3 hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg></a>
        <div id="transform" className="hidden grid gap-4 p-8">
          <a onClick={toggleTransform} className="absolute top-4 right-4 hover:text-gray-900 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg></a>
          <h2 className="text-center col-span-2 text-gray-900 font-black text-3xl">Transforms</h2>
          <h4 className="text-center col-span-2 text-gray-900 font-black text-xl">Background</h4>
          <button onClick={transformBlue} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500">
            Transform Blue
        </button>
          <button onClick={transformGradient} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-blue-700 hover:from-green-500 hover:to-blue-500">
            Transform Gradient
        </button>

          <button onClick={transformGreen} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-600">
            Transform Green
        </button>

          <button onClick={transformWhite} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 border-2 border-gray-800">
            Transform White
        </button>

          <h4 className="mt-8 text-center col-span-2 text-gray-900 font-black text-xl">Add Blocks</h4>
          <button onClick={addHeader} className="col-span-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 border-2 border-gray-800">
            Add Hello World
          </button>

          <button onClick={addCTA} className="col-span-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 border-2 border-gray-800">
            Add It's Working 🏆
          </button>
        </div>
      </div>
      <div contentEditable className="focus:outline-none min-w-full">
        {createElements(jstate)}
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
