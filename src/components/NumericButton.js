import Button from '@mui/material/Button';

/**
 * props.next - Função que vai para a página seguinte
 * props.text - Texto interior do botão
 */
export default function NumericButton(props) {

    return (
        <Button
            style={{
                height: '8vh',
                width: '15vh',
                fontSize: '1.5vh', 
                border: "solid"
            }}
            variant='text'
            color='inherit'
            onClick={() => {
                ;
            }}
        >
            {props.text}
        </Button>
    );
}