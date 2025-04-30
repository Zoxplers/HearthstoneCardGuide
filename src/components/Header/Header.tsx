import styles from './Header.module.less';
import React from 'react';
import { useLocation } from 'wouter';

export default function Header({children}: {children?: React.ReactNode}) {
    const [location, _] = useLocation();

    return (
        <div className={`${styles.Header}`}>
            <a className={styles.title} onClick={() => {
                    //Hard refresh
                    //Vulnerable, because this requires the home page to be set at "/"
                    if(location != "/")
                    {
                        window.location.href = "/";
                    }
                }}>
                <div className={styles.header}>Hearthstone Card Guide</div>
            </a>
            {children}
        </div>
    );
}