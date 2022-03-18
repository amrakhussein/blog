import {
  client,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from '../../lib/sanity'
// console.log('urlFor: ', urlFor);

// mainImage {
//     asset-> {
//         _id,
//         url
//     }
// }

const postQuery = `*[_type == 'post' && slug.current == $slug][0]{
    _id,
  publishedAt,
  categories,
  author-> {
      name
  },
  slug,
   mainImage,
  title,
  'content':body[] }`

const fetchOnePost = ({ data }) => {
  const { post } = data
  console.log('post: ', post);
  const article = post.content.map(text =>{
      console.log('text.style', text.style)
      let {style } = text
    if (style === 'h1' || style === 'h2' || style === 'h3' || style === 'h4' || style === 'h5' || style === 'h6') {
      return text.children.map(h => <h2 className='text-2xl font-bold ' key={text}>{h.text}</h2>)
    }else if (style ==='normal') {
        return text.children.map(p => <p className='text-lg pl-2 mt-2' key={text}>{p.text}</p>)

    }
    // return text.style === 'h2' ? text.children : undefined
    } )
  console.log('article: ', article);
  const posts = article?.map(c =>c)
  console.log('posts: ', posts);

  return (
    <article className='max-w-2xl ml-36'>
      <h2 className='pl-2 sm:pl-4 font-bold'> written by: <span className='font-normal underline italic'>{post.author.name} </span></h2>
      dummy data / copied
      <main className='bg-gray-100 m-2 text-gray-700 rounded-md'>
        {/* <img /> */}

        <article className='pl-4 pt-2 shadow-lg'>
         {posts?.map(text => (
             <>
             {text}
             </>
         ))}
        </article>
      </main>
    </article>
  )
}

export const getStaticPaths = async () => {
  // fetch the path for post content
  const paths = await client.fetch(
    `*[_type == 'post' && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
  )
  console.log('paths: from getStaticPaths::::: ', paths)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  // console.log('context: ', context);

  console.log('params: from Props::+++', params)
  const { slug } = params
  // matching current page slug/id to post's slug (fetched by postQuery)
  const post = await client.fetch(postQuery, { slug })

  return {
    props: { data: { post } },
  }
}

export default fetchOnePost
