import { afishaMonths } from '../data/afishaEvents.js'
import { eventMonteverdi } from '../data/eventMonteverdi.js'

const CRITICAL_HOME_ASSETS = [
  '/assets/hero-poster.jpg',
  '/assets/hero-logo.svg',
  '/assets/logo-header.png',
]

const ROUTE_ASSETS = {
  home: [
    '/assets/bg1.jpg',
    '/assets/opera-title.png',
    '/assets/event-1.jpg',
    '/assets/event-2.jpg',
    '/assets/event-3.jpg',
  ],
  afisha: [
    '/assets/afisha-hero-source.png',
    ...afishaMonths.flatMap((month) => month.events.map((event) => event.image)),
  ],
  event: (() => {
    const event = eventMonteverdi
    return [
      event.heroImage,
      event.about.textSvg,
      event.sidebar.dateImage,
      ...event.awaits.items.map((item) => item.image),
      ...event.performers.map((performer) => performer.image),
    ]
  })(),
  about: [
    'https://www.figma.com/api/mcp/asset/b3f39410-0634-4a10-9de5-f7756413dd2a',
    'https://www.figma.com/api/mcp/asset/78ac0b37-9a07-4085-acba-285de6a98771',
    'https://www.figma.com/api/mcp/asset/2e662483-e063-44bb-b389-8c7f271aa7bb',
  ],
}

const loaded = new Set()
const scheduledRoutes = new Set()

function preloadImage(src) {
  if (!src || loaded.has(src)) return
  loaded.add(src)

  const img = new Image()
  img.decoding = 'async'
  img.src = src
}

function scheduleIdle(callback) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: 3000 })
  } else {
    setTimeout(callback, 1500)
  }
}

export function preloadCriticalAssets() {
  CRITICAL_HOME_ASSETS.forEach(preloadImage)
}

export function preloadRouteAssets(route) {
  const assets = ROUTE_ASSETS[route]
  if (!assets || scheduledRoutes.has(route)) return
  scheduledRoutes.add(route)

  scheduleIdle(() => {
    assets.forEach(preloadImage)
  })
}
