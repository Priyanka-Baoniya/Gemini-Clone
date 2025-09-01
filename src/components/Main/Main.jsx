import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">

                {!showResult
                    ?
                    <>
                        <div className="greet">
                            <p><span> Hello Dev</span></p>
                            <p>How can i help you today?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p> Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>  Briefly summarize this concept : Ueban planning </p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>

                            <div className="card">
                                <p> Brainstrome team bonding activitiesfor our work retreat.</p>
                                <img src={assets.message_icon} alt="" />
                            </div>

                            <div className="card">
                                <p> Imorove the redablity of following code.  </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt="" />
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                // <p>{resultData}</p>
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }


                <div className="main-botton">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') { onSent(); } }}
                            value={input} type="text" placeholder='enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>

                    <p className="bottom-info">
                        Gemini can diaplay inaccurate info, including about pepole, so double check it's responce.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main
