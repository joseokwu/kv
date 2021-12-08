import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export const Tabs = ({ tabItems }) => {
  const history = useHistory()
  const {
    push,
    location: { hash },
  } = history

  useEffect(() => {
    if (hash === '' && tabItems?.length > 0) {
      push(`#${tabItems[0]}`)
    }
  }, [hash, tabItems, push])
  return (
    <ul className="applicant-tabs-list">
      {tabItems.length > 0 &&
        tabItems.map((item, i) => {
          return (
            <li
              className={`${hash === `#${item}` ? 'active-tab' : ''}`}
              onClick={() => push(`#${item}`)}
              key={`tab-${i}`}
            >
              {item}
            </li>
          )
        })}
    </ul>
  )
}
