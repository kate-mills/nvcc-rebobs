import * as React from 'react'
import * as styles from './index.module.css'

import Block from '../Block'

import theHub from './images/the-hub.svg'

import imageData from './imageData'

const Footer = ({ children }) => {
  return (
    <Block bgColor={'var(--yellow)'}>
      <footer className={styles.footer}>
        <div className={`${styles.flex}`}>
          <h3>PROUDLY SUPPORTED BY</h3>
        </div>
        <div className={`${styles.flex}`}>
          <a rel="noreferrer" href="http://www.thehubnapa.com" target="_blank">
            <img src={theHub} alt="The Hub Napa Logo" width={203} />
          </a>
        </div>
        <div className={`${styles.flex} ${styles.flexWrap}`}>
          {imageData.map(({ name, url, width, href }) => {
            return (
              <a key={name} href={href} target="_blank" rel="noreferrer">
                <img src={url} alt={`${name} logo`} width={width}
              />
              </a>
            )
          })}
        </div>

        <div className={`${styles.flex}`}>
          <p> © {new Date().getFullYear()} NAPA VALLEY COMPOSITE CYCLING</p>
        </div>
      </footer>
    </Block>
  )
}

export default Footer
