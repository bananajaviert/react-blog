import '../css/Home.css'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'

const Home = () => {
  return (
      <>
        <Header/>
        <div className='home'>
          <Posts/>
          <Sidebar />
        </div>
      </>
  )
}

export default Home
