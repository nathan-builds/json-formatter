import Link from 'next/link';

export const Footer = () => {
    return (
        <div
            className="flex gap-1  mt-auto flex-col-reverse md:flex-row justify-between border-t-[1px] items-center h-[50px] md:h-[50px] text-[#475569]">
            <div className="md:ml-10">&copy;2024 JSON IO. All rights reserved.</div>
            <div className="flex gap-5  md:mr-10 ">
                <Link href={'/contact'}>
                    Contact
                </Link>
                <Link href={'/about'}>
                    About
                </Link>
            </div>
        </div>
    );
};