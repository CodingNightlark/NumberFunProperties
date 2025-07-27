import { useState } from 'react'
import {isPrime, isHappy, isTaxicab, isPerfect, isAbundant, isSemiPerfect, isWeird, isTriangular} from './Math.jsx'
import './App.css'

function App() {

    const [numberToCheck, setNumberToCheck] = useState(0)
    const [isPrimeNumber, setIsPrimeNumber] = useState(false)
    const [isHappyNumber, setIsHappyNumber] = useState(false)
    const [isTaxicabNumber, setIsTaxicabNumber] = useState(false)
    const [isPerfectNumber, setIsPerfectNumber] = useState(false)
    const [isAbundantNumber, setIsAbundantNumber] = useState(false)
    const [isSemiPerfectNumber, setIsSemiPerfectNumber] = useState(false)
    const [isWeirdNumber, setIsWeirdNumber] = useState(false)   
    const [isTriangularNumber, setIsTriangularNumber] = useState(false)

    function checkNumberProperties() {
        const number = parseInt(numberToCheck, 10)
        setIsPrimeNumber(isPrime(number))
        setIsHappyNumber(isHappy(number))
        setIsTaxicabNumber(false) // Placeholder for future implementation
        setIsPerfectNumber(isPerfect(number)) 
        setIsWeirdNumber(isWeird(number))
        setIsAbundantNumber(isAbundant(number))
        setIsSemiPerfectNumber(isSemiPerfect(number))
        setIsTriangularNumber(isTriangular(number))
    }


  return (
    <>
    <head>
        <title>Number Fun </title>
        <link rel="stylesheet" href="./App.css" />
    </head>
    <div> <h1>Number Fun</h1>
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
        <p>{numberToCheck} is {isSemiPerfectNumber ? '' : 'not' } a semi-perfect number. </p>
        <p>{numberToCheck} is {isTriangularNumber ? '' : 'not' } a triangular number.</p>
        <p>{numberToCheck} is {isAbundantNumber ? '' : 'not' } an abundant number.</p>
        <p>{numberToCheck} is {isWeirdNumber ? '' : 'not' } a weird number.</p>
    </div>
    </>
  )
} 


export default App
