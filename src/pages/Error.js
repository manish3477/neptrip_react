import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

export default function Error() {
  return (
    <>
        <Banner title='404' subtitle='page not found !'>
            <Link to='/'>back to home</Link>
        </Banner>
    </>
  )
}
