import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"
import BeforeAfter from 'src/components/Home/BeforeAfter.js';
import SectionTitle from 'src/components/shared/SectionTitle.js'
import Workshops from 'src/components/Home/Workshops.js'
import '../styles/index.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Portfolio of John Doe" />
      <Hero />
      <div className="cards-container">
        <SectionTitle firstWords={'Our'} secondWords={'Services'} />
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
            <div className="container">No projects found.</div>
          )}
      </div>
      <BeforeAfter />
      <Workshops />
      <Newsletter />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
