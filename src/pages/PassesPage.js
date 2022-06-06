import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { withTranslation } from "react-i18next";
import { BackButton, LargeButton, Progress } from "../components";

class PassesPage extends Component {
	render = () => {
		const { goto, t } = this.props;

		return (
			<>
				<Grid container alignItems='center'>
					<Grid item xs={12}>
						<Progress
							bigSteps={[]}
							smallSteps={[
								<Typography fontWeight='bold'>{t('progress.smallStep.operation')}</Typography>,
								<Typography fontWeight='bold' color='success.main'>{t('progress.smallStep.type')}</Typography>
							]}
						/>
					</Grid>
					<Grid item xs={12} align='center'>
						<Typography variant='h1' fontWeight='bold'>{t('passes.prompt.buy')}</Typography>
						<hr />
					</Grid>
					<Grid item xs={4} align='left'>
						<LargeButton text={t('passes.button.monthly')} action={() => { goto('monthly'); }} disabled />
					</Grid>
					<Grid item xs={8}>
						<Typography>{t('passes.description.monthly')}</Typography>
					</Grid>
					<Grid item xs={12} align='center'>
						<Typography variant='h1' fontWeight='bold'>{t('passes.prompt.renew')}</Typography>
						<hr />
					</Grid>
					<Grid item xs={4} align='left'>
						<LargeButton text={t('passes.button.renew')} action={() => { goto('renew'); }} />
					</Grid>
					<Grid item xs={8}>
						<Typography>{t('passes.description.renew')}</Typography>
					</Grid>
				</Grid>
				<Grid container position='absolute' bottom='1vh' width='54.25vh'>
					<Grid item xs={12} align='left'>
						<BackButton text={t('button.back')} action={() => { goto('operation'); }} />
					</Grid>
				</Grid>
			</>
		);
	}
}

export default withTranslation('common')(PassesPage);