import { Component } from 'react';
import {
    StartPage, OperationPage, TicketsPage, PassesPage, SinglePage, NifPage, PaymentMethodsPage, CashPage, CardPage,
    MBWayPage, ApplePayPage, FinishPage, RenewPage
} from '.';

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
     * monthly - MonthlyPage
     * renew - RenewPage
     * confirmSingle - ConfirmSinglePage
     * ... BIG TODO
     */
    state = {
        page: 'start',
        data: null
    }

    goto = (page, data = null) => e => {
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
                return <StartPage goto={this.goto} data={data}/>;
            case 'operation':
                return <OperationPage goto={this.goto} data={data}/>;
            case 'tickets':
                return <TicketsPage goto={this.goto} data={data}/>;
            case 'passes':
                return <PassesPage goto={this.goto} data={data}/>;
            case 'helpRechargeableOrPass':
                break;
            /**
             * Tickets
             */
            case 'single':
                return <SinglePage goto={this.goto} data={data}/>;
            case 'rechargeable':
                break;
            case 'fullDay':
                break;
            case 'recharge':
                break;
            /**
             * Passes
             */
            case 'monthly':
                break;
            case 'renew':
                return <RenewPage goto={this.goto} />;
            /*
                Payment
            */
            case 'nif':
                return <NifPage goto={this.goto} data={data} />;
            case 'paymentMethods':
                return <PaymentMethodsPage goto={this.goto} data={data} />;
            case 'cash':
                return <CashPage goto={this.goto} data={data}/>
            case 'card':
                return <CardPage goto={this.goto} data={data} />
            case 'mbway':
                return <MBWayPage goto={this.goto} data={data}/>
            case 'applepay':
                return <ApplePayPage goto={this.goto} />
            case 'finish':
                return <FinishPage goto={this.goto} data={data} />



            default:
            // do nothing
        }
    }
}
