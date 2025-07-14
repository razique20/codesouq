const TermsOfPolicy = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center mb-10">
          Terms of Policy
        </h1>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to CodeSouq. By accessing or using our website and
              services, you agree to comply with and be bound by the following
              Terms of Policy. Please review them carefully. If you do not agree
              to these terms, you should not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Our Services</h2>
            <p>
              CodeSouq provides software development, digital solutions, and
              related services. You agree to use our services only for lawful
              purposes and in accordance with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on this site
              are owned by CodeSouq unless otherwise stated. Unauthorized use of
              any materials without prior written consent is strictly
              prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Privacy</h2>
            <p>
              Your privacy is important to us. We are committed to protecting
              your personal information. Please review our Privacy Policy to
              understand how we collect, use, and safeguard your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p>
              CodeSouq is not liable for any indirect, incidental, special, or
              consequential damages arising out of or related to your use of our
              services or website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to These Terms</h2>
            <p>
              We may update these Terms of Policy from time to time. We
              encourage you to review this page periodically for any changes.
              Your continued use of our services after changes means you accept
              those changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Policy, please
              contact us at{" "}
              <span className="text-blue-600 underline">
                support@codesouq.ae
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfPolicy;
