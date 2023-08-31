import * as React from "react"
import Layout from '../components/Layout'
import {Link} from 'gatsby'

export default function ErrorPage() {
  return <Layout>
    Sorry, that page doesn't exist. Return to the <Link to="/">home page</Link>
    </Layout>
}
