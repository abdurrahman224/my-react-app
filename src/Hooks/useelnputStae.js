// import { useState } from "react"

import { useState } from "react"

// ;

// const useInputState = (defauleValue =" ") =>{

// const [value, setValue]= useState(defauleValue);

// const onChange = e =>{


// setValue(e.target.value)

// }


// // const handleChang = e =>{

// // setValue(e.target.value)

// // }
// // return [name , handleChang]
// return { value, onChange };
// }

// export default useInputState;


// import { useState } from "react";

// const useInputState = (defaultValue = "") => {
//   const [value, setValue] = useState(defaultValue);

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   return { value, onChange };
// };

// export default useInputState;




const useInputState  = (defaultValue = null) =>{

const [value , setValue] = useState(defaultValue)


const  onChange = e =>{

setValue(e.target.value)


}
return{ value,onChange }


}
export default useInputState  ;



