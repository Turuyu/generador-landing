import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Generador de Landing Pages',
  description: 'Crea landing pages profesionales para tu empresa en minutos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}