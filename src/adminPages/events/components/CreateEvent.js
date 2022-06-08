import React from 'react'
import { Button, Select, TextField } from '../../../components'
import searchIcon from '../../../assets/icons/searchSm.svg'
import copyIcon from '../../../assets/icons/copy.svg'
import closeIcon from '../../../assets/icons/closesm.svg'
import styles from '../events.module.css'
import { GuestItem } from './GuestItem'

export const CreateEvent = () => {
  return (
    <div className="px-4">
      <form>
        <TextField
          label="Title of Event"
          placeholder="Enter event title"
          className="max_fill mb-4"
        />

        <TextField
          label="Description"
          placeholder="Describe event"
          className="max_fill mb-1"
        />

        <section className="d-flex align-items-center justify-content-end mb-4">
          <p>Add picture:</p>
          <p className="view-link" role="button">
            Upload photo
          </p>
        </section>

        <TextField
          label="Date"
          placeholder="Thursday 17th Oct 2021"
          className="max_fill mb-4"
          type="date"
        />

        <div className="row mb-3">
          <section className="col-lg-6">
            <TextField
              type="time"
              className="max_fill mb-4"
              label="Start Time"
            />
          </section>
          <section className="col-lg-6">
            <TextField type="time" className="max_fill mb-4" label="End Time" />
          </section>
        </div>

        <section className="mb-4">
          <p className="view-link" role="button">
            Add another day
          </p>
        </section>

        <hr className="mb-4" />

        <section className="d-flex align-items-center space-out mb-4">
          <p>Join with:</p>
          <Select
            options={['Zoom', 'Google Meet', 'Skype']}
            defaultValue="Zoom"
          />
        </section>

        <section
          className={`d-flex align-items-center justify-content-between mb-4 ${styles.copyLink}`}
        >
          <p>meet.google.com/jce-wata-fux</p>
          <img src={copyIcon} alt="copy" />
        </section>

        <section
          className="d-flex align-items-center mb-4"
          style={{ columnGap: '1rem' }}
        >
          <p>Notify me :</p>
          <TextField defaultValue="30" className="w-50" />
          <Select options={['Seconds', 'Minutes']} defaultValue="Minutes" />
        </section>

        <hr className="mb-4" />

        <section className={styles?.visible}>
          <p>Visibility</p>
          <Select
            options={['Private', 'Public']}
            className="d-flex"
            defaultValue="Private"
          />
        </section>

        <section className="mb-4">
          <p className="mb-3">Add Guest</p>
          <section className="search-input mb-3">
            <img src={searchIcon} alt="search" />
            <input type="search" placeholder="Search startup list" />
          </section>

          <section className="d-flex align-items-center justify-content-between">
            <GuestItem />
            <img src={closeIcon} alt="close" />
          </section>
        </section>

        <section className="text-right mb-4">
          <Button label="Create" variant="secondary" />
        </section>
      </form>
    </div>
  )
}
