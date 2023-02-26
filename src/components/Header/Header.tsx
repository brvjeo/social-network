import React, { type FC } from 'react';
import { InputSearch } from '@components/InputSearch/InputSearch';
import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo} />
            <InputSearch placeholder={'Search'} />
        </header>
    );
};
