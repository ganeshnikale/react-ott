import * as React from "react"
import Layout from '../component/Layout';
import HomePage from "./homePage";

const IndexPage = () => {
  return (
  <Layout>

    <HomePage/>
  </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
