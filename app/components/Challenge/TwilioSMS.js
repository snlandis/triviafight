import React from 'react';
import Form from './form';

export default class TwilioSMS extends React.Component {
    render() {
        return (
            <div className="form__wrapper displayf">
                <Form formAction = "/api/sms-promotion"
                formMethod = "post">
                </Form>
            </div>
        );
    }
}
