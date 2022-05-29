import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowRight } from '@mui/icons-material';

/**
 * props.action - Função que vai excutar a ação pretendida
 * props.text - Texto interior do botão
 */
export default function ContinueButton(props) {
    const theme = useTheme();
    const { action, text } = props;

    return (
        <Button
            style={{
                height: '5vh',
                fontSize: '1.5vh',
                justifyContent: 'flex-start',
                backgroundColor: theme.palette.success.main
            }}
            variant='contained'
            endIcon={<ArrowRight
                style={{
                    marginLeft: '-1vh',
                    marginRight: '-2vh',
                    fontSize: '4vh'
                }}
            />}
            onClick={() => {
                action();
            }}
        >
            {text}
        </Button>
    );
}