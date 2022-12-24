// import React, { Fragment, useRef, useState } from "react";

// const Input = ({ data, isSuccess }) => {
//   const [coin, setCoinList] = useState("bitcoin");
//   const [value, setValue] = useState("");
//   const inputValue = useRef().current;

//   return (
//     <Fragment>
//       <div className=' flex justify-between'>
//         <div>
//           <input
//             type='text'
//             placeholder='amount'
//             onChange={() => {
//               setValue(inputValue.current.value);
//             }}
//             ref={inputValue}
//             className='bg-red-800 border-none outline-none '
//           />
//         </div>
//         <div className=' flex'>
//           <img src='' alt='' />
//           <select
//             className='bg-red-900'
//             onChange={(e) => setCoinList(e.target.value)}>
//             {isSuccess && (
//               <Fragment>
//                 {data.map((coin) => (
//                   <option className='text-white' value={coin.id}>
//                     {coin.symbol}
//                   </option>
//                 ))}
//               </Fragment>
//             )}
//           </select>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Input;
