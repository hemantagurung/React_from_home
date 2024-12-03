import React from 'react'


// const Button = () => {
//     // const handleClick = () => alert("clicked")
//     const handleClick2 = (name) => alert(`${name} stop clicking me`)

//   return (
//     <div>
//         <button onClick={() =>handleClick2("hemanta") }>Click me</button>
//     </div>
//   )
// }

// export default Button


const Button = () => {
    const handleClick = (e) => {
        // e.target.textContent = "Ouch"
        e.target.style.display= "none"
    }
  return (
    <div>
         <button onClick={(e) =>handleClick(e) }>Click me</button>

    </div>
  )
}

export default Button




// const Button = () => {
//   const handleClick = () => {
//     // Redirect to another page
//     window.location.href = "https://www.facebook.com/";
//   };

//   return (
//     <div >
//       <button  onClick={handleClick} >Click me</button>
//     </div>
//   );
// };

// export default Button;
