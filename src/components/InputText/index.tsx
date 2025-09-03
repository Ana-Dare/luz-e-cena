import React from 'react'
import styles from './input.module.css'

const InpuText = ({...props}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.input} {...props}/>
  )
}

export default InpuText