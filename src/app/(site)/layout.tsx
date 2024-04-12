import Header from '@/components/header'
import { ReactNode } from 'react'

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main>{children}</main>
      <footer>
        <p>© 2024 Rainha das Peregrinações</p>
      </footer>
    </>
  )
}
