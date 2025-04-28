import './Header.less';
import { Link } from 'wouter';

export default function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <div id="header">Hearthstone Card Guide</div>
            </Link>
        </div>
    );
}