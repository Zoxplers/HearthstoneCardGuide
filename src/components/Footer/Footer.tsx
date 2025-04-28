import styles from './Footer.module.less'

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <span>Powered by <a href="https://vercel.com/">Vercel</a>.</span>
            <span id="license">AGPL-3.0 license.</span>
            <span id="signature">Made by <a href="https://zoxplers.com/">Zoxplers</a>.</span>
            <span className="footerLink"><a href="https://github.com/Zoxplers/HearthstoneCardGuide">Source code</a>.</span>
        </div>
    );
}