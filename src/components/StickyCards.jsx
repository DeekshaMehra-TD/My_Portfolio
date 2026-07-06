import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StickyCards({
  cards = [],
  className = "",
  containerClassName = "",
  imageClassName = "",
  bgColor = "#FAFAF8",
}) {
  const stickyRef  = useRef(null);
  const imageRefs  = useRef([]);
  const triggerRef = useRef(null); // track only OUR ScrollTrigger instance

  useEffect(() => {
    const images = imageRefs.current.filter(Boolean);
    const total  = images.length;
    if (total === 0 || !stickyRef.current) return;

    const init = () => {
      // Kill only our own trigger — never touch others
      if (triggerRef.current) {
        triggerRef.current.kill(true);
        triggerRef.current = null;
      }

      // Reset card positions
      gsap.set(images[0], { y: "0%", scale: 1, rotation: 0, clearProps: "none" });
      for (let i = 1; i < total; i++) {
        gsap.set(images[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stickyRef.current,
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
          invalidateOnRefresh: true,
          onRefresh: () => {
            // recalculate end when screen size changes
            tl.scrollTrigger.end = window.innerHeight * (total - 1);
          },
        },
      });

      for (let i = 0; i < total - 1; i++) {
        tl.to(images[i],     { scale: 0.7, rotation: 5, duration: 1, ease: "none" }, i);
        tl.to(images[i + 1], { y: "0%",                 duration: 1, ease: "none" }, i);
      }

      triggerRef.current = tl.scrollTrigger;
    };

    init();

    // Debounced resize — reinit only our trigger
    let timer;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        init();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timer);
      if (triggerRef.current) {
        triggerRef.current.kill(true);
        triggerRef.current = null;
      }
    };
  }, [cards]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={stickyRef}
      className={`relative flex w-full items-center justify-center overflow-hidden p-3 lg:p-8 ${className}`}
      style={{
        height: "100vh",
        backgroundColor: bgColor,
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
      }}
    >
      <div
        className={`relative w-full overflow-hidden rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl ${containerClassName}`}
        style={{ height: "90vh" }}
      >
        {cards.map((card, i) => (
          <img
            key={card.id}
            src={card.image}
            alt={card.alt || ""}
            className={`absolute h-full w-full object-cover rounded-2xl ${imageClassName}`}
            ref={(el) => { imageRefs.current[i] = el; }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </div>
  );
}

export default StickyCards;
