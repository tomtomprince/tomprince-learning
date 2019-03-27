import React from "react"
import { Link } from "gatsby"

function Nav(props) {
  return (
    <nav 
      aria-label="main navigation"
      className="navbar is-white is-fixed-top" 
      role="navigation" 
    >
      <div className="navbar-brand">
        <Link
            className="navbar-item"
            to={`/`}
          >
            {props.title}
        </Link>
      </div>
    </nav>
  );
}

// function Footer(props) {
//   return (
//     <footer className="footer">
//       <div className="content has-text-centered">
//         <p>
//           Social, etc
//         </p>
//       </div>
//     </footer>
//   );
// }

function Layout(props) {
  const { title, children } = props

  return (
    <div>
      <Nav title={title} />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
