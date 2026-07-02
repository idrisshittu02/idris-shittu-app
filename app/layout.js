import './globals.css'

export const metadata = {
  title: 'IDRiS-ShIttU | UI/UX Designer & Developer',
  description: 'Personal portfolio of Idris Shittu — UI/UX Designer at ZojaPay',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
