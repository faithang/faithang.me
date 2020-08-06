import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function Home({ data }) {
  return <div>

	<div style={{ margin: `3rem auto`, maxWidth: 600 }}>
	<Header headerText={data.site.siteMetadata.title}/>

	<p>what. a. WORRRLD. mahaloooo.</p>


	</div>
	</div>
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
