import React from 'react'

const List = () => {
    const fruits= [ {id:1, name:"apple", calories:80},
        {id:2,  name: "orange", calories:90},
        {id:3, name: "coconut", calories:399},
        {id:4,name: "Aanar", calories:220 },
        {id:6,name: "Ant", calories:20 },
        {id:7,name: "Alu", calories:190 },
        {id:8,name: "Cauliflower", calories:120 },
        {id:9,name: "Banana", calories:223 },
        {id:10,name: "Aanda", calories:600 },
        {id:11,name: "Rajma", calories:290 },
        {id:12,name: "Chawal", calories:100 },
        {id:13,name: "AnadiChamal", calories:110 },
        {id:14,name: "Cookies", calories:250 },
        {id:15,name: "Rice", calories:290 },



      ];

        // fruits.sort ((a,b) => b.name.localeCompare(a.name))
        // fruits.sort ((a,b )=> b.calories - a.calories)

        const lowCalFruits = fruits.filter(fruit => fruit.name.startsWith("A"))
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