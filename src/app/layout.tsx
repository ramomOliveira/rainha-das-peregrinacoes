import StyledComponentsRegistry from '@/lib/registry'

import type { Metadata } from 'next'

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
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
