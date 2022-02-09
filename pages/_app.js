import Layout from '../components/layout/TheLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
<>
<Layout>

    <Component {...pageProps} />
</Layout>
</>
  )
}

export default MyApp
