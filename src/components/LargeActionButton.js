import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";

/**
 * props.text - Texto do botão
 * props.next - Página seguinte
 */
export default function LargeActionButton(props) {
    const { t, i18n } = useTranslation('common');

    return (
        <Button
            style={{
                height: '10vh',
                width: '15vh',
                fontSize: '1.5vh'
            }}
            size='large'
            variant='contained'
            color='primary'
            onClick={() => {
                props.next(); /* Dá para simplificar? */
            }}
        >
            {props.text}
        </Button>
    );
}