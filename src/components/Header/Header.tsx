import styles from './Header.module.less';
import { useLocation } from 'wouter';
import React from 'react';  

export default function Header({children}: {children?: React.ReactNode}) {
    const [, navigate] = useLocation();
    
    return (
        <div className={styles.Header}>
            <a onClick={() => navigate("/")}>
                <div className={styles.header}>Hearthstone Card Guide</div>
            </a>
            {children}
        </div>
    );
}