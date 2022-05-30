import Button from '@mui/material/Button';

/**
 * props.next - Função que vai para a página seguinte
 * props.text - Texto interior do botão
 */
export default function LargeActionButton(props) {
    const { disabled = false } = props;

    return (
        <Button
            disabled={disabled}
            style={{
                height: '10vh',
                width: '15vh',
                fontSize: '1.5vh'
            }}
            variant='contained'
            color='primary'
            onClick={() => {
                props.next();
            }}
        >
            {props.text}
        </Button>
    );
}