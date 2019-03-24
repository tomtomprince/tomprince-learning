import React from "react"
import { Link } from "gatsby"
class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        {/* <header>
          <h3>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </header> */}
        <nav 
          aria-label="main navigation"
          className="navbar is-primary" 
          role="navigation" 
        >
          <div className="navbar-brand">
            <Link
                className="navbar-item"
                to={`/`}
              >
                {title}
            </Link>
          </div>
        </nav>
        <main className="section">{children}</main>
        {/* <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Insert Bio
            </p>
          </div>
        </footer> */}
      </div>
    )
  }
}

export default Layout
