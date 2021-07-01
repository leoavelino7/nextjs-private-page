import Cookies from 'js-cookie'
import { addDays } from 'date-fns'

export default function Home() {
  function signIn() {
    Cookies.set('token', 'custom-token-here', {
      expires: addDays(new Date(), 1)
    })
  }
  
  function signOut() {
    Cookies.remove('token')
  }

  return (
    <div className="container">
      <h1>Public page</h1>

      <div>
        <button type="button" onClick={signIn}>
          Sign in
        </button>

        <button type="button" onClick={signOut}>
          Sign out
        </button>
      </div>

      <style jsx>{`
          .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `
      }
      </style>
    </div>
  )
}