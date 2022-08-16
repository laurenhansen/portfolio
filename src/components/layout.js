import * as React from 'react'
import SiteNav from './nav.js'
import { useStaticQuery, graphql } from 'gatsby'
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
      
      
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
            <h2>UX Designer | Chicago, IL</h2>
        </header>
      <SiteNav></SiteNav>
      
    
         
      
      <div class="content-wrapper">
        <main>
          {children}
         </main>
      </div>
    
    </div>
  )
}

export default Layout