// Central data store for all portfolio projects.
// Used by both the grid directory and the individual project detail pages.

export const projects = [
  {
    slug: 'blooming-affair',
    num: '01',
    title: 'A Blooming Affair',
    subtitle: 'Fashion Illustration & Print Design',
    category: 'Print Designs',
    image: '/Blooming_Affair/dreeeeessssessssss  222222.webp',
    available: true,
    palette: ['#C21E56', '#D8B4F8', '#4A154B', '#FFCCD5', '#FDFBF7'],
    tags: ['Florals', 'Feminine', 'Romance', 'Watercolour', 'Print'],
    description:
      'A collection rooted in the quiet charm of the English countryside — rolling fields, overgrown gardens, and peony bushes brushed with morning light. The prints capture a soft romanticism through hand-painted watercolour florals, fine outline work, and layered petal textures across eight distinct fabric swatches.',
    details: [
      { label: 'Medium', value: 'Hand-painted watercolour + Digital' },
      { label: 'Techniques', value: 'Surface repeat, placement print' },
      { label: 'Fabric', value: 'Silk chiffon, Cotton lawn' },
      { label: 'Year', value: '2024' },
    ],
    moodKeywords: ['Florals', 'Feminine', 'Romance'],
    illustrations: [
      '/Blooming_Affair/mammamamam.webp',
      '/Blooming_Affair/dreeeeessssessssss.webp',
      '/Blooming_Affair/dreeeeessssessssss  222222.webp'
    ],
    swatches: [
      '/Blooming_Affair/swatch 1.webp',
      '/Blooming_Affair/swatch 2.webp',
      '/Blooming_Affair/swatch 3.webp',
      '/Blooming_Affair/swatch 4.webp',
      '/Blooming_Affair/swatch 5.webp',
      '/Blooming_Affair/swatch 6.webp',
      '/Blooming_Affair/swatch 7.webp',
      '/Blooming_Affair/swatch 8.webp'
    ]
  },
  {
    slug: 'komudika-kaavya',
    num: '02',
    title: 'Komudika Kaavya',
    subtitle: 'Lehenga Design for Torani India',
    category: 'Print Designs',
    image: '/Komudika/high-res-resize_0098_watermark-torani-fin_-copy-928_700x.webp',
    available: true,
    palette: ['#B5451B', '#C9A84C', '#7B3F8C', '#F5E6D3', '#FFFFFF'],
    tags: ['Traditional', 'Chintz', 'Kalamkari', 'Placement Print', 'Torani'],
    description:
      "Designed as part of Torani's Taal Winter Collection, this placement print lehenga set draws from historical chintz archives and kalamkari motifs. Eleven intricate floral motifs were developed from scratch and arranged on a triangular kali panel in terracotta-orange and lilac colourways.",
    details: [
      { label: 'Client', value: 'Torani India' },
      { label: 'Collection', value: 'Taal — Winter 2024' },
      { label: 'Medium', value: 'Digital vector + Screen print' },
      { label: 'Silhouette', value: 'Lehenga kali (panel placement)' },
    ],
    moodKeywords: ['Heritage', 'Opulent', 'Traditional'],
    initialIdeation: [
      '/Komudika/Initial_ideation.webp',
    ],
    motifs: [
      '/Komudika/Final_motifs.webp',
      '/Komudika/Final_motifs2.webp',
    ],
    collageImages: [
      '/Komudika/Inspiration1.webp',
      '/Komudika/Inspiration2.webp',
      '/Komudika/Inspiration3.webp',
      '/Komudika/collageImage4.webp',
    ],
    kaliSketch: '/Komudika/WhatsApp Image 2025-10-12 at 00.10.37_4b815087.webp',
    toraniPhotos: [
      '/Komudika/high-res-resize_0098_watermark-torani-fin_-copy-928_700x.webp',
      '/Komudika/high-res-resize_0103_watermark-torani-fin_-copy-932_700x.webp',
      '/Komudika/high-res-resize_0110_watermark-torani-fin_-copy-939_700x.webp',
    ]
  },
  {
    slug: 'ainu-textile',
    num: '03',
    title: 'Ainu Textile',
    subtitle: 'Hokkaido Inspired Surface Design',
    category: 'Weaves and Surface Designs',
    image: '/Ainu Textile/Product 1.webp',
    available: true,
    palette: ['#1A2B4C', '#A62B2B', '#C5B39E', '#FAF7F0', '#2D4A7A'],
    tags: ['Japan', 'Embroidery', 'Chain Stitch', 'Sustainable', 'Research'],
    description:
      'A research-driven surface collection inspired by the Ainu people of Hokkaido, Japan — an indigenous community with a rich tradition of geometric embroidery on muslin and bark cloth. Three hand-sewn sample swatches explore chain stitch, couching, and appliqué in indigo, crimson, and taupe colourways, translated into contemporary unisex silhouettes.',
    details: [
      { label: 'Research Base', value: 'Tibetan Women\'s Centre, Hokkaido archives' },
      { label: 'Techniques', value: 'Chain stitch, Couching, Appliqué' },
      { label: 'Fabric', value: 'Muslin, Indigo cotton' },
      { label: 'Target Market', value: 'Sustainable fashion, 25–40 yrs' },
    ],
    moodKeywords: ['Indigenous', 'Geometric', 'Sustainable'],
    ainuMotifs: [
      '/Ainu Textile/motif.webp',
    ],
    ainuProducts: [
      '/Ainu Textile/Product 1.webp',
      '/Ainu Textile/product2.webp',
      '/Ainu Textile/product3.webp',
      '/Ainu Textile/product4.webp',
    ],
  },
  {
    slug: 'denim-with-heart',
    num: '04',
    title: 'Denim with Heart',
    subtitle: 'Surface Design — Grungy Romantic',
    category: 'Weaves and Surface Designs',
    image: '/Denim with Heart/MainCover.webp',
    available: true,
    palette: ['#1B365D', '#5C7EAD', '#A3C1AD', '#E02424', '#FFFFFF'],
    tags: ['Denim', 'Bleach', 'Appliqué', 'Romantic', 'Upcycle'],
    description:
      'A structural yet tender exploration of denim as a surface design canvas. Curvy bleach wave patterns, fabric appliqué, machine running stitch in red, and wavy lace inserts transform standard denim into a grungy-cute fashion statement. Final samples were realised as wide-leg flared pants with wavy pink lace panels on side seams.',
    details: [
      { label: 'Base Fabric', value: 'Raw denim, Light-wash denim' },
      { label: 'Techniques', value: 'Bleach resist, Appliqué, Lace insert' },
      { label: 'Silhouette', value: 'Wide-leg flared trouser' },
      { label: 'Year', value: '2024' },
    ],
    moodKeywords: ['Grungy', 'Romantic', 'Structural'],
    coverImage: '/Denim with Heart/MainCover.webp',
    denimIdeation: ['/Denim with Heart/ideation.webp'],
    denimMotifs: ['/Denim with Heart/Motif.webp'],
    denimSamples: ['/Denim with Heart/Samples.webp'],
    denimProducts: [
      '/Denim with Heart/product1.webp',
      '/Denim with Heart/product2.webp',
      '/Denim with Heart/product3.webp',
      '/Denim with Heart/product4.webp',
      '/Denim with Heart/product5.webp',
      '/Denim with Heart/product6.webp',
      '/Denim with Heart/product7.webp',
    ]
  },
  {
    slug: 'blooming-canopy',
    num: '05',
    title: 'Blooming Canopy',
    subtitle: 'Home Textile — Bedding Collection',
    category: 'Print Designs',
    image: '/Blooming Canopy/MainImage.webp',
    available: true,
    palette: ['#FCE4E6', '#C21E56', '#D8B4F8', '#FDFBF7', '#4A154B'],
    tags: ['Home Textile', 'Bedding', 'Floral', 'Mockup'],
    description: 'A print design collection inspired by William Morris, blending his intricate floral patterns with modern, airy aesthetics. Featuring soft greens, warm peach tones, fluid forms, and subtle textures, the collection offers a fresh, delicate take on classic florals, perfect for home and lifestyle branding.',
    details: [],
    moodKeywords: ['Cozy', 'Floral', 'Pastel'],
    coverImage: '/Blooming Canopy/CoverImage.webp',
    bloomingMotifs: [
      '/Blooming Canopy/Motif1.webp',
      '/Blooming Canopy/motif2.webp',
    ],
    bloomingProducts: [
      '/Blooming Canopy/Product1.webp',
      '/Blooming Canopy/product2.webp',
    ],
  },
  {
    slug: 'kairi',
    num: '06',
    title: 'Kairi',
    subtitle: 'Collection 6: Print Design',
    category: 'Print Designs',
    image: '/Kairi/PA1.webp',
    available: true,
    palette: ['#F5E6CC', '#D4AF37', '#800020', '#4A0E4E', '#000080'],
    tags: ['Saree', 'Paisley', 'Heritage', 'Print', 'Textile'],
    description: 'A refined saree collection celebrating the timeless elegance of paisleys. Crafted in luxurious fabrics with golden zari threads, each piece merges heritage with contemporary grace.',
    details: [
      { label: 'Medium', value: 'Digital Print Layout' },
      { label: 'Category', value: 'Saree & Dupatta' },
      { label: 'Theme', value: 'Paisley Elegance' },
    ],
    moodKeywords: ['Heritage', 'Elegant', 'Paisley'],
    kairiMoodboard: [
      '/Kairi/IMG20250416212437.webp',
      '/Kairi/IMG20250416212523.webp',
      '/Kairi/IMG20250416212528.webp',
      '/Kairi/IMG20250416212540.webp',
      '/Kairi/IMG20250416212545.webp',
    ],
    kairiElements: [
      '/Kairi/pp1.webp',
      '/Kairi/pp2.webp',
      '/Kairi/pp3.webp',
      '/Kairi/pp4.webp',
      '/Kairi/pp5.webp',
      '/Kairi/pp6.webp',
    ],
    kairiLayouts: [
      '/Kairi/PA1.webp',
      '/Kairi/PA2.webp',
      '/Kairi/PA3.webp',
      '/Kairi/PA4.webp',
      '/Kairi/PA5.webp',
      '/Kairi/PA6.webp',
    ]
  },
];

// Quick lookup by slug
export const getProject = (slug) => projects.find((p) => p.slug === slug) ?? null;
