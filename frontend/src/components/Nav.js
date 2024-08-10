import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav>
        <Link to="/">About Me</Link>
        <Link to='../experience'>Experience</Link>
        <Link to='../projects'>Projects</Link>
        <Link to='../contact'>Contact Me</Link>
        


    </nav>
    )
}
export default Nav;