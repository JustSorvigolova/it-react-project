import React from "react"
import post from './Post.module.css';
import img_size from './Post.module.css'
import block from './Post.module.css'

const Post = (props) =>{
    return (
        <div className={block.border_from_block}>

        <img  className={img_size.img_size} src='https://cdn.mos.cms.futurecdn.net/yL3oYd7H2FHDDXRXwjmbMf-320-80.jpg' alt={'dwdw'}/>
        <div className={post.item}>{props.post_name}</div>
       <p>Бунт в ангарской колонии №15 произошел 9 апреля.
           В региональном управлении СК заявили, что в нем участвовали около
           200 заключенных, на участников заведены дела по статьям об организации массовых
           беспорядков (212 УК) и дезорганизации деятельности исправительного учреждения (321 УК).
           Заключенных также обвинили в поджоге зданий на территории колонии.</p>
<div><button className={post.red}>LikesCount  :</button>  {props.LikesCount}</div>
        </div>

    );
}
export default Post;