import '../styles/globals.css'
import '../styles/admin.scss'
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {

  return <div id="page"><Component {...pageProps} /></div>
}

export default MyApp
