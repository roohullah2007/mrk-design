const images = [
    "/images/Slider Section Images/Group 1261152736 (1) 1.png",
    "/images/Slider Section Images/Rectangle 10.png",
    "/images/Slider Section Images/Rectangle 11.png",
    "/images/Slider Section Images/Rectangle 13.png",
    "/images/Slider Section Images/Rectangle 22.png",
    "/images/Slider Section Images/Rectangle 23.png",
    "/images/Slider Section Images/Rectangle 24.png",
];

export default function ImageSlider() {
    // Duplicate the set so the marquee can loop seamlessly.
    const loop = [...images, ...images];

    return (
        <section className="image-slider">
            <div className="image-slider-track">
                {loop.map((src, index) => (
                    <div className="image-slide" key={index}>
                        <img src={src} alt="" loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}
