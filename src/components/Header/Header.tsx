import styles from './Header.module.less';
import React from 'react';
import { useLocation } from 'wouter';

export default function Header({children}: {children?: React.ReactNode}) {
    const [, navigate] = useLocation();

    return (
        <div className={`${styles.Header}`}>
            <a className={styles.title} onClick={() => navigate("/")}>
                <div className={styles.header}>Hearthstone Card Guide</div>
            </a>
            {children}
        </div>
    );
}