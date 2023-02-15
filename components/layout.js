import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
export default function layout({children, title, description}) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <Header />
            {children}
        <Footer />
    </>
  )
}
