import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/Layout";
import {page,text} from '../examples/home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home page</h1>
        <div>
          <Link to='/about'>about</Link>
        </div>
        <div>
          <Link to='/company/history'>company history</Link>
        </div>
        <div>
          <a href="http://www.gatsbyjs.com/docs/how-to">gatsby docs</a>
        </div>
        <p className={text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ex, asperiores 
          quae ducimus dolorum tempora amet nam molestiae quo, laborum nihil voluptate impedit 
          sunt itaque corporis veniam id exercitationem esse.
        </p>
      </div>
    </Layout>
  )
}
