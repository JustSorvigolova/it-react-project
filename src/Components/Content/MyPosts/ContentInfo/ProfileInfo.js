import React from "react"
import color_text from './ProfileInfo.module.css';
import content from './ProfileInfo.module.css';
import {Preloader}  from "../../../common/preloader/Preloader";
import ProfileStatus from "../../ProfileStatus";




const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={content.content}>
            {/*    <div>
 <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' alt={'ddd'} className={color_text.content_img}/>
      </div>*/}
        <div>
              <img src={props.profile.photos.large}/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        </div>
        );
}
export default ProfileInfo;