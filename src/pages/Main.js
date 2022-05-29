import { Component } from 'react';
import { StartPage, OperationPage, TicketsPage, PassesPage, SinglePage, NifPage, PaymentMethodPage, CashPage, CardPage,
     MBWayPage, ApplePayPage, ReceiptPage } from '.';

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
     */
    state = {
        page: 'start'
    }

    goto = (page) => e => {
        this.setState({ page: page })
    }

    render() {
        const { page } = this.state;

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
            /*
                Payment
            */
            case 'nif':
                return <NifPage goto={this.goto} />;
            case 'methods':
                return <PaymentMethodPage goto={this.goto} />;
            case 'cash':
                return <CashPage goto={this.goto} />
            case 'card':
                return <CardPage goto={this.goto} />
            case 'mbway':
                return <MBWayPage goto={this.goto} />
            case 'applepay':
                return <ApplePayPage goto={this.goto} />
            case 'receipt':
                return <ReceiptPage goto={this.goto} />

            

            default:
            // do nothing
        }
    }
}
