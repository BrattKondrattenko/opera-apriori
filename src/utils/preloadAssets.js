import { afishaMonths } from '../data/afishaEvents.js'
import { eventMonteverdi } from '../data/eventMonteverdi.js'

const PRIORITY_ASSETS = [
  '/assets/afisha-hero-source.png',
]

const LOCAL_ASSET_FILES = [
  'about-bg.png',
  'about-glow.png',
  'afisha-event-01.jpg',
  'afisha-event-02.jpg',
  'afisha-event-03.jpg',
  'afisha-event-04.jpg',
  'afisha-event-05.jpg',
  'afisha-event-06.jpg',
  'afisha-event-07.jpg',
  'afisha-event-08.jpg',
  'afisha-event-09.jpg',
  'afisha-event-10.jpg',
  'afisha-event-11.jpg',
  'afisha-event-12.jpg',
  'afisha-hero.png',
  'afisha-hero.svg',
  'afisha-hero-source.png',
  'arrow-link.svg',
  'b2.png',
  'culture.png',
  'bg1.jpg',
  'bg2.png',
  'Button.svg',
  'event-1.jpg',
  'event-2.jpg',
  'event-3.jpg',
  'event-about-text.svg',
  'event-card-awaits-1.jpg',
  'event-card-awaits-2.jpg',
  'event-card-awaits-3.jpg',
  'event-card-hero.png',
  'event-card-monteverdi.jpg',
  'event-card-performer-1.jpg',
  'event-card-performer-2.jpg',
  'event-card-performer-3.jpg',
  'event-card-performer-4.jpg',
  'event-card-performer-5.jpg',
  'event-card-performer-6.jpg',
  'event-card-sidebar-date.png',
  'event-date-04.svg',
  'event-date-07.svg',
  'event-date-09.svg',
  'event-date-12.svg',
  'event-date-24.svg',
  'event-date-slash.svg',
  'footer-logo.svg',
  'hero-logo.svg',
  'hero-poster.jpg',
  'icon-back.svg',
  'icon-calendar.svg',
  'icon-dot.svg',
  'icon-eye-off.svg',
  'icon-eye.svg',
  'icon-filters.svg',
  'icon-lang.svg',
  'icon-loyalty-arrow.svg',
  'icon-plus.svg',
  'icon-search.svg',
  'icon-star.svg',
  'imperial.png',
  'live-banner.png',
  'logo-header.png',
  'logo.svg',
  'mariot.png',
  'marquee-logo-1.svg',
  'marquee-logo-2.svg',
  'opera-title.png',
  'quote-piano.png',
  'visitors-arch-mask.png',
  'visitors-download-icon.svg',
  'visitors-dresscode-hero-mask.png',
  'visitors-dresscode-hero.jpg',
  'visitors-dresscode-subtitle.svg',
  'visitors-man-photo-final.png',
  'visitors-men-photo.jpg',
  'visitors-photo-overlay.png',
  'visitors-rules-title.svg',
  'visitors-women-photo-alt.jpg',
  'visitors-women-photo-final.png',
  'visitors-women-photo.jpg',
]

const ABOUT_ASSETS = [
  'https://www.figma.com/api/mcp/asset/b3f39410-0634-4a10-9de5-f7756413dd2a',
  'https://www.figma.com/api/mcp/asset/78ac0b37-9a07-4085-acba-285de6a98771',
  'https://www.figma.com/api/mcp/asset/2e662483-e063-44bb-b389-8c7f271aa7bb',
  'https://www.figma.com/api/mcp/asset/002f5b55-9957-46f2-a759-2c8f5ad2aadd',
  'https://www.figma.com/api/mcp/asset/0078d3f2-2f8b-498d-919e-5ba51a2172d7',
  'https://www.figma.com/api/mcp/asset/08f7197b-959d-4664-936e-8c86a52126e9',
  'https://www.figma.com/api/mcp/asset/d853a00c-f167-489f-9229-3038c7e3c40b',
  'https://www.figma.com/api/mcp/asset/2c17a614-b675-4fcc-90dd-87a2cf7113bc',
  'https://www.figma.com/api/mcp/asset/9cbb9bfc-1786-4d61-b025-4b4d4ba95388',
  'https://www.figma.com/api/mcp/asset/d15ef171-b377-4439-9a94-766222068c89',
  'https://www.figma.com/api/mcp/asset/438f6bcb-d1a4-4809-916b-55f65fbef11a',
  'https://www.figma.com/api/mcp/asset/6b7938b3-9f41-4c55-952c-7474d54467fa',
  'https://www.figma.com/api/mcp/asset/b5fc8b5a-c8bb-45d0-b0ff-f43b006ebf79',
  'https://www.figma.com/api/mcp/asset/ce34d742-ab4a-43cb-9f11-bc101747bdf2',
  'https://www.figma.com/api/mcp/asset/b363e368-34e1-428e-ad9b-0c67191e89ff',
  'https://www.figma.com/api/mcp/asset/e3e472f1-3925-4362-90ac-55363c62432f',
  'https://www.figma.com/api/mcp/asset/ab196b3c-5dee-41f7-946d-b491235f3f40',
  'https://www.figma.com/api/mcp/asset/909e4d06-bc7c-4831-a25a-eea258067183',
  'https://www.figma.com/api/mcp/asset/8e226cb7-f2bd-4586-9e67-78581d79159e',
  'https://www.figma.com/api/mcp/asset/67c84758-ee25-4547-9794-10815408f4b4',
  'https://www.figma.com/api/mcp/asset/9580d64e-eb1d-4f68-a91b-0b0b7342a04e',
  'https://www.figma.com/api/mcp/asset/9ca6b6de-bc01-4fa4-933b-84d0774e592d',
  'https://www.figma.com/api/mcp/asset/c518909e-15ff-4d50-9043-ec549b28b6b0',
  'https://www.figma.com/api/mcp/asset/dd982d83-f008-4e6d-ae35-a4517fa23adc',
]

function collectDataImages() {
  const afishaImages = afishaMonths.flatMap((month) =>
    month.events.map((event) => event.image)
  )

  const event = eventMonteverdi
  const eventImages = [
    event.heroImage,
    event.about.textSvg,
    event.sidebar.dateImage,
    ...event.awaits.items.map((item) => item.image),
    ...event.performers.map((performer) => performer.image),
  ]

  return [...afishaImages, ...eventImages]
}

function uniqueAssets(sources) {
  return [...new Set(sources)]
}

const ALL_ASSETS = uniqueAssets([
  ...PRIORITY_ASSETS,
  ...LOCAL_ASSET_FILES.map((file) => `/assets/${file}`),
  ...collectDataImages(),
  ...ABOUT_ASSETS,
])

const loaded = new Set()
let started = false

function preloadImage(src) {
  if (loaded.has(src)) return
  loaded.add(src)

  const img = new Image()
  img.decoding = 'async'
  img.src = src
}

export function preloadAllAssets() {
  if (started) return
  started = true

  PRIORITY_ASSETS.forEach(preloadImage)
  ALL_ASSETS.forEach(preloadImage)
}
