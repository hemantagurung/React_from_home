import React from 'react'

const List = () => {
    const fruits= [ {id:1, name:"apple", calories:80},
        {id:2,  name: "orange", calories:90},
        {id:3, name: "coconut", calories:399},
        {id:4,name: "kiwi", calories:220 }];

        // fruits.sort ((a,b) => b.name.localeCompare(a.name))
        // fruits.sort ((a,b )=> b.calories - a.calories)

        const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
        const ListItems = lowCalFruits.map(lowCalfruit => 
            <li key={lowCalfruit.id}>{lowCalfruit.name}:&nbsp;{lowCalfruit.calories}</li>
        );
  return (
    <div>
        <ol>
    {ListItems}
    </ol>
    </div>
  )
}

export default List