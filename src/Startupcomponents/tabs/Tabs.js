import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const Tabs = ({
  tabItems,
  withState = false,      
  state = '',
  setState = () => {},
}) => {
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
          return !withState ? (
            <li
              className={`${
                hash?.replaceAll('%20', '') === `#${item}` ? 'active-tab' : ''
              }`}
              onClick={() => push(`#${item}`)}
              key={`tab-${i}`}
            >
              {item}
            </li>
          ) : (
            <li
              className={`${
                state?.toLowerCase() === item?.toLowerCase() ? 'active-tab' : ''
              }`}
              onClick={() => setState(item)}
              key={`tab-${i}`}
            >
              {item}
            </li>
          )
        })}
    </ul>
  )
}

export const ModalTabs = ({
  tabItems,     
  state,
  setState = () => {},
}) => {

  
  return (
    <ul className="applicant-tabs-list">
      {tabItems.length > 0 &&
        tabItems.map((item, i) => {
          return (
            <li
              className={`${
                state === i ? 'active-tab' : ''
              }`}
              onClick={() => setState(i)}
              key={`tab-${i}`}
            >
              {item}
            </li>
          ) 
        })}
    </ul>
  )
}

