import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Close } from '@mui/icons-material';

/**
 * props.action - Função que vai excutar a ação pretendida
 */
export default function CloseButton(props) {
    const theme = useTheme();

    return (
        <Button
            style={{
                height: '5vh',
                width: '5vh',
                fontSize: '4.5vh',
                backgroundColor: theme.palette.warning.main
            }}
            variant='contained'
            onClick={() => {
                props.action();
            }}
        >
            <Close />
        </Button>
    );
}