import { Component } from 'react';
import { StartPage, OperationPage, TicketsPage, PassesPage, SinglePage, ConfirmSinglePage } from '.';

export default class Main extends Component {

    /**
     * Possible states:
     * 
     * start - StartPage
     * operation - OperationPage
     * tickets - TicketsPage
     * passes - PassesPage
     * helpRechargeableOrPass - HelpRechargeableOrPassPage
     * single - SinglePage
     * rechargeable - RechargeablePage
     * fullDay - FullDayPage
     * recharge - RechargePage
     * monthlyNormal - MonthlyNormalPage
     * monthlyStudent - MonthlyStudentPage
     * renew - RenewPage
     * confirmSingle - ConfirmSinglePage
     */
    state = {
        page: 'start',
        data: null
    }

    goto = (page, data=null) => e => {
        this.setState({ 
            page: page,
            data: data
         })
    }

    render() {
        const { page, data } = this.state;

        console.log("Current Page: " + this.state.page); /* Debugging */

        switch (page) {
            case 'start':
                return <StartPage goto={this.goto} />;
            case 'operation':
                return <OperationPage goto={this.goto} />;
            case 'tickets':
                return <TicketsPage goto={this.goto} />;
            case 'passes':
                return <PassesPage goto={this.goto} />;
            case 'helpRechargeableOrPass':
                break;
            /**
             * Tickets
             */
            case 'single':
                return <SinglePage goto={this.goto} />;
            case 'rechargeable':
                break;
            case 'fullDay':
                break;
            case 'recharge':
                break;
            /**
             * Passes
             */
            case 'monthlyNormal':
                break;
            case 'monthlyStudent':
                break;
            case 'renew':
                break;
            /**
             * Confirm
             */
            case 'confirmSingle':
                return <ConfirmSinglePage goto={this.goto} data={data} />
            default:
            // do nothing
        }
    }
}
