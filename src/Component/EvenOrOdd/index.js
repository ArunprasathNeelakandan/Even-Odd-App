import {Component} from 'react'
import './index.css'

class EvenOrOdd extends Component {
    state = {number : 0}

    createRandomNumber = () => {
        var number = Math.random()*100
            number = Math.ceil(number)
        return number
    }

    update = () => {
        const randomNumber=this.createRandomNumber()
        console.log(randomNumber)
        this.setState((perv)=>({number:perv.number+randomNumber}))
    }

    isOdd = (number) => {
        if (number % 2 === 0) {
            return 'Even'
        } else {
            return 'Odd'
        }

    }


    render() {
        const {number} = this.state
        const isOdd = this.isOdd(number)
        return(
            <div className='bg'>
                <h1 className='head'>Count {number}</h1>
                <p className='para'>Count is {isOdd}</p>
                <button className='btn' onClick={this.update}>increment</button>
                <p>Increase by Random number between 0 to 100</p>
            </div>
        )
    }
}

export default EvenOrOdd