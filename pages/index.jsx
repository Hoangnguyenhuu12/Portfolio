import Head from 'next/head';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nguyen Huu Hoang - AI Engineer | Portfolio</title>
        <meta name="description" content="AI Engineer specializing in LLM, RAG, and advanced NLP systems. Building intelligent applications with production-grade quality." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI Engineer, LLM, RAG, Python, Machine Learning, NLP" />
        <meta property="og:title" content="Nguyen Huu Hoang - AI Engineer" />
        <meta property="og:description" content="Building Intelligence at Scale. Specializing in LLM & RAG systems." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <Portfolio />
    </>
  );
}
