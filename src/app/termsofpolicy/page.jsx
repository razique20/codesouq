const TermsOfService = () => {
  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
        <h1 className="text-4xl font-bold text-center mb-10 text-cyan-300">
          Terms of Service
        </h1>

        <div className="space-y-8 text-gray-200">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance</h2>
            <p>
              By accessing and using AlgorithInn’s services, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Services</h2>
            <p>
              We offer AI-powered web solutions and digital tools for businesses. All services are subject to availability and modification.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Responsibilities</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Provide accurate information</li>
              <li>Respect intellectual property rights</li>
              <li>Abide by applicable laws and regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Intellectual Property</h2>
            <p>
              All content, trademarks, and technologies are the property of AlgorithInn unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access if users violate these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Changes to Terms</h2>
            <p>
              AlgorithInn may revise these Terms at any time. Updates will be posted on this page with a revised effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact</h2>
            <p>
              For questions about these Terms, email us at{" "}
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

export default TermsOfService;
