import { Grid, Box } from "@mui/material";
import CountryFlag from 'react-country-flag'
import StartButton from "../components/StartButton";
import logo from '../assets/images/StartPage/logo.png';
import main from '../assets/images/StartPage/main.jpg'
import '../assets/styles/StartPage.css';

export default function StartPage() {
	return (
		<Grid container>
			<Grid container xs={8} alignItems='center' height='10vh'>
				<h>
					<b>Bus Ticket Vending Machine</b>
				</h>
			</Grid>
			<Grid container className='logo' xs={4} alignItems='center' height='10vh'>
				<img src={logo} />
			</Grid>
			<Grid container className='main' xs={12} alignItems='center' height='40vh'>
				<img src={main} />
			</Grid>
			<Grid item className='welcome' xs={12} align='left'>
				<p><CountryFlag countryCode='GB' svg /> <b>Welcome</b>, choose a language to start</p>
				<p><CountryFlag countryCode='PT' svg /> <b>Bem-vindo</b>, escolha uma linguagem para começar</p>
				<p><CountryFlag countryCode='FR' svg /> <b>Bienvenue</b>, choisissez une langage pour commencer</p>
				<p><CountryFlag countryCode='ES' svg /> <b>Bienvenido</b>, elige un lenguaje para empezar</p>
				<br />
				<hr />
			</Grid>
			<Grid item xs={6} align='center'>
				<StartButton flag='GB' text='Start' />
			</Grid>
			<Grid item xs={6} align='center'>
				<StartButton flag='PT' text='Começar' />
			</Grid>
			<Grid item xs={6} align='center'>
				<StartButton flag='FR' text='Commencer' />
			</Grid>
			<Grid item xs={6} align='center'>
				<StartButton flag='ES' text='Empezar' />
			</Grid>
		</Grid>
	);
}