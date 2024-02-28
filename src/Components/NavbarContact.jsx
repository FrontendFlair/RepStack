import { IoCall } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function NavbarContact() {
    return (
        <div className="px-[5%] py-2 bg-mainGreen flex items-center justify-between flex-col xs:flex-row gap-2">
            {/* contact number */}
            <div className="flex items-center gap-2">
                <IoCall />
                <p className="text-white"><a href="tel:+18555191069">+1 855 519 1069</a></p>
            </div>
            {/* spcial icons */}
            <div className="flex items-center gap-1">
                <div className="text-white cursor-pointer p-2 hover:text-mainGreen hover:bg-white rounded-full transition duration-300">
                    <div className="flex items-center justify-center">
                        <FaFacebook />
                    </div>
                </div>
                <div className="text-white cursor-pointer p-2 hover:text-mainGreen hover:bg-white rounded-full transition duration-300">
                    <div className="flex items-center justify-center">
                        <FaInstagram />
                    </div>
                </div>
                <div className="text-white cursor-pointer p-2 hover:text-mainGreen hover:bg-white rounded-full transition duration-300">
                    <div className="flex items-center justify-center">
                        <FaLinkedin />
                    </div>
                </div>
                <div className="text-white cursor-pointer p-2 hover:text-mainGreen hover:bg-white rounded-full transition duration-300">
                    <div className="flex items-center justify-center">
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarContact
