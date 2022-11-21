import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">User Merci4 Dev</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Foo City, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Merci4. Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+19999999">(+999) 999-9999</a>
                </address>
                <br />
                <p>Owner: Merci4dev</p>

                <div className='access admin'>
                    <h3>Data to access the api as Admin</h3>
                    <p>Admin</p>
                    <p>username: Mario</p>
                    <p>password: 12345</p>
                </div>

                <div className='access enployee'>
                    <h3>Data to access the api as Enployee</h3>
                    <p>Enployee</p>
                    <p>username: Sami </p>
                    <p>password: 12345</p>
                </div>
            </main>

            <footer className='footer'>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public