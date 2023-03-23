import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar () {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">SMOK3</Link>
            <ul>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/games">Games</CustomLink>
                <CustomLink to="/marketplace">Marketplace</CustomLink>
                <CustomLink to="/battlepass">Battle Pass</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}