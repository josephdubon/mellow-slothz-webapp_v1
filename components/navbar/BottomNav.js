import Link from 'next/link'

export default function BottomNav() {
    return (<>
        <p className='lead text-black fw-bold text-center'>
            <span
                className='fw-bold small'>Read through our site and discover how <span
                className='fw-bolder'>Mellow Slothz</span> will provide new opportunities in the near future.</span>
            <br/>
            <br/>
            <div className='small'>
                {' | '}
                <Link href='/information'><a>Information Page</a></Link>
                {' | '}
                <Link href='/information/#mission-statement'><a>Mission
                    Statement</a></Link>
                {' | '}
                <Link href='/information/#who-we-donate-to'><a>Who We Donate
                    To?</a></Link>
                {' | '}
                <Link href='/information/#future-utility'><a>Future Utility</a></Link>
                {' | '}
                <Link href='/information/#mellow-slothz-categories'><a>Mellow Slothz Categories</a></Link>
                {' | '}
                <Link href='/adoption-papers'><a>Adoption Papers</a></Link>
                {' | '}
            </div>
        </p>
    </>)
}