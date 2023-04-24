import Aos from 'aos';
import { useEffect } from 'react';
import '../styles/index.scss';
import dynamic from 'next/dynamic'
import ContextProvider from '../Context/ContextProvider';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={45}
        color="52, 152, 219"
        outerAlpha={0.3}
        innerScale={1}
        outerScale={1.2}
      />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp
