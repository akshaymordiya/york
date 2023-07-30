import React from 'react'

import styles from "./List.module.css";

function List({
  children,
  extendStyle = ""
}) {
  return (
    <ul className={`
      ${styles.ulContainer}
      ${extendStyle ?? ""}
    `}>{children}</ul>
  )
}

List.Item = function ListItem({
  children,
  extendStyle = ""
}){
  return (
    <li className={`
      ${styles.listItem}
      ${extendStyle ?? ""}
    `}>{children}</li>
  )
}

export default List