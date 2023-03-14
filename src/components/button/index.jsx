import React, { Component } from 'react'
import styles from './button.module.scss'

const button = ({texto}) => {
  return (
    <button className={styles.btn}>
      {texto}
      </button>
  )
}

export default button