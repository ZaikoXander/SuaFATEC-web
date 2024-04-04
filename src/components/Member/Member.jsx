import styles from './Member.module.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Perfil = ({ Url, Name, Github, Linkedin  }) => {  return (
  
      
      <div className={styles.gridItem}>
        <img src={Url} className={styles.img}/>
        <p className={styles.text}>{Name}</p>
        <div className={styles.icons}>
          <a href={Github}>
      <FaGithub className={styles.git} />
      </a>
      <a href={Linkedin} >
      <FaLinkedin className={styles.lkd}/>
      </a>
    </div>
        </div>


    
  );
};

export default Perfil;
