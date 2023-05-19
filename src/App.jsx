import React, { Fragment } from 'react'
import FormSignUp from './components/FormSignUp/FormSignUp'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';

function App() {
    return (
        <Fragment>
            <Container maxWidth="xs" component="section">
                <Typography variant='h4' align='center'>
                    Formulario de registro
                </Typography>
                <FormSignUp />
            </Container>
        </Fragment>
    )
}

export default App