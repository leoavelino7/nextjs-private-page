// Higher-Order Component
import Cookies from 'js-cookie'
import { useRouter } from 'next/dist/client/router'
import { ElementType, useEffect } from 'react'

export function withAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: unknown) => {
    const router = useRouter()

    useEffect(() => {
      const token = Cookies.get('token')
      
      if(!token) {
        router.replace('/')
      }
    }, [router])

    return <WrappedComponent { ...props } />
  }

  return Wrapper
}