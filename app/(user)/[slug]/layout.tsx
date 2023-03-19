import '../../../styles/globals.css'
import ReactWhatsapp from 'react-whatsapp';

export const metadata = {
  title: 'Mano'
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
