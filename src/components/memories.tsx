import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "../styles/memories.module.css";
import img1 from "../assests/mem_img1.png";
import img2 from "../assests/memories/mem1.png";
import img3 from "../assests/memories/mem2.png";
import img4 from "../assests/memories/mem3.png";
import img5 from "../assests/memories/mem4.png";
import img6 from "../assests/memories/mem5.png";
import img7 from "../assests/memories/hackathon1.jpg";
import img8 from "../assests/memories/hacakathon2.jpg";
import img9 from "../assests/memories/hackathon3.jpg";
import img10 from "../assests/memories/hackathon4.jpg";
import img11 from "../assests/memories/hackathon5.jpg";
import Image from "next/image";
import dynamic from "next/dynamic";
const Memories = () => {
    const handleDragStart = (e: any) => e.preventDefault();
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1200: { items: 3 },
    };
    const items = [
        <Image
            key={1}
            alt={"1"}
            className={styles.mem_images}
            src={img1}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={2}
            alt={"2"}
            className={styles.mem_images}
            src={img2}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={3}
            alt={"3"}
            className={styles.mem_images}
            src={img3}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={4}
            alt={"4"}
            className={styles.mem_images}
            src={img4}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <Image
            key={5}
            alt={"5"}
            className={styles.mem_images}
            src={img5}
            onDragStart={handleDragStart}
            role="presentation"
        />,
        // <Image
        //     key={6}
        //     alt={"6"}
        //     className={styles.mem_images}
        //     src={img6}
        //     onDragStart={handleDragStart}
        //     role="presentation"
        // />,
        // <Image
        //     key={7}
        //     alt={"7"}
        //     className={styles.mem_images}
        //     src={img7}
        //     onDragStart={handleDragStart}
        //     role="presentation"
        // />,
        // <Image
        //     key={8}
        //     alt={"8"}
        //     className={styles.mem_images}
        //     src={img8}
        //     onDragStart={handleDragStart}
        //     role="presentation"
        // />,
        // <Image
        //     key={9}
        //     alt={"9"}
        //     className={styles.mem_images}
        //     src={img9}
        //     onDragStart={handleDragStart}
        //     role="presentation"
        // />,
        // <Image
        //     key={10}
        //     alt={"10"}
        //     className={styles.mem_images}
        //     src={img10}
        //     onDragStart={handleDragStart}
        //     role="presentation"
        // />,<Image
        //     key={11}
        //     alt={"11"}
        //     className={styles.mem_images}
        //     src={img11}
        //     onDragStart={handleDragStart}
        //     role="presentation"
        // />,

    ];
    return (
        <div className={styles.maincontainer_mem}>
            <div className={styles.head_mem}>
                <h1>
                    Our <span>Memories</span>
                </h1>
            </div>
            <AliceCarousel
                autoPlay
                infinite
                animationType="fadeout"
                autoPlayInterval={1000}
                animationDuration={1000}
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy={styles.alternate}
            />
        </div>
    );
};
export default dynamic(() => Promise.resolve(Memories), { ssr: false });
