import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowRight, FiBookOpen } = FiIcons;

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Signs Your HVAC System Needs Professional Attention',
      excerpt: 'Learn to recognize the warning signs that indicate your heating and cooling system requires professional service before costly breakdowns occur.',
      author: 'Mike Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Maintenance Tips',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: '5-signs-hvac-needs-attention'
    },
    {
      id: 2,
      title: 'Energy-Efficient HVAC Upgrades That Pay for Themselves',
      excerpt: 'Discover smart HVAC upgrades that can significantly reduce your energy bills while improving comfort and increasing your home\'s value.',
      author: 'Sarah Davis',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Energy Efficiency',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: 'energy-efficient-hvac-upgrades'
    },
    {
      id: 3,
      title: 'Winter HVAC Maintenance Checklist for Homeowners',
      excerpt: 'Essential winter maintenance tasks to keep your heating system running efficiently and prevent unexpected breakdowns during cold weather.',
      author: 'Tom Wilson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Seasonal Tips',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: 'winter-hvac-maintenance-checklist'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <SafeIcon icon={FiBookOpen} className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              HVAC Tips & Insights
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert advice, maintenance tips, and industry insights from our professional HVAC technicians.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                  >
                    Read More
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Want More HVAC Tips & Insights?
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Visit our blog for comprehensive guides, seasonal maintenance tips, energy-saving advice, and the latest HVAC industry news.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/blog"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiBookOpen} className="w-5 h-5 mr-3" />
                Visit Our Blog
              </Link>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 hover:text-white transition-colors inline-flex items-center justify-center">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;