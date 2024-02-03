import React from 'react';
import Image from "next/image";

type Props = {
    auction: string
}
export default function AuctionCard({auction}: Props){
    return (
        <a href='#'>
            <div className='w-full bg-gray-200 aspect-video rounded-lg overflow-hidden'>
                <Image src={auction.imageUrl} alt='{auction.}' width={100} height={50} className='object-cover'/>
            </div>
        </a>
    );
}