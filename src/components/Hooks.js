import React, { useState } from 'react'
// export const useToggle = initial => {
//     const [state, setState] = useState(initial)
//     return [
//         state,
//         () => {
//             setState(state => !state)
//         }
//     ]
// }
export const useToggle = () => {
    const [state, setstate] = useState(false);
    const handleClick = () => {
        setstate(!state)
    }
    return {
        state,
        handleClick
    }
}
