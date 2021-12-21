import React from "react"
import { Link } from 'gatsby';

export default function Home() {
  return <div>
    <h1>Hello world!</h1>
    <div>
      <Link to='/about'>about</Link>
    </div>
    <div>
      <Link to='/company/history'>company history</Link>
    </div>
    </div>
}
