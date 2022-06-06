import { Component } from 'react';
import {
    ApplePayPage, CardPage, CashPage, FinishPage, MBWayPage, NifPage, OperationPage, PassesPage, PaymentMethodsPage,
    RenewPage, SinglePage, StartPage, TicketsPage
} from '.';

class Main extends Component {

    /**
     * Possible states:
     * 
     * applepay       - ApplePayPage
     * card           - CardPage
     * cash           - CashPage
     * finish         - FinishPage
     * mbway          - MBWayPage
     * nif            - NifPage
     * operation      - OperationPage
     * passes         - PassesPage
     * paymentMethods - PaymentMethodsPage
     * renew          - RenewPage
     * single         - SinglePage
     * start          - StartPage
     * tickets        - TicketsPage
     */

    state = {
        page: 'start',
        data: null
    }

    goto = (page, data = null) => {
        this.setState({
            page: page,
            data: data
        })
    }

    render = () => {
        const { page, data } = this.state;

        console.log('Current Page: ' + page); // Debugging

        switch (page) {
            case 'applepay':       return <ApplePayPage       goto={this.goto} data={data} />;
            case 'card':           return <CardPage           goto={this.goto} data={data} />;
            case 'cash':           return <CashPage           goto={this.goto} data={data} />;
            case 'finish':         return <FinishPage         goto={this.goto} data={data} />;
            case 'mbway':          return <MBWayPage          goto={this.goto} data={data} />;
            case 'nif':            return <NifPage            goto={this.goto} data={data} />;
            case 'operation':      return <OperationPage      goto={this.goto} data={data} />;
            case 'passes':         return <PassesPage         goto={this.goto} data={data} />;
            case 'paymentMethods': return <PaymentMethodsPage goto={this.goto} data={data} />;
            case 'renew':          return <RenewPage          goto={this.goto} data={data} />;
            case 'single':         return <SinglePage         goto={this.goto} data={data} />;
            case 'start':          return <StartPage          goto={this.goto} data={data} />;
            case 'tickets':        return <TicketsPage        goto={this.goto} data={data} />;
            default: // Do nothing
        }
    }
}

export default Main;