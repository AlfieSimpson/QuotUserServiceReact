import Button from '@material-ui/core/Button'

function DisablableButton(props){

    const {disabled, variant, color, text, clickMethod} = props

    if (disabled) {
        return (
            <Button variant={variant} color={color} onClick={clickMethod}>{text}</Button>
        );
    }
    else {
        return (
            <Button variant={variant} color={color} onClick={clickMethod} disabled>{text}</Button>
        );
    }
}

export default DisablableButton;