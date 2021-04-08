import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Page } from '@components';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useStores } from '@store';
import Main from './components/main';

const HomePage = () => {
    const { t } = useTranslation('footer');
    const { HomeStore } = useStores();
    const { init } = HomeStore;
    useEffect(() => {
        init();
    }, []);
    return (
        <Page>
            <Main/>
        </Page>
    );
};
HomePage.getInitialProps = async () => ({
    namespacesRequired: ['home'],
});

export default appWithTranslation(observer(HomePage));
