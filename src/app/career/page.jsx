export default function CareerPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 pt-5">Join Our Team</h2>
        <p className="text-lg text-gray-600 mb-6">
          We're expanding and looking for talented individuals to join our team. Stay tuned for exciting career opportunities!
        </p>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Openings Coming Soon!</h3>
          <p className="text-lg text-gray-600">
            At CodeSouq, we believe in fostering a collaborative and innovative work environment. We are constantly on the lookout for passionate and skilled professionals who can contribute to our mission of delivering cutting-edge solutions.
          </p>
          <div className="text-md text-gray-600 mt-4 text-left">
            <p>Stay tuned for future job openings across various positions including:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Software Engineers</li>
              <li>Mobile App Developers</li>
              <li>UI/UX Designers</li>
              <li>Digital Marketers</li>
              <li>Cloud Solutions Architects</li>
            </ul>
          </div>
          <p className="mt-6 text-lg text-gray-600">
            Interested in applying? Please check back here for updates or subscribe to our newsletter to be notified about job openings.
          </p>
        </div>
      </div>
    </section>
  );
}
