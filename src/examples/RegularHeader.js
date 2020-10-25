import React from "react"
import { StaticQuery, graphql } from "gatsby"
const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
        data {
          age
        }
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={({
        site: {
          siteMetadata: { title, author },
        },
      }) => {
        return (
          <div>
            <h2>title : {title}</h2>
            <h4>author : {author} </h4>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
