const CookiePolicy = () => {
  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
        <h1 className="text-4xl font-bold text-center mb-10 text-cyan-300">
          Cookie Policy
        </h1>

        <div className="space-y-8 text-gray-200">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p>
              This Cookie Policy explains how AlgorithInn uses cookies and similar technologies to recognize you when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. What are Cookies?</h2>
            <p>
              Cookies are small files stored on your device that help websites remember information about your visit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Why We Use Cookies</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Enhance user experience</li>
              <li>Track performance and usage</li>
              <li>Personalize content</li>
              <li>Analyze and improve services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Types of Cookies</h2>
            <p>
              <strong>Essential:</strong> Required for core functionality<br />
              <strong>Performance:</strong> Measure how the site is used<br />
              <strong>Functional:</strong> Remember preferences<br />
              <strong>Analytics:</strong> Understand behavior
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Managing Cookies</h2>
            <p>
              You can disable cookies through your browser settings. Note that some site functions may not work correctly if cookies are turned off.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Updates</h2>
            <p>
              This policy may be updated from time to time. Please review it periodically for the latest information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Us</h2>
            <p>
              Questions? Contact us at{" "}
              <a href="mailto:support@algorithinn.ae" className="text-cyan-400 underline">
                support@algorithinn.ae
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
