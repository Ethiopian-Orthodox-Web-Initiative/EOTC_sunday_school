// src/pages/index.tsx

import Layout from '../layouts/layout';

const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to the Ethiopian Orthodox Church App</h1>
        <p className="text-lg text-center mb-8">
          Your one-stop place for spiritual growth, learning, and community engagement.
        </p>
        
        
      </section>
    </Layout>
  );
};

export default Home;
