import { groq } from "next-sanity";
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
        <Menu search={search}/>
        
    </div>
  )
}

export default Category