import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isHireDropdownOpen, setIsHireDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarBlurred, setIsNavbarBlurred] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleHireDropdown = () => {
        setIsHireDropdownOpen(!isHireDropdownOpen);
    };

    function closeMobileMenu() {
        setIsMobileMenuOpen(false);
    }

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // Check if scroll position is greater than a certain threshold (e.g., 100px)
            if (window.scrollY > 125) {
                setIsNavbarBlurred(true); // Add blur effect to navbar
            } else {
                setIsNavbarBlurred(false); // Remove blur effect from navbar
            }
        };

        // Add event listener for scroll event
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="sticky top-0 z-[100]">
            <nav className={`relative px-[5%] py-2 bg-black text-white flex items-center justify-between ${isNavbarBlurred ? 'blurNavbar' : ''}`}>
                {/* logo */}
                <div>
                    <Link to="/"> <img src={Logo} alt="Logo" /></Link>
                </div>

                {/* navLinks */}
                <div>
                    <ul className="hidden md:flex items-center gap-3 lg:gap-6">
                        <li className="relative">
                            <a
                                href="#"
                                onMouseEnter={() => setIsHireDropdownOpen(true)}
                                onMouseLeave={() => setIsHireDropdownOpen(false)}
                                className="flex items-center"
                            >
                                Hire <GoTriangleDown className="ml-1" />
                            </a>
                            {isHireDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 bg-black text-white shadow-lg"
                                    onMouseEnter={() => setIsHireDropdownOpen(true)}
                                    onMouseLeave={() => setIsHireDropdownOpen(false)}
                                >
                                    <Link to="/marketing-associate" className="block hover:bg-mainGreen whitespace-nowrap py-3 px-6 transition-all duration-300" onClick={closeMobileMenu}>
                                        Marketing Associates
                                    </Link>
                                    <Link to="/sales-development" className="block hover:bg-mainGreen whitespace-nowrap py-3 px-6 transition-all duration-300" onClick={closeMobileMenu}>
                                        Sales Development Reps - Keep Your sales Cycle Rolling!
                                    </Link>
                                    <Link to="/account-manager" className="block hover:bg-mainGreen whitespace-nowrap py-3 px-6 transition-all duration-300" onClick={closeMobileMenu}>
                                        Account Managers
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li><a href="/" onClick={scrollToTop}>Why RepStack</a></li>
                        <li><a href="/" onClick={scrollToTop}>Client Reviews</a></li>
                        <li><a href="/" onClick={scrollToTop}>Our Roles</a></li>
                        <li> <Link to="/podcast" onClick={scrollToTop}> Media Library </Link></li>
                        <li><Link to="/blog" onClick={scrollToTop}>Blogs</Link></li>
                        <li><Link to="career" onClick={scrollToTop}>Careers</Link></li>
                    </ul>
                </div>

                {/* mobile menu icon */}
                <div className="block md:hidden bg-white text-mainGreen p-1 rounded-sm cursor-pointer" onClick={toggleMobileMenu}>
                    {
                        isMobileMenuOpen ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />
                    }
                </div>

            </nav>

            {/* mobile navLinks */}
            <div>
                <ul className={`mobileNavbar ${isMobileMenuOpen ? 'openMenu' : ''} flex flex-col md:hidden pl-[5%] gap-3 lg:gap-6 absolute top-[70px] bg-black text-white w-full left-0 right-0`}>
                    <li className="relative pt-3">
                        <a
                            href="#"
                            onClick={toggleHireDropdown}
                            className="flex items-center"
                        >
                            Hire <GoTriangleDown className="ml-1" />
                        </a>
                        {isHireDropdownOpen && (
                            <div className="top-full left-0 bg-black text-white shadow-lg">
                                <Link to="/marketing-associate" className="block hover:bg-mainGreen whitespace-nowrap py-3 px-6 transition-all duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                                    Marketing Associates
                                </Link>
                                <Link to="/sales-development" className="block hover:bg-mainGreen whitespace-nowrap py-3 px-6 transition-all duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                                    Sales Development Reps - Keep Your sales Cycle Rolling!
                                </Link>
                                <Link to="/account-manager" className="block hover:bg-mainGreen whitespace-nowrap py-3 px-6 transition-all duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                                    Account Managers
                                </Link>
                            </div>
                        )}
                    </li>
                    <li><a href="" onClick={scrollToTop}>Why RepStack</a></li>
                    <li><a href="" onClick={scrollToTop}>Client Reviews</a></li>
                    <li><a href="" onClick={scrollToTop}>Our Roles</a></li>
                    <li> <Link to="/podcast" onClick={scrollToTop}> Media Library </Link></li>
                    <li><Link to="/blog" onClick={scrollToTop}>Blogs</Link></li>
                    <li className="pb-3"><Link to="career" onClick={scrollToTop}>Careers</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
