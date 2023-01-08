/*
 * @Author: Meghana R

*Parcel is the one who is refreshing the page automatically as soon as the file is saved
*Parcel makes use of - 
*HMR - Hot module reload
*file watcher algorithm - its wriiten in c++
*BUILD
*MINIFY
*Cleaning our code
*Dev and Production build
*Super fast build algorithm
*caching while development 
*compression 
*compatible with older version of web browsers
* on dev machine
*consistent hashing algorithm
*port number 
*zero config
*transitive dependency

you can see that .parcel-cache has been created , this has been created by parcel for the running of jobs like minification,hmr,file watcher
job and all
we can see the dist folder , which minifies the file 
npx parcel index.html : parcel creates the developement build and host on server
npx parcel build index.html : build command is to do the production build , this build will minify and push this build 
in dist folder 

*/
import React from "react";
import ReactDOM  from "react-dom/client";

const heading=React.createElement(
    "h1",
    {
        id:"title",
    },
    "Heading 1"
);

const heading2=React.createElement(
    "h2",
    {
        id:"title",
    },
    "Heading 2"
);

const container=React.createElement(
    "div",
    {
        id:"container",
        hello:"world"
    },
    [heading, heading2]

);
 console.log(heading);

 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(container);