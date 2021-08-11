import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

function Home() {
    const [state, setstate] = useState(false);
    const handleClick = () => {
        setstate(!state)
    }
    return (
        <>
            {!state ?
                (<>
                    <h1 title='checkText'>hellow!!!</h1>
                    <Button
                        title='checkBtn'
                        variant="outlined"
                        color="primary"
                        onClick={handleClick}
                    >
                        click
                    </Button>
                </>)
                :
                (
                    <Typography variant="h1" color="initial">
                        Bienvenu
                    </Typography>)
            }
        </>
    )
}

export default Home
