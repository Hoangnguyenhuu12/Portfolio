import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <head>
        <title>Nguyễn Hữu Hoàng - AI Engineer | LLM & RAG Specialist</title>
        <meta name="description" content="AI Engineer specializing in LLM, RAG, and advanced NLP systems. Building intelligent applications with production-grade quality." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI Engineer, LLM, RAG, Python, Machine Learning, NLP" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Nguyễn Hữu Hoàng - AI Engineer" />
        <meta property="og:description" content="Building Intelligence at Scale. Specializing in LLM & RAG systems." />
        <meta property="og:type" content="website" />
        
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-weight='bold'>H</text></svg>" />
      </head>
      <Portfolio />
    </>
  );
}
