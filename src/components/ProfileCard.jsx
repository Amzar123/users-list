import './ProfileCardStyle.css';


const ProfileCard = (props) => {
    return (
        <div className='profile-card'>
            <div className='flex'>
                <div className='flex-item'>
                    <img src="/img/profile.png" className='profile-img' alt="" />
                </div>
                <div className='flex-item'>
                    <p>Nama: {props.name}</p>
                    <p>Email: {props.email}</p>
                    <p>Username: {props.username}</p>
                </div>
                <div className='flex-item'>
                    <button className='button-delete'>Delete</button>
                    <button className='button-update'>Update</button>
                </div>
            </div>
        </div>   
    )
}

export default ProfileCard;