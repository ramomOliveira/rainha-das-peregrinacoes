import StyledComponentsRegistry from '@/lib/registry'
import { Noto_Sans } from 'next/font/google'

import type { Metadata } from 'next'

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--noto-sans' })

export const metadata: Metadata = {
  title: 'Rainha das Peregrinações',
  description:
    'O Mosteiro de Santa Maria da Vitória, mais conhecido como Mosteiro da Batalha.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={notoSans.variable}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
