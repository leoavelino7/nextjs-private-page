import { GetServerSideProps } from 'next'

export default function PrivateSSR() {
  return (
    <div className="container">
      <h1>Private SSR</h1>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token }= req.cookies

  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}