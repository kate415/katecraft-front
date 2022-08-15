import Link from 'next/link'
import { client } from '../libs/client'
import type { Blogs, Blog } from '../types/blogs'

type Props = {
  blogs: Blog[]
}

export default function Home({ blogs }: Props) {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async() => {
  const blogs: Blogs = await client.get({ endpoint: 'blogs' })
  return {
    props: {
      blogs: blogs.contents,
    }
  }
}
