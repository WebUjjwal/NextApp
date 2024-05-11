

import playhtCardData from '@/pages/data/data'
import style from './LovePlayht.module.css'
import Slider from "react-slick";

// import img from ''

function LovePlayht() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        nav: false,

        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 716,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className={style.love_playht_main_container}>
                <div className="container">
                    <div className={`${style.tittleSection} text-center`}>
                        <p className={`${style.tag} text-18px font-semibold font-sfMono inline-block align-middle mb-[16px]`}>PRODUCT REVIEWS</p>
                        <h2 className={`${style.heading} text-74px leading-[74px] font-degular font-semibold mb-[24px] `}>Why people love PlayHT</h2>
                        <small className='text-20px leading-[24px] font-normal font-sfPro'>The fastest text-to-speech platform loved by <br />businesses, creators and developers</small>
                    </div>

                    <div className="playht_card_container my-[40px]">


                        <Slider {...settings}>
                            {playhtCardData.map(data => (

                                <div className="p-[12px]">
                                    <div className="min-h-[280px] w-full max-w-[100%
                                    ] py-[36px] px-[24px] bg-[#000000]  rounded-[16px]" key={data.id}>
                                        <div className="gap-[4px] flex items-center mb-[32px]">
                                            <figure className="w-[36px] h-[36px] rounded-[800px] border-2 border-solid border-[#fff] overflow-hidden">
                                                <img src={data.userProfile} alt="" />
                                            </figure>
                                            <div className="gap-[8px] flex items-center">
                                                <p className='text-[#fff] font-degular text-20px leading-[20px] 
                                        font-medium'>{data.userName}</p>
                                                <figure className="mt-[2px] w-[20px] h-[20px] overflow-hidden">
                                                    <img src="/images/verified.png" alt="" />
                                                </figure>
                                            </div>
                                        </div>

                                        <div className="'">
                                            <p className='text-[#fff] font-degular text-20px leading-[20px] font-medium mb-[16px]'>{data.thought}</p>

                                            <div className='hover:brightness-0 hover:invert  ease-out' style={{ width: 'fit-content' }}>
                                                <a href="" style={{ width: 'fit-content' }} className='inline text-[#8E909F] text-[14px] leading-[24px] font-sfPro font-medium flex items-center gap-[7.27px]'>Read this post
                                                    <i><img src="/images/icon.svg" alt="" /></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="company_app">
                        <ul className='flex items-center gap-[50px] px-[188px] mb-[40px] 1199px:px-[70px] 991px:px-[0]'>
                            <li><a href="" className='opacity-[.4] hover:opacity-[.7]'><img src="/images/Thomson-Reuters svg.svg" alt="" /></a></li>
                            <li><a href="" className='opacity-[.4] hover:opacity-[.7]'><img src="/images/Amazon.svg" alt="" /></a></li>
                            <li><a href="" className='opacity-[.4] hover:opacity-[.7]'><img src="/images/sales.svg" alt="" /></a></li>
                            <li><a href="" className='opacity-[.4] hover:opacity-[.7]'><img src="/images/HyundaiMotorIndia.svg" alt="" /></a></li>
                            <li><a href="" className='opacity-[.4] hover:opacity-[.7]'><img src="/images/Verizon.svg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LovePlayht