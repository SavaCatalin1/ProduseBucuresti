
import Newsletter from '../../../components/Newsletter'
import '../../../styles/globals.css'

export const metadata = {
  title: 'Produse Bucuresti'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
        <div>
            {children}
        </div>
  )
}
