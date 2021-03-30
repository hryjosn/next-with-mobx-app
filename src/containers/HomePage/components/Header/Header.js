import React from 'react';
import { HeaderContainer, SignUpSpan } from './Header.styles';
import Link from 'next/link';
import { useStores } from '@store';
import { observer } from 'mobx-react';

import { appWithTranslation } from 'next-i18next';

const Header = ({ t }) => {
    const { openModal, logout } = useStores()['LoginModalStore'];
    const { userInfo } = useStores()['LayoutStore'];
    const { firstName } = userInfo;

    return (
        <HeaderContainer>
            {firstName ? (
                <>
                    <Link href={'/myaccount'}>
                        <SignUpSpan>Hi! {firstName}</SignUpSpan>
                    </Link>
                    <span
                        onClick={() => {
                            logout();
                        }}
                    >
                        {t('logout')}
                    </span>
                </>
            ) : (
                <>
                    <Link href="/signup">
                        <SignUpSpan>{t('sign_up')}</SignUpSpan>
                    </Link>
                    <span
                        onClick={() => {
                            openModal();
                        }}
                    >
                        {t('sign_in')}
                    </span>
                </>
            )}
        </HeaderContainer>
    );
};

export default appWithTranslation('home')(observer(Header));
