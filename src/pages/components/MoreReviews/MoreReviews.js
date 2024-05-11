import { ReviewData } from "@/pages/data/reviewData"


export const MoreReviews = () => {
    return (
        <>
            <div className="more_review_main_container mt-[100px] ">
                <div className="container">
                    <div className="tittle">
                        <h4 className="text-[48px] leading-[48px] font-semibold font-degular text-center mb-[40px]">More reviews</h4>
                    </div>

                    <div className="flex items-center flex-wrap gap-[24px]">
                        {ReviewData.map(data => (
                            <div className="w-full max-w-[calc(100%/4-18px)] py-[32px]">
                                <ul className="flex items-center mb-[20px]">
                                    <li>
                                        <figure className="w-[18px] h-[18px] overflow-hidden">
                                            <img className="w-full h-full object-contain object-center" src="/images/star.svg" alt="" />
                                        </figure>
                                    </li>
                                    <li>
                                        <figure className="w-[18px] h-[18px] overflow-hidden">
                                            <img className="w-full h-full object-contain object-center" src="/images/star.svg" alt="" />
                                        </figure>
                                    </li>
                                    <li>
                                        <figure className="w-[18px] h-[18px] overflow-hidden">
                                            <img className="w-full h-full object-contain object-center" src="/images/star.svg" alt="" />
                                        </figure>
                                    </li>
                                    <li>
                                        <figure className="w-[18px] h-[18px] overflow-hidden">
                                            <img className="w-full h-full object-contain object-center" src="/images/star.svg" alt="" />
                                        </figure>
                                    </li>
                                    <li>
                                        <figure className="w-[18px] h-[18px] overflow-hidden">
                                            <img className="w-full h-full object-contain object-center" src="/images/star.svg" alt="" />
                                        </figure>
                                    </li>
                                </ul>


                                <p className="text-[16px] leading-[22px] font-sfPro font-normal tracking-[0.7px] mb-[16px]">{data.descrip}</p>
                                <p className="font-degular font-semibold text-[20px] leading-[20px] mb-[4]">{data.clientName}</p>

                                <p className="font-spPro text-[#626771] font-medium text-[14px] leading-[24px]">{data.sourceName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}



