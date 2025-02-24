import { Suspense, useRef, useEffect, lazy } from 'react'
import Footer from "footer/Footer"

import { registerRemotes } from '@module-federation/runtime';
const Banner = lazy(() => import("banner/Banner"));

registerRemotes([
  {
    name: 'header',
    entry: 'http://localhost:5001/remoteEntry.js',
    type: 'module',
  },
  {
    name: 'footer',
    entry: 'http://localhost:5004/remoteEntry.js',
    type: 'var',
  },
  {
    name: 'banner',
    entry: 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
    type: 'var',
  },
])

const VueHeaderWrapper = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let vueApp = null;

    const loadVueComponent = async () => {
      const { mount } = await import('header/Header'); // Ensure this matches the expose name
      vueApp = mount(ref.current);
    };

    loadVueComponent();

    return () => {
      if (ref.current && vueApp) {
        ref.current.innerHTML = ''; // Cleanup on unmount
      }
    };
  }, []);

  return <div ref={ref} />;
};

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading Header...</div>}>
        <VueHeaderWrapper />
      </Suspense>
      <main>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Banner />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
