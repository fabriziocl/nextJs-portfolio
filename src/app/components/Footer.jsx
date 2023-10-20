import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer border border-t-[#20203b] border-l-transparent border-b-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span>
                    <Image
                        src='/images/code-laptop.png'
                        alt='laptop-img'
                        width={30}
                        height={30}
                    />
                </span>
                <p className="text-slate-600">
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer