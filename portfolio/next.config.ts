import type { NextConfig } from "next";
import mdx from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, install it and uncomment:
    // remarkPlugins: [require('remark-gfm')],
    // If you use rehype plugins, install them and uncomment:
    // rehypePlugins: [/* ... */],
  },
})

module.exports = withMDX({
  // Support both .md and .mdx files
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

export default nextConfig;
