import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // 管理画面など隠したいパスがあればここに記述
            // disallow: '/admin/', 
        },
        sitemap: 'https://www.r-expo.site/sitemap.xml',
    };
}
