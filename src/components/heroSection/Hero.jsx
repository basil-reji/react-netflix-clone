import React from 'react'
import './Hero.scss'
import {faPlus, faPlay} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Hero() {
    let bg_img = 'https://i.pinimg.com/originals/3f/db/43/3fdb43bd2d3a4f05079e47dda42f6363.jpg'
    let name_logo = 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRYwssiYqFQk0AMTz6Sk2gJcynwEXm7Z63r-s6aIkwDimtUWoZefgzIsMjMumecjIZWEPE8uoixk_-Acjx57MGODKOw9AGpXTDdPwzwBjSTR2U4COxyFlrtRISIBmHYYtyuEUIvm__G6eMlm0HfP2gEJeq6LnU5O8cdpioXzGlMxJWq1c-qikw.png?r=768'
    return (
        <section id='heroSection'>
            <div className="bg" style={{ backgroundImage: `url(${bg_img})` }}>
            </div>
            <div className="content">
                <img id='name_logo' src={name_logo} alt="" />
                <div className="btns">
                    <button>
                        <FontAwesomeIcon className='FontAwesomeIcon' icon={faPlay} />
                        Play
                    </button>
                    <button>
                        <FontAwesomeIcon className='FontAwesomeIcon' icon={faPlus} />
                        My List
                    </button>
                </div>
                <div className="details">
                    <h4>Watch Part 5 Now</h4>
                    <p>
                        With millions euros and their lives on the line, nine
                        robbers attempt to pull off the greatest heist of all time
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero