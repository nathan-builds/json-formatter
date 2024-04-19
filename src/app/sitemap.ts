import { MetadataRoute } from 'next';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const staticURLS = [{
        url: `https://jsonformatter.dev`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1
    }, {
        url: `https://jsonformatter.dev/about`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3
    },
        {
            url: `https://jsonformatter.dev/contact`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.3
        }
    ];
    const allURLS = [...staticURLS];

    return allURLS as MetadataRoute.Sitemap;
}