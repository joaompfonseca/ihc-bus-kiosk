import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowRight } from '@mui/icons-material';

/**
 * props.back - Função que vai para a página anterior
 * props.text - Texto interior do botão
 */
export default function MethodButton(props) {
    const theme = useTheme();

    return (
        <Button
            style={{
                height: '15vh',
                width: '20vh',
                fontSize: '1.5vh',
                justifyContent: 'flex-start',
                backgroundColor: theme.palette.success.main
            }}
            variant='contained'
            onClick={() => {
                props.next();
            }}
        >
            {props.text}
        </Button>
    );
}