const path = require('path')
const withSass = require('@zeit/next-sass');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`],
  },
};
module.exports = withSass({
/* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
cssModules: true
});
module.exports = {
/* Add Your Scss File Folder Path Here */
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
},
trailingSlash: true,
exportPathMap: async function (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId }
) {
  return {
    '/about': { page: '/about' },
    '/jobs/caixa': { page: '/jobs', query: { slug: 'caixa' } },
    '/jobs/pop': { page: '/jobs', query: { slug: 'pop' } },
  }
},
};
