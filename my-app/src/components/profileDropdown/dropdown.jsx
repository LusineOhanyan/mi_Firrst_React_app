import styles from './dropdown.module.css';



const ProfileDropdown = ({togglePopup}) => {
  return (
    <>
      <div className={styles.buttonsContainer}>
        <div
          onClick={() => alert("Go to Account page")}
          className={styles.accountBtn}
        >
          Account
        </div>

        <div
          className={styles.accountLogout}
          onClick={() => togglePopup()}
        >
          Log Out
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
