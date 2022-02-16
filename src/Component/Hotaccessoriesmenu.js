import React from 'react'
// import Hotitemcard from './Hotitemcard'
const Hotaccessoriesmenu = ({ music, musicCover, smartDevice, smartDevices, home, homeCover, mobileaccessories, mobileaccessoriesCover, lifestyle, lifeStyleCover }) => {
    return (
        <div className="container hotAccessoriesMenu">
            <div className="row">
                <div className="col-4 coveracc">
                    <img src={musicCover || smartDevice || homeCover || mobileaccessoriesCover || lifeStyleCover} alt="img" />
                </div>
                <div className="col-8">
                    <div className="row">
                        {musicCover && music.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-4 col-6 p-1 md-mt-4">
                                    <img src={item.image} className="img-fluid" alt="" />
                                </div>
                            )
                        })}
                        {smartDevice && smartDevices.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-4 col-6 p-1 md-mt-4">
                                    <img src={item.image} className="img-fluid" alt="" />
                                </div>
                            )
                        })}
                        {homeCover && home.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-4 col-6 p-1 md-mt-4">
                                    <img src={item.image} className="img-fluid" alt="" />
                                </div>
                            )
                        })}
                        {mobileaccessoriesCover && mobileaccessories.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-4 col-6 p-1 md-mt-4">
                                    <img src={item.image} className="img-fluid" alt="" />
                                </div>
                            )
                        })}
                        {lifeStyleCover && lifestyle.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-4 col-6 p-1 md-mt-4">
                                    <img src={item.image} className="img-fluid" alt="" />
                                </div>
                            )
                        })}



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hotaccessoriesmenu