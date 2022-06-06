import {FaDiscord, FaReddit, FaTwitter} from 'react-icons/fa'
import React from 'react'

export default function IconList() {
    return (<>
        <div className='d-flex justify-content-center'>
            <a href='https://twitter.com/mellowslothz' target='_blank'>
                <FaTwitter className='icon-list' size='2rem'/>
            </a>

            <a href='https://www.reddit.com/r/MellowSlothz/' target='_blank'>
                <FaReddit className='icon-list' size='2rem'/>
            </a>

            <a href='#'>
                <FaDiscord className='icon-list' size='2rem'/>
            </a>
        </div>
    </>)
}