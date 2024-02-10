import React from 'react';
import { Link } from 'react-router-dom';

function CommunityPage() {
  return (
    <div>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl">Nature Activism Community Page</h1>
          <nav className="mt-2">
            <ul className="flex space-x-4">
              <li><Link to="/AddBlock">Add Block</Link></li>
              <li><Link to="#">Hero Banner</Link></li>
              <li><Link to="#">8 CTA Section</Link></li>
              <li><Link to="#">O Html Embed</Link></li>
              <li><Link to="#">B Accordions</Link></li>
              <li><Link to="#">0 iFrame</Link></li>
              <li><Link to="#">@ Quick Links</Link></li>
              <li><Link to="#">88 Collection</Link></li>
              <li><Link to="#">Feed</Link></li>
              <li><Link to="#">Preview</Link></li>
              <li><Link to="#">All</Link></li>
              <li><Link to="#">Articles</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <section id="hero-banner" className="bg-green-500 text-white p-8">
          <h2 className="text-2xl">Join the Nature Activism Community</h2>
          <p className="mt-2">Connect with like-minded individuals and make a difference in the world.</p>
          <Link to="#" className="mt-4 inline-block bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-300">Join Now</Link>
        </section>
        <section id="cta-section" className="py-8">
          <h3 className="text-xl mb-4">8 Call-to-Action Buttons</h3>
          <div className="flex space-x-4">
            {[...Array(8)].map((_, index) => (
              <Link to="#" className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors duration-300" key={index}>Button {index + 1}</Link>
            ))}
          </div>
        </section>
        <section id="html-embed" className="py-8">
          <h3 className="text-xl">Our Blogs</h3>
          <p className="mt-2">This is where you can embed HTML content, such as videos or interactive elements.</p>

        </section>
        <section id="accordions" className="py-8">
          <h3 className="text-xl mb-4">FAQ Accordions</h3>
          <div className="accordion">
            <h4 className="cursor-pointer">What is Nature Activism?</h4>
            <div className="accordion-content">
              <p>Nature activism is a movement to protect and preserve the natural world.</p>
            </div>
          </div>
          <div className="accordion">
            <h4 className="cursor-pointer">How can I get involved?</h4>
            <div className="accordion-content">
              <p>There are many ways to get involved in nature activism, such as volunteering with a local organization or participating in campaigns and events.</p>
            </div>
          </div>
          <div className="accordion">
            <h4 className="cursor-pointer">What are the benefits of Nature Activism?</h4>
            <div className="accordion-content">
              <p>Nature activism can have many benefits, including improving the environment, connecting with nature, and creating positive social change.</p>
            </div>
          </div>
        </section>
        <section id="quick-links" className="py-8">
          <h3 className="text-xl mb-4">Quick Links</h3>
          <ul className="list-disc ml-8">
            <li><Link to="#" className="text-green-500 hover:underline">Link 1</Link></li>
            {/* Add more links as needed */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default CommunityPage;
