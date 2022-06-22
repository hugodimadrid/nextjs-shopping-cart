import { useEffect } from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    typeof document !== 'undefined' ? require('bootstrap/dist/js/bootstrap'): null
  },[])
  return <Layout> <Component {...pageProps} /></Layout>
}

export default MyApp
