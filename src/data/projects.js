// Central data store for all portfolio projects.
// Used by both the grid directory and the individual project detail pages.

export const projects = [
  {
    slug: 'kamal',
    num: '01',
    title: 'Kamal',
    subtitle: 'Lotus with Checks and Stripes',
    category: 'Print Designs',
    image: '/Kamal/CoverImage-opt.webp',
    available: true,
    palette: ['#6276A2', '#DCE1C0', '#A4B7A4', '#7B8B82', '#F2E0B3', '#F3DCE2', '#ECB4C8', '#EFB8CD', '#E596B2', '#D781A5'],
    theme: { bg: '#FCF7F8', text: '#401A24', primary: '#964858', secondary: '#E6C5C8', muted: '#856A70' },
    tags: ['Lotus', 'Kamal', 'Checks', 'Stripes', 'Placement Print'],
    description: 'Brief : The objective of this project is to create placement panel prints for HP Singh’s sub-brand, OUMA. The prints will be developed specifically for selected OUMA silhouettes. This approach will allow the prints to be translated across different silhouettes in the future, if required, without losing visual coherence or design intent.',
    details: [
      { label: 'Motifs', value: 'Digitally Illustrated Motifs' },
      { label: 'Print Type', value: 'Placement Prints/Engineered Prints' },
      { label: 'Year', value: '2025' }
    ],
    flipbookSrc: 'https://heyzine.com/flip-book/77f3184642.html',
    boards: [
      '/Kamal/Themeboard-opt.webp',
      '/Kamal/Moodboard-opt.webp'
    ],
    motifs: [
      '/Kamal/Motifs-opt.webp',
      '/Kamal/Motifs2-opt.webp'
    ],
    imageGallery: [
      '/Kamal/Kamal.webm',
      '/Kamal/ImageGallery_7560-opt.webp',
      '/Kamal/ImageGallery_7578-opt.webp',
      '/Kamal/ImageGallery_7631-opt.webp',
      '/Kamal/ImageGallery_7937-opt.webp',
      '/Kamal/ImageGallery_7942-opt.webp',
      '/Kamal/ImageGallery_7943-opt.webp',
      '/Kamal/ImageGallery_7936-opt.webp',
      '/Kamal/ImageGallery-opt.webp'
    ],
    kamalFabricExploration: [
      {
        src: '/Kamal/FabricExploration1-opt.webp',
        name: 'Amira Crepe',
        composition: '100% polyester'
      },
      {
        src: '/Kamal/FabricExploration2-opt.webp',
        name: 'Shushi voile check (simple)',
        composition: '100% Viscose'
      },
      {
        src: '/Kamal/FabricExploration3-opt.webp',
        name: 'Georgette satin',
        composition: '100% bamber viscose'
      },
      {
        src: '/Kamal/FabricExploration4-opt.webp',
        name: 'Shushi voile check',
        composition: '60% Viscose and 40% cotton'
      },
      {
        src: '/Kamal/FabricExploration5-opt.webp',
        name: 'CHANDERI',
        composition: '90% cotton and 10% silk'
      },
      {
        src: '/Kamal/FabricExploration6-opt.webp',
        name: 'COTTON VOILE',
        composition: '100% cotton'
      }
    ]
  },
  {
    id: 'picnic-cloth',
    slug: 'picnic-cloth',
    num: '02',
    title: 'The Picnic Cloth',
    subtitle: 'Print Design',
    category: 'Weaving',
    image: '/Picnic Cloth/CoverImage-opt.webp', 
    available: true,
    palette: ['#6478A5','#ACCACC','#BFD089', '#F16049', '#F4AE34', '#F0DED0', '#FEFEFE'],
    theme: { bg: '#F8F9FA', text: '#212529', primary: '#6478A5', secondary: '#E9ECEF', muted: '#6C757D' },
    tags: ['Scarf print', 'Kaftan Print','Picnic','Handkerchief', 'Resort wear'],
    description: 'Brief : The objective of this project is to design and develop colorful kaftan prints for the Resort wear collection of H.P. Singh’s sub-brand, OUMA, focusing on freshness and seasonal appeal.',
    secondaryDescription: 'Created scarf prints and extended their application into placement prints for kaftans, exploring cross-product design possibilities. Created Scarf prints inspired by Handkerchiefs.',
    details: [
      { label: 'Print', value: 'Scarf prints and placement prints' },
      { label: 'Motifs', value: 'Digitally illustrated Motifs' },
      { label: 'Year', value: '2025' }
    ],
    flipbookSrc: 'https://publuu.com/flip-book/1122441/2497710/page/1?embed',
    boards: [
      '/Picnic Cloth/Moodboard-opt.webp',
      '/Picnic Cloth/lookboard-opt.webp'
    ],
    motifs: [
      '/Picnic Cloth/Motifs1-opt.webp',
      '/Picnic Cloth/Motif2-opt.webp',
      '/Picnic Cloth/Motifs3-opt.webp'
    ],
    imageGallery: [
      '/Picnic Cloth/ThePicnicCloth.webm',
      '/Picnic Cloth/DESIGN1 (4)-opt.webp',
      '/Picnic Cloth/DESIGN1 (6)-opt.webp',
      '/Picnic Cloth/DESIGN1-opt.webp',
      '/Picnic Cloth/DESIGN1 (1)-opt.webp',
      '/Picnic Cloth/DESIGN1 (2)-opt.webp',
      '/Picnic Cloth/DESIGN1 (3)-opt.webp'
    ]
  },
  {
    slug: 'blooming-affair',
    num: '03',
    title: 'A Blooming Affair',
    subtitle: 'Print Design & Fashion Illustration',
    category: 'Print Designs',
    image: '/Blooming_Affair/MainPageCoverPhoto-opt.webp',
    available: true,
    palette: ['#8D519F', '#D95578', '#C8ABCE', '#FFCCD5', '#ECE8DC'],
    theme: { bg: '#FDFBF7', text: '#4A154B', primary: '#C21E56', secondary: '#D8B4F8', muted: '#886E89' },
    tags: ['Florals', 'Feminine', 'Romance', 'Watercolour', 'Print'],
    description:
      "This collection is inspired by the serene charm of the countryside, showcasing the graceful beauty of lilies and peonies. With soft pastel hues and deep purples, the floral prints capture nature's timeless elegance, offering a peaceful and romantic expression of the natural world's effortless calm and harmony.",
    details: [
      { label: 'Motifs', value: 'Hand-painted watercolour' },
      { label: 'Print Type', value: 'Seamless Repeats' },
      { label: 'Year', value: '2024' },
    ],

    affairMoodboard: [
      '/Blooming_Affair/MoodBoard1-opt.webp',
      '/Blooming_Affair/MoodBoard2-opt.webp'
    ],
    affairMotifs: [
      '/Blooming_Affair/HandPaintedMotifs-opt.webp'
    ],
    affairMotherprints: [
      '/Blooming_Affair/MotherprintsAndItsColorWays3-opt.webp',
      '/Blooming_Affair/MotherprintsAndItsColorWays2-opt.webp',
      '/Blooming_Affair/MotherprintsAndItsColorWays-opt.webp'
    ],
    affairProducts: [
      '/Blooming_Affair/Digital_illustrations-opt.webp'
    ],
    swatches: [
      '/Blooming_Affair/swatch 1-opt.webp',
      '/Blooming_Affair/swatch 2-opt.webp',
      '/Blooming_Affair/swatch 3-opt.webp',
      '/Blooming_Affair/swatch 4-opt.webp',
      '/Blooming_Affair/swatch 5-opt.webp',
      '/Blooming_Affair/swatch 6-opt.webp',
      '/Blooming_Affair/swatch 7-opt.webp',
      '/Blooming_Affair/swatch 8-opt.webp'
    ]
  },
  {
    slug: 'komudika-kaavya',
    num: '04',
    title: 'Komudika Kaavya',
    subtitle: 'Lehenga Design for Torani India',
    category: 'Print Designs',
    image: '/Komudika/high-res-resize_0098_watermark-torani-fin_-copy-928_700x-opt.webp',
    available: true,
    palette: ['#502E51', '#904f87ff','#555a3eff','#7E875A', '#CA1A48', '#BC5602', '#CD7D40', '#ED8296'],
    theme: { bg: '#f7f5efff', text: '#3E2A23', primary: '#BC5602', secondary: '#7B3F8C', muted: '#7A645D' },
    tags: ['Traditional', 'Chintz', 'Kalamkari', 'Placement Print', 'Torani'],
    description:
      "Designed as part of Torani's Taal Winter Collection, this placement print lehenga set draws from historical chintz archives and kalamkari motifs. Eleven intricate floral motifs were developed from scratch and arranged on a triangular kali panel in terracotta-orange and lilac colourways.",
    details: [
      { label: 'Client', value: 'Torani India' },
      { label: 'Collection', value: 'Taal — Winter 2024' },
      { label: 'Print Type', value: 'Placement Print' },
      { label: 'Silhouette', value: 'Lehenga kali (panel placement)' },
    ],

    briefImage: '/Komudika/Breif-opt.webp',
    initialIdeation: [
      '/Komudika/Initial_ideation-opt.webp',
    ],
    motifs: [
      '/Komudika/FinalMotif-opt.webp',
    ],
    finalPrint: '/Komudika/Final_print-opt.webp',
    collageImage: '/Komudika/collageManual-opt.webp',
    kaliSketch: '/Komudika/WhatsApp Image 2025-10-12 at 00.10.37_4b815087-opt.webp',
    toraniPhotos: [
      '/Komudika/high-res-resize_0098_watermark-torani-fin_-copy-928_700x-opt.webp',
      '/Komudika/high-res-resize_0103_watermark-torani-fin_-copy-932_700x-opt.webp',
      '/Komudika/high-res-resize_0110_watermark-torani-fin_-copy-939_700x-opt.webp',
    ]
  },
  {
    slug: 'denim-with-heart',
    num: '05',
    title: 'Denim with Heart',
    subtitle: 'Surface Design',
    category: 'Weaves and Surface Designs',
    image: '/Denim with Heart/MainCover-opt.webp',
    available: true,
    palette: ['#2C3B60', '#951B1D', '#5B779D', '#A2AED4', '#FFFFFF'],
    theme: { bg: '#F4F7FB', text: '#1B365D', primary: '#951B1D', secondary: '#5C7EAD', muted: '#7993B4' },
    tags: ['Denim', 'Bleach', 'Appliqué', 'Romantic', 'Upcycle'],
    description:
      'Curvy lines sculpt the silhoutte, red heart embroidery flirts with tradition, and every stitch is a love note in denim. Soft yet strong, bold yet tender. These jeans are made to move with emotion.',
    details: [
      { label: 'Techniques', value: 'Bleach resist, Appliqué, Lace insert' },
      { label: 'Silhouette', value: 'Wide-leg flared trouser' },
      { label: 'Year', value: '2024' },
    ],

    coverImage: '/Denim with Heart/MainCover-opt.webp',
    denimIdeation: ['/Denim with Heart/ideation-opt.webp'],
    denimMotifs: ['/Denim with Heart/Motif-opt.webp'],
    denimSamples: ['/Denim with Heart/Samples-opt.webp'],
    denimProducts: [
      '/Denim with Heart/product1-opt.webp',
      '/Denim with Heart/product2-opt.webp',
      '/Denim with Heart/product3-opt.webp',
      '/Denim with Heart/product4-opt.webp',
      '/Denim with Heart/product5-opt.webp',
      '/Denim with Heart/product6-opt.webp',
      '/Denim with Heart/product7-opt.webp',
    ]
  },
  {
    slug: 'ainu-textile',
    num: '06',
    title: 'Ainu Textile',
    subtitle: 'Surface Design',
    category: 'Weaves and Surface Designs',
    image: '/Ainu Textile/AinuMain1-opt.webp',
    available: true,
    palette: ['#1A2B4C', '#A62B2B', '#C5B39E', '#FAF7F0', '#383A80'],
    theme: { bg: '#FAF7F0', text: '#1A2B4C', primary: '#383A80', secondary: '#C5B39E', muted: '#5A6B8C' },
    tags: ['Japan', 'Embroidery', 'Chain Stitch', 'Sustainable', 'Research'],
    description:
      'A research-driven surface collection inspired by the Ainu people of Hokkaido, Japan — an indigenous community with a rich tradition of geometric embroidery on muslin and bark cloth. Three hand-sewn sample swatches explore chain stitch, couching, and appliqué in indigo, crimson, and taupe colourways, translated into contemporary unisex silhouettes.',
    details: [
      { label: 'Research Base', value: 'Ainu Textile from the Indigenous Community of Hokkaido, Japan' },
      { label: 'Techniques', value: 'Chain stitch, Couching, Appliqué' },
      { label: 'Exploration', value: 'Exploration in the base materail - Kala cotton, muslin, Locally availaible dyes' },
    ],

    ainuMotifs: [
      '/Ainu Textile/Motifs-opt.webp',
    ],
    aboutAinu: [
      '/Ainu Textile/AboutAinu-opt.webp',
      '/Ainu Textile/CollectionBreakdown-opt.webp',
    ],
    ainuProducts: [
      '/Ainu Textile/Product 1-opt.webp',
      '/Ainu Textile/product2-opt.webp',
      '/Ainu Textile/product3-opt.webp',
      '/Ainu Textile/product4-opt.webp',
    ]
  }
];

// Quick lookup by slug
export const getProject = (slug) => projects.find((p) => p.slug === slug) ?? null;
