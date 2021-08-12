import React, { useState } from 'react'
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
