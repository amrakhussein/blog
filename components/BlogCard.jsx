import Link from 'next/link'
import { urlFor } from '../lib/sanity'

export default function BlogCard({ post }) {
  return (
    <>
      <li key={post._id} className="mb-2 flex-row bg-gray-300 rounded-lg p-2 border-2 border-pink-900 hover:border-pink-500">
        <Link href={`/articles/${post.slug.current}`}>
          <a>
         
            <div className="">
              <h1 className="text-2xl text-gray-700 font-bold">{post.title}</h1>
              <div className="text-sm text-gray-700">
                <span className='font-semibold text-gray-600 underline'>First published at:</span> {post.publishedAt}
                <h3 className='font-semibold text-gray-600 underline'>written by: <em className='font-normal'>{post.author.name}</em></h3>
              </div>
              <p className="text-gray-700 mt-4">{post.description}</p>
            </div>
          </a>
        </Link>
      </li>
    </>
  )
}

        //       <figcaption>
        //       <img className="" src={urlFor(post.mainImage).url()} alt="" />
        // </figcaption>