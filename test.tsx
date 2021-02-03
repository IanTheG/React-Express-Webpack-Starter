import React, { useEffect, useState } from 'react'
import getMystery from '../utils/api'
import { MysteryI, SceneI } from '../utils/interfaces'
import * as Prayers from '../utils/prayers'
import Scenes from './Scene'

const Mystery: React.FC<{name: string}> = ({ name }): JSX.Element | null => {

  const [selectedMysteries, setSelectedMysteries] = useState<MysteryI>()

  useEffect(() => {
    getMystery(name)
      .then((res) => setSelectedMysteries(res.data))
      .catch(err => console.error(err))
  }, [name])

  return (
    <>
      {selectedMysteries ? (
        Object.keys(selectedMysteries).map((decadeNumber, idx) => {
          let currentMystery: keyof MysteryI = decadeNumber as keyof MysteryI
          return (
            <div key={idx.toString()}>
              <div className="container">
                <h2>The {decadeNumber} {name} Mystery is {selectedMysteries[currentMystery].name}.</h2>
                {/* Image of the current mystery */}
                <img />
                <p className="prayer">{Prayers.OUR_FATHER[0]}</p>
                <p className="prayer">{Prayers.OUR_FATHER[1]}</p>
              </div>
              {Object.keys(selectedMysteries[currentMystery]).map((scene, idx) => {
                if (scene !== 'name' && scene !== 'number') {
                  return (
                    <div key={idx.toString()} className="container">
                      <h1 className="">The {decadeNumber} {name} Mystery</h1>
                      <h2 className="">{selectedMysteries[currentMystery].name}</h2>
                      <p className="prayer">{Prayers.HAIL_MARY[0]}</p>
                      <p className="prayer">{Prayers.HAIL_MARY[1]}</p>
                    </div>
                  )
                }
              })}
              <div className="container">
                <p className="prayer">{Prayers.GLORY_BE[0]}</p>
                <p className="prayer">{Prayers.GLORY_BE[1]}</p>
                <p className="prayer">{Prayers.FATIMA_PRAYER[0]}</p>
              </div>
            </div> )
        }))
      : null}
    </>
  )
}

export default 