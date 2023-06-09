import Image from 'next/image'
import Head from 'next/head'
import Layout from "@/components/layout";
import Hero from "@/components/Home/hero";
import Animation from "@/components/Home/animation";

export default function Home() {
  return (
      <Layout>
        <Head>
          <title> Portfolio</title>
        </Head>
          <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <Hero/>
              </div>
          </section>

      </Layout>
  )
}
