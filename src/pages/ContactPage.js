import React from 'react';

import Hero from '../components/Hero.component';
import Content from '../components/Content.component';

class ContactPage extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                name: '',
                email: '',
                message: '',
                disabled: false,
                emailSent: null
            }
        }

        render() {
            return(
                <div>
                    <Hero title={this.props.title} />

                    <Content>
                        Hello
                    </Content>

                </div>
            );
        }
}

export default ContactPage;