import React from 'react';
import classes from './Post.module.css';

const Post = (props) => { 

    
    return   (
    
    <div className = {classes.item}>
        <img src = 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png' />
        {props.message}
        <div>
        <span> Like </span>
        {props.likesCount}
        </div>
        
    </div>
    

    )

}

export default Post;

