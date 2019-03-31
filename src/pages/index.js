import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function BlogPostCard({post}) {
  const title = post.frontmatter.title || post.fields.slug
  return (
      <div className="box" key={post.fields.slug}>
        <article className="tp-v-rhythm-container">
          <header>
            <h3><Link to={post.fields.slug}>{title}</Link></h3>
            <time className="is-uppercase has-text-weight-semibold is-size-7" datetime={post.frontmatter.date}>{post.frontmatter.date}</time>
          </header>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
          />
        </article>
      </div>
  )
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <div className="columns">
          <div className="column">
            <div className="hero is-danger is-bold is-medium">
              <div className="hero-body">
                <h1 className="title has-text-centered" style={{textShadow: '2px 2px 5px rgba(32,32,32,0.6)'}}>Hi, I'm Tom</h1>
              </div>
            </div>
          </div>
          <div className="column content" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '2em', paddingRight: '2em'}}>                
            <p>I'm a scrappy yet <a href="https://en.wikipedia.org/wiki/SOLID" target="_blank" rel="noopener noreferrer">solid</a> Javascript developer <a href="https://twitter.com/viventium" target="_blank" rel="noopener noreferrer">@Viventium</a>. Previously I did web things at <a href="https://twitter.com/GARP_Risk" target="_blank" rel="noopener noreferrer">@GARP_Risk</a>.</p>
            <p>In my spare time I play guitar, read, and contemplate my love/hate relationship with the greatest city (New York, New York of course).</p>
            <p>Open source and privacy are kind of a big deal to me. I'm usually the only dev using <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel="noopener noreferrer">Firefox</a> and I <a href="https://duckduckgo.com/" target="_blank" rel="noopener noreferrer">DuckDuckGo</a> instead of Googling even though I'm a firm believer in <a href="https://www.acronymfinder.com/Google-That-Shit-(GTS).html" target="_blank" rel="noopener noreferrer" title="Google That Shit">GTS</a>.</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="content">
              <h2>I write things</h2>
            </div>
            {posts.slice(0, 3).map(({ node }) => <BlogPostCard post={node}/>)}
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
