import React, { useState } from 'react'

import { Form, Header } from '../Components'

import './index.css'

const App = () => {
    const [data, setData] = useState<string[]>([])

    const addData = (name: string) => {
        setData([...data, name])
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <Header name='Contact' />
                <Form addData={addData} />
                <div>
                    {data.length > 0 ? (
                        <div>
                            {data.map((item) => (
                                <p>{item}</p>
                            ))}
                        </div>
                    ) : (
                        <p>No Data</p>
                    )}
                </div>
            </header>
        </div>
    )
}

export default App
