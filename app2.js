
/*

 <div id="parent">
    <div id="children">

     <h1>i am h1 tag</h1>

    </div>
</div>

*/

//this is the way to create nested html structure using react 
 
const parent= React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"children"},
        [React.createElement("h1",{},"i am a h1 tag"),React.createElement("p",{},"i am a para tag")]
    )
);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);