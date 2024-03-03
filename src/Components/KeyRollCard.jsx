import { Link } from 'react-router-dom';

function KeyRollCard(props) {
    return (
        <div className='w-full'>
            <h2 className='text-center text-2xl font-semibold'>{props.title}</h2>
            <div className="card w-full h-[380px] bg-black rounded-3xl shadow-2xl mt-4"></div>
            <div className="flex flex-col justify-between h-44">
                <p className='text-balance pt-5'>{props.desc}</p>
                <div className='flex justify-center my-5'>
                    <Link to={props.url} className='shadow-2xl rounded-full border-2 border-mainGreen px-5 py-1.5 text-mainGreen hover:bg-mainGreen hover:text-white transition duration-500 '>{props.btnTitle}</Link>
                </div>
            </div>
        </div>
    );
}

export default KeyRollCard;
