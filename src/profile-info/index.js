import avatarDefault from '../assets/images/profile_default.png'
import classnames from './profile-info.module.css';

const ProfileInfo = () => {
    return (
      <div className='border'>
        <img src={avatarDefault} height={50} width={50} alt="nom et prenom" />
        <div>
            <p className={classnames.rowValue}>Nom <span className={classnames.value}>nom</span></p>
            <p className={classnames.rowValue}>Prenom <span className={classnames.value}>prenom</span></p>
            <p className={classnames.rowValue}>Âge <span className={classnames.value}>age</span></p>
            <p className={`${classnames.rowValue} ${classnames.rowValueEnd}`}>Nbr <span className={classnames.value}>nbr todo</span></p>
        </div>
      </div>
    )  
}

export default ProfileInfo;
