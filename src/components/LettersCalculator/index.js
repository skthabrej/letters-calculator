import './index.css'
import {Component} from 'react'


class LettersCalculator extends Component {    
    state = {count: ''}
    onLettersCount = event => {
        const {value} = event.target
        this.setState(prevState => ({count: value}))
    }

    render() {
        const {count} = this.state
        return(
            <div className='bg-container'>
                <div className='card-container'>
                    <div className='text-card'>
                        <h1 className='heading'>Calculate the<br/>Letters you<br/>Enter</h1>
                        <p className='paragraph'>Enter the phrase</p>
                        <input className="input-style" type="search" placeholder="Enter the phrase" onChange={this.onLettersCount}/>
                        <p className="paragraph-2">No.of letters: {count.length}</p>
                    </div>
                    <div className='img-container'>
                        <img src='https://i.ibb.co/NWjWxtv/interest-loan-calculator.png' alt="calculate" className='img'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default LettersCalculator
