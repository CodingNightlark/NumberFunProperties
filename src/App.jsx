import { useState } from 'react'
import {isPrime, isHappy, isTaxicab, isPerfect} from './Math'
import './App.css'

function App() {

    const [numberToCheck, setNumberToCheck] = useState(0)
    const [isPrimeNumber, setIsPrimeNumber] = useState(false)
    const [isHappyNumber, setIsHappyNumber] = useState(false)
    const [isTaxicabNumber, setIsTaxicabNumber] = useState(false)
    const [isPerfectNumber, setIsPerfectNumber] = useState(false)

    function checkNumberProperties() {
        const number = parseInt(numberToCheck, 10)
        setIsPrimeNumber(isPrime(number))
        setIsHappyNumber(isHappy(number))
        setIsTaxicabNumber(false) // Placeholder for future implementation
        setIsPerfectNumber(isPerfect(number)) 
    }
    

  return (
    <>
    <div> <h1>Number Fun Properties</h1>
         </div>
    <div className = "input">
        <label>
            
            <button onClick = {() => { 
                checkNumberProperties()
            }}>What type of number is this? </button>
            <input type="number" value={numberToCheck} onChange={(e) => setNumberToCheck(e.target.value)} />
        </label>
        
    </div>
    <div className = "output">
        <h2>Results:</h2>
        <p>{numberToCheck} is {isPrimeNumber ? '' : 'not '}a prime number.</p>
        <p>{numberToCheck} is {isHappyNumber ? '' : 'not '}a happy number.</p>
        <p>{numberToCheck} is {isPerfectNumber ? '' : 'not '} a perfect number. </p>
    </div>
    </>
  )
}


export default App
