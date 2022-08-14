import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import "./layout.scss"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="page-container">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      
      <div class="nav-wrapper">
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
            <h3>UX Designer | Chicago, IL</h3>
        </header>
        <nav>
        <ul class="nav-links">
          <li class="nav-link-item">
            <Link to="/" class="nav-link-text" activeClassName="active">
              Home
            </Link>
          </li>
          
          <li class="nav-link-item">
            <Link to="/portfolio" class="nav-link-text" activeClassName="active">
              Portfolio
            </Link>
          </li>
        </ul>
        </nav>
      </div>
      <div class="content-wrapper">
        <main>
          {children}
         </main>
      </div>
    
    </div>
  )
}

export default Layout