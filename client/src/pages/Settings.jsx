import '../css/Settings.css'

import Sidebar from '../components/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settings-wrapper">

        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete  Account</span>
        </div>

        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-profile-picture">
            <img
              src="https://keyframemagazine.org/wp-content/uploads/2021/02/Abelle-Hayford-2-scaled.jpg"
              alt="" />
            <label htmlFor="file-input">
              <i className="settings-pp-icon far fa-user-circle"></i>
            </label>
            <input type="file" id='file-input' style={{ display: 'none' }} />
          </div>

          <label>Username</label>
          <input type="text" placeholder='Marco' />

          <label>Email</label>
          <input type="email" placeholder='mrcnbng@gmail.com' />

          <label>Password</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
