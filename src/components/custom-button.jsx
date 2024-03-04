import './custom-button.css'

function CustomBtn(props){
    return(
    <div id="btn">
        <button>{props.title}</button>
    </div>
    );
}

export default CustomBtn;