import './button.css';

function Button ({text, onClick}) {
    return(
        <button onClick={onClick} className='button is-primary is-large'>{text}</button>
    )
}

export default Button;