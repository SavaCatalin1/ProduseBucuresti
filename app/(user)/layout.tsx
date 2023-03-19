import { groq } from 'next-sanity'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { client } from '../../lib/sanity.client'
import '../../styles/globals.css'

export const metadata = {
  title: 'Mano'
}

export const revalidate = 60;

export async function generateStaticParams(){
  const query = groq
`
  *[_type=='produse']{
    slug
  } 
`
const slugs: Category[] = await client.fetch(query)
const slugRoutes = slugs.map((slug) => slug.slug.current)

return slugRoutes.map(slug => ({
  slug,
}))
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const query = groq
  `
    *[_type=='produse']{
      ...
    } | order(title asc)
  `

    const categories = await client.fetch(query);
  return (
    <html lang="en">
      <body>
        <Navbar categories={categories}/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
