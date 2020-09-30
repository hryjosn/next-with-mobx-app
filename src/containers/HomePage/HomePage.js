import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Page } from '@components';
import { withTranslation } from '@i18n';


const HomePage = ({t}) => {

    useEffect(() => {
    }, []);
    return (
        <Page>
            {t('head_signup')}
        </Page>


    );
};
HomePage.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(observer(HomePage));
