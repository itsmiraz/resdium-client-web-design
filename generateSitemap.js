const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const { Readable } = require('stream');
const fs = require('fs');

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://resdium.vercel.app/' });
  const pipeline = sitemap.pipe(createGzip()); // Pipe sitemap to Gzip stream

  // Add URLs to the sitemap
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1 });

  // Add more URLs here dynamically based on your content

  sitemap.end(); // End the sitemap stream

  // Convert the sitemap stream to a promise
  const xmlString = await streamToPromise(pipeline);

  // Write the XML string to the sitemap file
  fs.writeFileSync('./public/sitemap.xml.gz', xmlString);
};

generateSitemap();
