/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import { BannerDiv, BannerDots, BannerIdvDot, BannerImg, BannerSlider } from "../../styles/banner";

export default function Banner(props){
    //images need to be an array of images
    //alt needs to be an array of alternative text for the images
    let { allImages, alt } = props
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null)
    const delay = 3000;

    //For the slideshow to automatically change:
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => 
            setIndex(prevIndex => 
                prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
            ), delay
        )

        return () => {
            resetTimeout()
        }
    }, [index])

    let resetTimeout = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    return (
        <BannerDiv>
            <BannerSlider 
                style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
            >
                {
                    allImages.map((image, index) => {
                        return(
                            <>
                                <BannerImg
                                    key={`img${index}`}
                                    src={image}
                                />
                                    {/* <BannerDots>
                                        {
                                            allImages.map((_, index) =>
                                                <BannerIdvDot 
                                                    key={`dot${index}`}
                                                    className={`slideshowDot${index === index ? " active" : ""}`}
                                                    onClick={() => {
                                                        setIndex(index)
                                                    }}
                                                />
                                            )
                                        }
                                    </BannerDots> */}
                                {/* </BannerImg> */}
                            </>
                        )
                    })
                }

                {/* <BannerDots>
                    {
                        allImages.map((_, index) =>
                            <BannerIdvDot 
                                key={`dot${index}`}
                                className={`slideshowDot${index ? " active" : ""}`}
                                onClick={() => {
                                    setIndex(index)
                                }}
                            />
                        )
                    }
                </BannerDots> */}
            </BannerSlider>
            <BannerDots>
                    {
                        allImages.map((_, dotIndex) =>
                            <BannerIdvDot 
                                key={`dot${dotIndex}`}
                                className={`slideshowDot${dotIndex === index ? " active" : ""}`}
                                onClick={() => {
                                    setIndex(dotIndex)
                                }}
                            />
                        )
                    }
                </BannerDots>
        </BannerDiv>
    )
}
