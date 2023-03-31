import { groq } from "next-sanity";
import Head from "next/head";
import Menu from "../../../components/Menu";
import { client } from "../../../lib/sanity.client";


type Props = {
    params: {
        slug: string;
    },
}

export const revalidate = 60;


async function Category({params: {slug}}: Props) {
    //slug query
     const query = groq
    `
    *[slug.current == $slug][0]{
        ..., 
    }
    `
    
    const elems = await client.fetch(query, {slug});

    //obiecte query
    const queryTwo = groq
    `
    *[references("${elems?._id}")]{
        ...,
        image[]{..., asset{...}}
    } | order(title asc)
    `
    const search = await client.fetch(queryTwo)
  return (
    <div>
        <Head>
        <title>Produse Bucuresti</title>
        <meta
          name="description"
          content="Produse Bucuresti - incaltaminte copii la cele mai bune preturi"
          key="desc"
        />
        <meta property="og:title" content="Produse Bucuresti" />
        <meta
          property="og:description"
          content="incaltaminte copii la cele mai bune preturi"
        />
      </Head>
        <Menu search={search}/>
        <div className="preturi-container">
            <h1>Preturi</h1>
            <div className="preturi-wrapper">
            {elems?.preturi?.map((item:string, index:number) => (
                <h3 className="preturi-item" key={index}>{item}</h3>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Category