import React from 'react'

const App = () => {
  let myArr = [
    {
      id:"relativeListItem1",
      name:"Hello"
    },
    {
      id:"relativeListItem2",
      name:"World"
    },
     {
      id:"relativeListItem3",
      name:"Rohan"
    },
    {
      id:"relativeListItem4",
      name:"Soham"
    }
  ]
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
               {
                myArr.map((e)=>(
                  <li key={e.id}>{e.name}</li>  
                ))
              }
              </ol>
    </div>
  )
}

export default App
