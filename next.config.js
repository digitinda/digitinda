/** @type {import('next').NextConfig} */

const withTranspile = require('next-transpile-modules')([]);

const nextConfig = {
experimental: {
	esmExternals: 'loose'
  } 
}

module.exports = withTranspile({experimental: {esmExternals: 'loose'}, images: {
    domains: ['xpsjobs.ph'],
  }});
