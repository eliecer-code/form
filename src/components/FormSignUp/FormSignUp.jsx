import React, { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp() {
    const [updateName, setUpdateName] = useState('');
    const [updateLastName, setUpdateLastName] = useState('');
    const [updateEmail, setUpdateEmail] = useState('');
    const [updateProm, setUpdateProm] = useState(true);
    const [updateNov, setUpdateNov] = useState(true);
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 'Debe tener al menos 3 caracteres',
        },
        lastName: {
            error: false,
            message: 'Debe tener al menos 3 caracteres',
        },
        email: {
            error: false,
            message: 'No se reconoce como un correo válido',
        },
    });

    function nameValidate(nombre) {
        if (nombre.length >= 3) {
            return {
                ...errors,
                name: {
                    error: false,
                    message: '',
                },
            };
        } else {
            return {
                ...errors,
                name: {
                    error: true,
                    message: 'Debe tener al menos 3 caracteres',
                },
            };
        }
    }

    function lastNameValidate(lastName) {
        if (lastName.length >= 3) {
            return {
                ...errors,
                lastName: {
                    error: false,
                    message: '',
                },
            };
        } else {
            return {
                ...errors,
                lastName: {
                    error: true,
                    message: 'Debe tener al menos 3 caracteres',
                },
            };
        }
    }

    function emailValidate(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            return {
                ...errors,
                email: {
                    error: false,
                    message: '',
                },
            };
        } else {
            return {
                ...errors,
                email: {
                    error: true,
                    message: 'No se reconoce como un correo válido',
                },
            };
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //Se valida que no hayan imputs vacios
        if (updateName.trim() === '' || updateLastName.trim() === '' || updateEmail.trim() === '') {
            return alert("Por favor, completa todos los campos");;
        }
        console.log({
            updateName,
            updateLastName,
            updateEmail,
            updateProm,
            updateNov,
        });
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={updateName}
                    onChange={(e) => setUpdateName(e.target.value)}
                    error={errors.name.error}
                    helperText={errors.name.error ? errors.name.message : ''}
                    onBlur={(e) => setErrors(nameValidate(e.target.value))}
                />
                <TextField
                    id="lastName"
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={updateLastName}
                    onChange={(e) => setUpdateLastName(e.target.value)}
                    error={errors.lastName.error}
                    helperText={errors.lastName.error ? errors.lastName.message : ''}
                    onBlur={(e) => setErrors(lastNameValidate(e.target.value))}
                />
                <TextField
                    id="email"
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={updateEmail}
                    onChange={(e) => setUpdateEmail(e.target.value)}
                    error={errors.email.error}
                    helperText={errors.email.error ? errors.email.message : ''}
                    onBlur={(e) => setErrors(emailValidate(e.target.value))}
                />
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={updateProm}
                                onChange={(e) => setUpdateProm(e.target.checked)}
                            />
                        }
                        label="Promociones"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={updateNov}
                                onChange={(e) => setUpdateNov(e.target.checked)}
                            />
                        }
                        label="Novedades"
                    />
                </FormGroup>
                <Button type="submit" variant="contained" size="large">
                    Registrarse
                </Button>
            </form>
        </Fragment>
    );
}

export default FormSignUp;
