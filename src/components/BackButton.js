import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowLeft } from '@mui/icons-material';

/**
 * props.back - Função que vai para a página anterior
 * props.text - Texto interior do botão
 */
export default function BackButton(props) {
    const theme = useTheme();

    return (
        <Button
            style={{
                height: '5vh',
                fontSize: '1.5vh',
                justifyContent: 'flex-start',
                backgroundColor: theme.palette.warning.main
            }}
            variant='contained'
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