import HomeDeptCard from "./HomeDeptCard/HomeDeptCard.jsx";

const Dept = () => {
    return (
        <div className="my-[5%] py-[2%]">
            <div>
                <div className=" z-0">
                    <div className="my-4 relative text-[60px] font-extrabold text-center [-webkit-text-stroke:1px_#0092ff] text-transparent md:text-[35px]">D E P A R T M E N T S</div>
                </div>

                <div className="w-[90%] mx-auto my-[3%]">
                    <HomeDeptCard />
                </div>

            </div>
        </div>
    )
}

export default Dept