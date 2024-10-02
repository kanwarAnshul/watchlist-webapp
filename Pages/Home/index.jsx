import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'

function Home() {
  console.log("this is main home page ")
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 p-4 w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default Home
