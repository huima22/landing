import React from 'react';
import Image from '../elements/Image';
const NewsFeeds = () => {

return (
 <div className="news-grid">
       <div className="top-story-panel">

       <div className="top-story-panel-inner">
          <div className="top"> Top Story </div>



                <div className="news-article-container">
                        <div className="news-article-container-inner">
                                         <div className='news-headline gc-1-3'> TATs are high due to new processes introduced in Client Central. KYC needs to be created in CC for BCA as LEID will need to be published</div>
                                         <div className='news-picture gc-4-1'> <img style={{width: '100px', height: '80px'}} src={require("./../../assets/images/board3.png")} /> </div>
                                         <div className='news-time gc-1-3'> 2 hours ago </div>
                    </div>
                </div>


                 <div className="news-article-container new-row">
                                        <div className="news-article-container-inner">
                                                         <div className='news-headline gc-1-3'> KYC Portfolio is stable with no material difference month over month </div>
                                                         <div className='news-picture gc-4-1'> <img style={{width: '100px', height: '80px'}} src={require("./../../assets/images/board2.png")} /> </div>
                                                         <div className='news-time gc-1-3'> 8 hours ago </div>
                                    </div>
                      </div>


                   <div className="news-article-container new-row">
                                                         <div className="news-article-container-inner">
                                                                          <div className='news-headline gc-1-3'> Onboarding volumes are reducing due to restrictions placed due to client central remediation efforts. </div>
                                                                          <div className='news-picture gc-4-1'> <img style={{width: '100px', height: '80px'}} src={require("./../../assets/images/board1.png")} /> </div>
                                                                          <div className='news-time gc-1-3'> 10 hours ago </div>
                                                     </div>
                   </div>










       </div>
       </div>

       <div className="picks-for-you-panel">
        <div className="top-story-panel">

           <div className="top-story-panel-inner">
           <div className="top"> Picks for You</div>


                       <div className="news-article-container">
                                        <div className="news-article-container-inner">
                                                         <div className='news-headline gc-1-3'> S2B Next gen has impacted the S2B onboarding time </div>
                                                         <div className='news-picture gc-4-1'> <img src={require("./../../assets/images/board3.png")} /> </div>
                                                         <div className='news-time gc-1-3'> 1 hours ago </div>


                                    </div>
                                </div>

                           <div className="news-article-container new-row">
                                                                                 <div className="news-article-container-inner">
                                                                                                  <div className='news-headline gc-1-3'> We ended Oct at 6.4% overdues for KYC </div>
                                                                                                  <div className='news-picture gc-4-1'> <img src={require("./../../assets/images/board2.png")} /> </div>
                                                                                                  <div className='news-time gc-1-3'> 10 hours ago </div>


                                                                             </div>
                               </div>


                             <div className="news-article-container new-row">
                                                                                   <div className="news-article-container-inner">
                                                                                                    <div className='news-headline gc-1-3'> Client Central issues contributed to higher TAT</div>
                                                                                                    <div className='news-picture gc-4-1'> <img src={require("./../../assets/images/board1.png")} /> </div>
                                                                                                    <div className='news-time gc-1-3'> 10 hours ago </div>


                                                                               </div>
                                             </div>




                               <div className="news-article-container new-row">
                                                                                                                 <div className="news-article-container-inner">
                                                                                                                                  <div className='news-headline gc-1-3'> There are multiple issues with S2B NG</div>
                                                                                                                                  <div className='news-picture gc-4-1'> <img  src={require("./../../assets/images/board4.png")} /> </div>
                                                                                                                                  <div className='news-time gc-1-3'> 12 hours ago </div>


                                                                                                             </div>
                                                                           </div>




                 </div>
              </div>

       </div>
 </div>
);


}

export default NewsFeeds;