import "../styles/globals.scss";
import type { AppProps } from "next/app";

export async function getServerSideProps() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ x: 1 });
    }, 1000);
  });

  return { props: { data } };
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
