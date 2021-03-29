import React, { useEffect,useState } from "react";
import ReactMarkdown from "react-markdown";
const markdownPath = require("./README.md");

// markdown = `Just a link: https://reactjs.com.`

const HomePage = (props) => {

  const [markdown, setMarkdown] = useState("");

  // useEffect(async () => {
  //   let response = await fetch("./README.md")
  //   console.log(response);
  //   let text = await response.text()
  //   console.log(text);
  //   await setMarkdown(text)
  //   // .then(response => {
  //   //   console.log(response);
  //   //   let text = response.text()
  //   //   console.log(text);
  //   //   setMarkdown(text)
  //   // })
  // }, []);

  return (
    <div class="bg-red-200 h-full w-full">
      {/* <ReactMarkdown children={markdown}></ReactMarkdown> */}
    </div>
    // <div class="grid grid-cols-3 gap-6">
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-2 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-2 bg-gray-700"></div>
    //   <div class="h-24 col-span-3 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-2 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-2 bg-gray-700"></div>
    //   <div class="h-24 col-span-3 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-2 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-1 bg-gray-700"></div>
    //   <div class="h-24 col-span-2 bg-gray-700"></div>
    //   <div class="h-24 col-span-3 bg-gray-700"></div>
    // </div>
  );
};

export default HomePage;
