import { Button } from '@mui/material';
import { ArrowLeft } from '@mui/icons-material';

/**
 * props.back       - Função que vai para a página anterior
 * props.text       - Texto interior do botão
 */
export default function BackButton(props) {
    return (
        <Button
            style={{
                height: '5vh',
                width: '10vh',
                fontSize: '1.5vh',
                justifyContent: 'flex-start'
            }}
            variant='contained'
            color='warning'
            startIcon={<ArrowLeft
                style={{
                    marginLeft: '-1vh',
                    marginRight: '-2vh',
                    fontSize: '4vh'
                }}
            />}
            onClick={() => {
                props.back();
            }}
        >
            {props.text}
        </Button>
    );
}