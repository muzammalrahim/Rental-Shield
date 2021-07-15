import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import ClientBg from '../../assets/images/client-bg.png';

//Translation
import { withTranslation } from 'react-i18next';


class AssociationFooter extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="Association-f-main">
                        
                        <div className="clients bg-no-repeat bg-cover" style={{ backgroundImage:`url(${ClientBg})` }}>
                        <p className="text-gray-500 text-5x pb-5 pt-3">
                            {t('association-footer.association-f')} 
                        </p>
                        <div className="px-24">
                            <ul className="m-0 grid grid-cols-5 pl-3 px-5 pb-4">
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc1.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc2.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc3.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc4.png'} alt="client"/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + '/img/fc5.png'} alt="client"/>
                                </li>
                            </ul>
                        </div>
                            
                        </div>
            </div>
        )
    }
}
export default withTranslation(['common'])(AssociationFooter);
