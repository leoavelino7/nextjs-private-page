import { withAuth } from "../utils/withAuth"

function PrivateClient() {
  return (
    <div className="container">
      <h1>Private page</h1>
    </div>
  )
}

export default  withAuth(PrivateClient)