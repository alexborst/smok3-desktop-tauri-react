export default function Navbar () {
    return (
        <nav className="nav">
            <a href="/" className="site-title">SMOK3</a>
            <ul>
                <li>
                    <a href="/" className="nav-item">Dashboard</a>
                </li>
                <li>
                    <a href="/games" className="nav-item">Games</a>
                </li>
                <li>
                    <a href="/marketplace" className="nav-item">Marketplace</a>
                </li>
                <li>
                    <a href="/battlepass" className="nav-item">Battle Pass</a>
                </li>
            </ul>
        </nav>
    )
}