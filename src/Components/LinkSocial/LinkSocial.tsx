import { ReactNode } from 'react'
import styles from './LinkSocial.module.scss'

type LinkSocialProps = {
    link: string,
    title: string,
    image: string,
    id: string,
}

const LinkSocial = ({link , title, image, id} : LinkSocialProps) => {
    return (
        <>
             <a
                className={styles.linkSocial}
                href={link} 
                title={title}
                target="_blank"
                id={id}
                >
                 <img src={image} alt={title} title={title} width="32" height="32" />
                 <span>{title}</span>
            </a>
        </>
    )
}

export default LinkSocial
