import Link from 'next/link'
import {FaDiscord, FaReddit, FaTwitter} from 'react-icons/fa'
import React from 'react'

export default function IconList() {
    return (<>
        <div className='d-flex justify-content-center'>
            <Link href='#'><a>
                <FaTwitter className='icon-list' size='2rem'/>
            </a></Link>

            <Link href='#'><a>
                <FaReddit className='icon-list' size='2rem'/>
            </a></Link>

            <Link href='#'><a>
                <FaDiscord className='icon-list' size='2rem'/>
            </a></Link>
        </div>
    </>)
}