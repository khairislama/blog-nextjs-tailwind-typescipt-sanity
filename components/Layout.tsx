import Head from 'next/head'
import Header from './Header'

interface LayoutProps {
  title: string
  keywords: string
  description: string
  children: React.ReactNode
}

function Layout({ title, keywords, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="mx-auto max-w-7xl">
        <Header />
        {children}
      </div>
    </>
  )
}

Layout.defaultProps = {
  title: 'Medium 2.0 Home | Blog clone',
  description: 'Find the latest and hottest blog topics on the new medium 2.0',
  keywords: 'medium, blog, clone',
}

export default Layout
