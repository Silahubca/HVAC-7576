// CMS Admin Interface for Blog Management
import blogCMS from './cms.js';

class CMSAdmin {
  constructor() {
    this.posts = blogCMS.posts;
    this.categories = blogCMS.categories;
  }

  // Create new post
  createPost(postData) {
    const newPost = {
      id: this.getNextId(),
      title: postData.title,
      slug: this.generateSlug(postData.title),
      excerpt: postData.excerpt,
      content: postData.content,
      author: postData.author || {
        name: 'Admin',
        bio: 'Tax Professional',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      publishedAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      readTime: this.calculateReadTime(postData.content),
      category: postData.category || 'General',
      tags: postData.tags || [],
      image: postData.image || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      featured: postData.featured || false,
      status: postData.status || 'draft',
      seo: postData.seo || {
        metaTitle: postData.title,
        metaDescription: postData.excerpt,
        keywords: postData.tags || []
      }
    };

    this.posts.push(newPost);
    this.saveToLocalStorage();
    return newPost;
  }

  // Update existing post
  updatePost(id, updates) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) return null;

    this.posts[postIndex] = {
      ...this.posts[postIndex],
      ...updates,
      updatedAt: new Date().toISOString().split('T')[0]
    };

    this.saveToLocalStorage();
    return this.posts[postIndex];
  }

  // Delete post
  deletePost(id) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) return false;

    this.posts.splice(postIndex, 1);
    this.saveToLocalStorage();
    return true;
  }

  // Get all posts for admin
  getAllPostsForAdmin() {
    return this.posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  // Publish/unpublish post
  togglePublishStatus(id) {
    const post = this.posts.find(post => post.id === id);
    if (!post) return null;

    post.status = post.status === 'published' ? 'draft' : 'published';
    post.updatedAt = new Date().toISOString().split('T')[0];
    this.saveToLocalStorage();
    return post;
  }

  // Helper methods
  getNextId() {
    return Math.max(...this.posts.map(post => post.id), 0) + 1;
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  saveToLocalStorage() {
    try {
      localStorage.setItem('tax-cms-posts', JSON.stringify(this.posts));
    } catch (error) {
      console.warn('Could not save to localStorage:', error);
    }
  }

  loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem('tax-cms-posts');
      if (saved) {
        this.posts = JSON.parse(saved);
        blogCMS.posts = this.posts;
      }
    } catch (error) {
      console.warn('Could not load from localStorage:', error);
    }
  }

  // Export data
  exportData() {
    return {
      posts: this.posts,
      categories: this.categories,
      exportDate: new Date().toISOString()
    };
  }

  // Import data
  importData(data) {
    try {
      if (data.posts && Array.isArray(data.posts)) {
        this.posts = data.posts;
        blogCMS.posts = this.posts;
        this.saveToLocalStorage();
        return true;
      }
      return false;
    } catch (error) {
      console.warn('Error importing data:', error);
      return false;
    }
  }
}

export default new CMSAdmin();