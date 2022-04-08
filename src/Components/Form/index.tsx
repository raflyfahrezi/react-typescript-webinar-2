import React, { useState, ChangeEvent, FormEvent } from 'react'

import { TextField, Button } from '@mui/material'

interface FormProps {
    addData: (name: string) => void
}

const Form = ({ addData }: FormProps) => {
    const [name, setName] = useState<string>('')

    const formOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        addData(name)
        setName('')
    }

    const textFieldOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setName(value)
    }

    return (
        <form onSubmit={formOnSubmit} className='App-form'>
            <TextField
                value={name}
                onChange={textFieldOnChange}
                placeholder='Enter a name'
                variant='filled'
            />
            <Button type='submit' variant='contained'>
                Add
            </Button>
        </form>
    )
}

export default Form
