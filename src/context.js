// import React, { createContext, useContext, useState } from "react"
// import { products } from "./data"

// // create toggle context
// const ToggleContext = createContext()

// // create context provider
// export const ToggleProvider = ({ children }) => {
//     const [data, setData] = useState([])
//     // the value passed in here will be accessible anywhere in our application 
//     // you can pass any value, in our case we pass our state and it's update method 
//     return (
//         <ToggleContext.Provider value={{data, setData}}>
//             {children}
//         </ToggleContext.Provider>
//     )
// }

// // useToggleContext will be used to use and update state accross the app
// // we can access to data and setData using this method 
// // anywhere in any component that's inside ToggleProvider
// export const useToggleContext = useContext(ToggleContext)