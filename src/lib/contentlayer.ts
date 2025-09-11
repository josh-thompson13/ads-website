// Shim around contentlayer to avoid hard crashes if it's not installed yet.
// In a full setup, this re-exports from `contentlayer/generated`.
type Post = {
  _id: string
  slug: string
  title: string
  date: string
  description: string
  cover?: string
  url: string
  body?: { code?: string }
}

let allPosts: Post[] = []
let MDXContent: (props: any) => JSX.Element | null = () => null

try {
  // Avoid static analysis bundling by using eval
  // eslint-disable-next-line no-eval
  const req = eval('require') as any;
  const gen = req('contentlayer/generated') as any;
  allPosts = gen.allPosts as Post[];
  MDXContent = gen.MDXContent as typeof MDXContent;
} catch {
  // fallbacks are defined above
}

export { allPosts, MDXContent }
