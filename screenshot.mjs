import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
})

const dir =
  '/private/tmp/claude-501/-Users-faustaladdomada-Desktop-Nuovo-sito-Lost-Room--lostroom-sito/5809167c-0502-49a1-bbdc-03dda729107f/scratchpad'

const sizes = [
  { name: 'mobile-375', width: 375, height: 900 },
  { name: 'tablet-768', width: 768, height: 1000 },
  { name: 'desktop-1440', width: 1440, height: 900 },
]

for (const s of sizes) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } })
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1600) // lasciar concludere la Dettatura
  await page.screenshot({ path: `${dir}/full-${s.name}.png`, fullPage: true })
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }))
  console.log(s.name, overflow)
  await page.close()
}

await browser.close()
console.log('done')
