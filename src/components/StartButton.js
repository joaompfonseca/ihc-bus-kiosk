import { Button } from '@mui/material';
import CountryFlag from 'react-country-flag';
import { useTranslation } from "react-i18next";

/**
 * props.flag - Código da bandeira do país ('GB', 'PT', 'FR', 'ES')
 * props.lng  - Linguagem escolhida ('en', 'pt', 'fr', 'es')
 * props.text - Texto do botão
 * props.next - Página seguinte
 */
export default function StartButton(props) {
    const { t, i18n } = useTranslation('common');

    return (
        <Button
            style={{
                height: '5vh',
                width: '20vh',
                justifyContent: 'flex-start',
                fontSize: '1.5vh'
            }}
            size='large'
            variant='contained'
            color='primary'
            startIcon={<CountryFlag
                style={{
                    marginRight: '1vh',
                    fontSize: '4vh'
                }}
                countryCode={props.flag}
                svg
            />}
            onClick={() => {
                i18n.changeLanguage(props.lng);
                props.next();
            }}
        >
            {props.text}
        </Button>
    );
}