import React from 'react';
import Form from './form';

export default class TwilioSMS extends React.Component {
    render() {
        return (
            <div className="">
                <Form formAction = "/api/sms-promotion"
                formMethod = "post">
                </Form>
            </div>
        );
    }
}
