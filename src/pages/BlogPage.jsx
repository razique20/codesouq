import React from "react";

const BlogPage = () => {
  // Dummy blog posts data
  const blogPosts = [
    {
      title: "5 Tips for Effective Web Development",
      date: "April 24, 2025",
      summary:
        "Web development can be a challenging yet rewarding career. Here are 5 tips to help you succeed and grow in the field.",
      link: "/blog/5-tips-for-effective-web-development",
    },
    {
      title: "The Importance of Mobile Optimization in 2025",
      date: "April 20, 2025",
      summary:
        "With the rise of mobile internet usage, optimizing your website for mobile devices is no longer optional. Here's why it matters.",
      link: "/blog/importance-of-mobile-optimization",
    },
    {
      title: "Cloud Solutions: The Future of Business",
      date: "April 18, 2025",
      summary:
        "As businesses increasingly move to the cloud, understanding cloud solutions is key to staying competitive. Discover the benefits of cloud adoption.",
      link: "/blog/cloud-solutions-future-of-business",
    },
    {
      title: "Digital Marketing Strategies for 2025",
      date: "April 15, 2025",
      summary:
        "Digital marketing continues to evolve. In this post, we explore the latest strategies that can help your business stand out in 2025.",
      link: "/blog/digital-marketing-strategies-2025",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Blog</h2>
        <p className="text-xl text-gray-600">
          Stay updated with the latest insights, tips, and trends in the world
          of software development, digital marketing, and more.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <a
              href={post.link}
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
