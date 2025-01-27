CREATE TABLE BlogPosts (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE,
  title VARCHAR(255),
  content TEXT,
  views INT DEFAULT 0,
  likes INT DEFAULT 0
);

CREATE TABLE Likes (
  id SERIAL PRIMARY KEY,
  sessionId VARCHAR(255),
  blog_slug VARCHAR(255),
  FOREIGN KEY (blog_slug) REFERENCES BlogPosts(slug) ON DELETE CASCADE
);

CREATE TABLE blog_stats (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  views INT DEFAULT 0,
  likes INT DEFAULT 0
);

CREATE TABLE blog_stats (
  slug VARCHAR(255) PRIMARY KEY,
  views INT DEFAULT 0,
  likes INT DEFAULT 0
);
