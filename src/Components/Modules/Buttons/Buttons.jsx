

export const MAINBTN = ({ title, bg, textColor }) => {
    return (
        <button className={` ${bg ? `bg-[${bg}] text-[${textColor}]` : 'teal-green-to-deep-blue-gradient text-white'}  px-4 py-2 font-medium  rounded-corners-sm`}>
            {
                title
            }
        </button>
    )
} 