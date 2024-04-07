import Link from 'next/link';

import styles from './Member.module.css';

import { Github, Linkedin } from 'lucide-react'

interface MemberProps {
  photoUrl: string
  name: string
  githubUrl: string
  linkedinUrl: string
}

export default function Member({ photoUrl, name, githubUrl, linkedinUrl }: MemberProps) {
  return (
    <div className='flex flex-col'>
      <img src={photoUrl} className={styles.img}/>
      <p className={styles.text}>{name}</p>
      <div className={styles.icons}>
        <Link href={githubUrl}><Github /></Link>
        <Link href={linkedinUrl}><Linkedin /></Link>
      </div>
    </div>
  );
};
