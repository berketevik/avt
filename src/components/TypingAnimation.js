import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = ({ data }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data
        ? data
        : [
            "Üretim sistemleri kurulumu",
            "İşletmelerde verimlilik arttırma",
            "Stratejik Yönetim / Stratejik Planlama",
            "Kalite",
            "Robot Otomasyon",
            "Yalın Üretim",
            "Yönetim Danışmanlığı",
            "Kurumsallaşma",
            "Mavi Yaka / Beyaz Yaka motivasyon",
            "ÜrGe /ArGe",
            "ERP entegrasyonu"
          ], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return <div className="subtitle subtitle-typed" ref={el}></div>;
};
export default TypingAnimation;
