import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

function Home({ handleClick }) {
    const [state, setstate] = useState(false);
    handleClick = () => {
        setstate(!state)
    }
    return (
        <>
            {!state ?
                (<>
                    <h1 title='checkText'>hellow!!!</h1>
                    <Button
                        data-testid='checkBtn'
                        variant="outlined"
                        color="primary"
                        onClick={handleClick}
                    >
                        click
                    </Button>
                </>)
                :
                (
                    <Typography variant="h1" color="initial" data-testid='checkTaxtRender'>
                        Bienvenu
                    </Typography>)
            }
        </>
    )
}

export default Home
