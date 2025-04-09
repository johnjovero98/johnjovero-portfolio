'use client'

import Image from "next/image";
import { useState } from "react";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-20 shadow-lg bg-white">
            <header className="relative bg-glass">
                <div className="container mx-auto px-1">
                    <div className="flex justify-between items-center py-1 gap-1">
                        {/* logo */}
                        <h1>
                            <a href="/">
                                <Image
                                    src={"/img/johnjovero-logo.svg"}
                                    alt="John Jovero"
                                    width={111}
                                    height={90}
                                    className="min-w-[80px]"
                                />
                            </a>
                        </h1>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative w-10 h-10 flex items-center justify-center md:hidden"
                        >
                            <svg
                                className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'open' : ''}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line className="line1" x1="3" y1="6" x2="21" y2="6" />
                                <line className="line2" x1="3" y1="12" x2="21" y2="12" />
                                <line className="line3" x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>

                        {/*  mobile navigation */}
                        <nav className={`mobile-menu-navigation ${isOpen ? 'open' : ''} block md:hidden`}>
                            {/* website links */}
                            <ul className="menu-links flex flex-col md:flex-row gap-1 text-h6 pt-1 mb-1">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/#projects">Projects</a>
                                </li>
                                <li>
                                    <a href="/#contact">Contact</a>
                                </li>
                            </ul>


                            {/* social media links */}
                            <ul className="flex gap-1 px-1 pb-1 items-center">
                                <li>
                                    <a href="">
                                        <Image
                                            src={"/img/linkedin.svg"}
                                            alt="Linkedin"
                                            width={30}
                                            height={30}
                                            className="min-w-[30px] min-h-[30px]"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <Image
                                            src={"/img/github.svg"}
                                            alt="GitHub"
                                            width={30}
                                            height={30}
                                            className="min-w-[30px] min-h-[30px]"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </nav>


                        {/* desktop navigation */}
                        <nav className="desktop-menu-navigation hidden">
                            {/* website links */}
                            <ul className="flex flex-col md:flex-row gap-1 text-h6">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/#projects">Projects</a>
                                </li>
                                <li>
                                    <a href="/#contact">Contact</a>
                                </li>
                            </ul>



                            {/* social media links */}
                            <ul className="flex gap-1 ">
                                <li>
                                    <a href="">
                                        <Image
                                            src={"/img/linkedin.svg"}
                                            alt="Linkedin"
                                            width={30}
                                            height={30}
                                            className="min-w-[30px] min-h-[30px]"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <Image
                                            src={"/img/github.svg"}
                                            alt="GitHub"
                                            width={30}
                                            height={30}
                                            className="min-w-[30px] min-h-[30px]"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

        </div>



    );
}