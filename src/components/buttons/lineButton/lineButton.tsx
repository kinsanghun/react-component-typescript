import './lineButton.css';

function LineButton(props:{text:string}) {
    return (
    <div className='line-button'>{props.text}</div>
    )
}

export default LineButton;