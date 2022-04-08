import React, { useState } from 'react'

import { TextField, Button } from '@mui/material'

interface FormProps {
    addData: (name: string) => void
}

const Form = ({ addData }: FormProps) => {
    const [name, setName] = useState<string>('')

    const buttonOnClick = () => {
        addData(name)
        setName('')
    }

    return (
        <div className='App-form'>
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter a name'
                variant='filled'
            />
            <Button variant='contained' onClick={buttonOnClick}>
                Add
            </Button>
        </div>
    )
}

export default Form
