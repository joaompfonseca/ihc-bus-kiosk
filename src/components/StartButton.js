import Button from '@mui/material/Button'
import CountryFlag from 'react-country-flag'

export default function StartButton(props) {
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
        >
            {props.text}
        </Button>
    );
}