import React from "react"
import { Link } from "gatsby"
class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <header>
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
        </header>
        <main>{children}</main>
        <footer>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
