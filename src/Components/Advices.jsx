import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Advices = () => {
    const [ advice, setAdvice ] = useState('');

    useEffect(() => {
        getAdvices();
    }, [])

    const getAdvices = async () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
            console.log("here");
            setAdvice(res.data.slip.advice);
        })
    }
  return (
    <div>
        <h1>{advice}</h1>
        <button onClick={getAdvices}>Give me advice</button>
    </div>
  )
}

export default Advices