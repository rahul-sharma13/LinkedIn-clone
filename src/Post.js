//using React flip move too.

import { Avatar } from "@mui/material";
import React , {forwardRef} from 'react';
import "./Post.css";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const  Post = forwardRef(({ name, description, message,photoUrl}, ref) => {
  const firstAlpha = name[0];
  const itsCap = firstAlpha.toUpperCase();

  return (
    // ref = {ref} is used as react needs a pointer regarding the animations
    <div ref={ref} className="post">          
        <div className="post__header">
            <Avatar src={photoUrl}> {itsCap} </Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
        <InputOption Icon={MessageIcon} title="Comment" color="gray"/>
        <InputOption Icon={ShareIcon} title="Share" color="gray"/>
        <InputOption Icon={SendIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
})

export default Post