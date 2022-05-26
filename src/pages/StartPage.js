import { Grid } from "@mui/material";
import CountryFlag from 'react-country-flag';
import { StartButton } from "../components";
import logo from '../assets/images/StartPage/logo.png';
import main from '../assets/images/StartPage/main.jpg';
import '../assets/styles/StartPage.css';

export default function StartPage(props) {
	return (
		<Grid container>
			<Grid item xs={8} height='10vh'>
				<h1>Bus Ticket Vending Machine</h1>
			</Grid>
			<Grid item className='logo' xs={4} height='10vh'>
				<img src={logo} />
			</Grid>
			<Grid item className='main' xs={12} height='40vh'>
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
			<Grid item xs={6} align='right' paddingRight='2vh'>
				<StartButton flag='GB' lng='en' text='Start' next={props.goto('operation')} />
			</Grid>
			<Grid item xs={6} align='left' paddingLeft='2vh'>
				<StartButton flag='PT' lng='pt' text='Começar' next={props.goto('operation')} />
			</Grid>
			<Grid item xs={6} align='right' paddingRight='2vh'>
				<StartButton flag='FR' lng='fr' text='Commencer' next={props.goto('operation')} />
			</Grid>
			<Grid item xs={6} align='left' paddingLeft='2vh'>
				<StartButton flag='ES' lng='es' text='Empezar' next={props.goto('operation')} />
			</Grid>
		</Grid>
	);
}