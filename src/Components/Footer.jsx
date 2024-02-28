import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaStarHalfAlt } from "react-icons/fa";
import google from "../../src/assets/google.png"
import glassroom from "../../src/assets/glassroom.svg"
import star from "../../src/assets/star.png"
import halfStar from "../../src/assets/half-star.png"

function Footer() {
    return (
        <div className='bg-[#0a0a0a] px-[5%] py-16'>
            <div className="flex items-start flex-wrap justify-between gap-6 text-white">
                <div className="space-y-4 max-w-[350px]">
                    <img src={logo} alt="logo" />
                    <p className="text-xs text-gray-300 text-balance leading-5">Hire the perfect Marketing Associates, Sales Development Reps, Account Managers & Executive Assistants for your digital marketing agency.</p>
                    <p className="text-xs text-gray-300">Let’s get connected!!</p>
                    <div className="flex items-center gap-2">
                        <div className="text-white cursor-pointer p-2 hover:text-mainGreen bg-[#333] hover:bg-white transition duration-300">
                            <div className="flex items-center justify-center">
                                <FaFacebook />
                            </div>
                        </div>
                        <div className="text-white cursor-pointer p-2 hover:text-mainGreen bg-[#333] hover:bg-white transition duration-300">
                            <div className="flex items-center justify-center">
                                <FaInstagram />
                            </div>
                        </div>
                        <div className="text-white cursor-pointer p-2 hover:text-mainGreen bg-[#333] hover:bg-white transition duration-300">
                            <div className="flex items-center justify-center">
                                <FaLinkedin />
                            </div>
                        </div>
                        <div className="text-white cursor-pointer p-2 hover:text-mainGreen bg-[#333] hover:bg-white transition duration-300">
                            <div className="flex items-center justify-center">
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-[200px]">
                    <h2 className="font-semibold text-base">About</h2>
                    <ul>
                        <Link to="/blog"><li className="text-xs text-[#d1d5db] hover:text-white transition duration-300">Blogs</li></Link>
                        <Link to="/career"><li className="text-xs pt-1.5 text-[#d1d5db] hover:text-white transition duration-300">Careers</li></Link>
                        <Link to="/podcast"><li className="text-xs pt-1.5 text-[#d1d5db] hover:text-white transition duration-300">Podcasts</li></Link>
                        <Link to="/login"><li className="text-xs pt-1.5 text-[#d1d5db] hover:text-white transition duration-300">Client Login</li></Link>
                        <Link to="/login"><li className="text-xs pt-1.5 text-[#d1d5db] hover:text-white transition duration-300">Associate Login</li></Link>
                    </ul>
                </div>

                <div className="w-[300px] space-y-6">
                    <div className="max-w-[220px] rounded-md cursor-pointer hover:-translate-y-1 transition duration-300 bg-[#222222] p-5 flex items-center gap-2">
                        <img className="w-8" src={google} alt="google" />
                        <div>
                            <p>Google Rating</p>
                            <div className="flex items-center gap-2">
                                <p>4.7</p>
                                <div className="flex gap-1">
                                    <img className="w-4" src={star} alt="" />
                                    <img className="w-4" src={star} alt="" />
                                    <img className="w-4" src={star} alt="" />
                                    <img className="w-4" src={star} alt="" />
                                    <img className="w-4" src={halfStar} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[220px] rounded-md cursor-pointer hover:-translate-y-1 transition duration-300 bg-[#222222] p-5 flex items-center gap-2">
                        <img className="w-8" src={glassroom} alt="glassroom" />
                        <div>
                            <p>Glassdoor Rating</p>
                            <div className="flex items-center gap-2">
                                <p>4.6</p>
                                <div className="flex gap-1">
                                    <img className="w-4" src={star} alt="" />
                                    <img className="w-4" src={star} alt="" />
                                    <img className="w-4" src={star} alt="" />
                                    <img className="w-4" src={star} alt="" />
                                    <img className="w-4" src={halfStar} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
