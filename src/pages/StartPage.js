import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import CountryFlag from 'react-country-flag';
import { StartButton } from "../components";
import imgLogo from '../assets/images/AppLogo/logo.png';
import imgBus from '../assets/images/StartImage/bus.png';

class StartPage extends Component {
	render = () => {
		const { goto } = this.props;

		return (
			<Grid container alignItems='center'>
				<Grid item xs={8}>
					<Typography variant='h1' fontWeight='bold'>Bus Ticket Vending Machine</Typography>
				</Grid>
				<Grid item xs={4}>
					<img src={imgLogo} alt='logo' width='100%' />
				</Grid>
				<Grid item xs={12}>
					<img src={imgBus} alt='bus' width='100%' />
				</Grid>
				<Grid item xs={12} align='left'>
					<Typography><CountryFlag style={{ marginRight: '1vh' }} countryCode='GB' svg /><b>Welcome</b>, choose a language to start</Typography>
					<Typography><CountryFlag style={{ marginRight: '1vh' }} countryCode='PT' svg /><b>Bem-vindo</b>, escolha uma linguagem para começar</Typography>
					<Typography><CountryFlag style={{ marginRight: '1vh' }} countryCode='FR' svg /><b>Bienvenue</b>, choisissez une langage pour commencer</Typography>
					<Typography><CountryFlag style={{ marginRight: '1vh' }} countryCode='ES' svg /><b>Bienvenido</b>, elige un lenguaje para empezar</Typography>
					<hr />
				</Grid>
				<Grid item xs={6} align='right' paddingRight='2vh'>
					<StartButton flag='GB' lng='en' text='Start' action={() => { goto('operation'); }} />
				</Grid>
				<Grid item xs={6} align='left' paddingLeft='2vh'>
					<StartButton flag='PT' lng='pt' text='Começar' action={() => { goto('operation'); }} />
				</Grid>
				<Grid item xs={6} align='right' paddingRight='2vh'>
					<StartButton flag='FR' lng='fr' text='Commencer' action={() => { goto('operation'); }} />
				</Grid>
				<Grid item xs={6} align='left' paddingLeft='2vh'>
					<StartButton flag='ES' lng='es' text='Empezar' action={() => { goto('operation'); }} />
				</Grid>
			</Grid>
		);
	}
}

export default StartPage;