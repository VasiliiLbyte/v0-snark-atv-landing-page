/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages = статический хостинг.
  // Если репозиторий деплоится НЕ на корневой домен
  // (например, user.github.io/snark-atv-landing-page), раскомментируй ниже:
  //   basePath: '/snark-atv-landing-page',
  //   assetPrefix: '/snark-atv-landing-page/',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
