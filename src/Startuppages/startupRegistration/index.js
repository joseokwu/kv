import React, { useState, useEffect } from 'react'
import { WelcomeMessage, RegCard } from './startup.styled'
import { ProgressBar } from '../../Startupcomponents'
import { StartupProfile } from './components/startupProfile'
import { useActivity } from '../../hooks/useBusiness'
import { PitchDeck } from './components/pitchdeck/Pitchdeck'
import { TeamProfile } from './components/teams'
import { Product } from './components/product'
import { FundRaising } from './components/fundraising'

export const StartUpRegistration = () => {
  const {
    state: { path },
    changePath,
  } = useActivity()

  const [progressStat, setProgressStat] = useState()

  useEffect(() => {
    switch (path) {
      case 1:
        return setProgressStat(0)
      case 2:
        return setProgressStat(40)
      case 3:
        return setProgressStat(60)
      case 4:
        return setProgressStat(80)
      case 5:
        return setProgressStat(100)
      default:
        return progressStat
    }
  }, [path])

  return (
    <>
      <div className="mx-5">
        <div className="container">
          <div
            className=""
            style={{ zIndex: '', background: '#FFFFFF', width: '100%' }}
          >
            <WelcomeMessage>
              <h5>
                Hi Micheal{' '}
                <span style={{ color: 'rgb(199, 249, 15)', marginLeft: '9px' }}>
                  {' '}
                  &#128075;
                </span>{' '}
              </h5>
              <p>Let's customize your experience</p>
            </WelcomeMessage>
            <div style={{ width: '100%' }}>
              <ProgressBar progress={progressStat} />
            </div>
          </div>

          <RegCard>
            <div className="reg-card py-5 px-5">
              {path === 1 && <StartupProfile />}
              {path === 2 && <PitchDeck />}

              {path === 3 && <TeamProfile />}

              {path === 4 && <Product />}
              {path === 5 && <FundRaising />}
            </div>
          </RegCard>
        </div>
      </div>
    </>
  )
}
