import Image from "next/image";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <div className="content testimonials">
      {/* title */}
      <div className="title">Referanslar</div>
      {/* content */}
      <div className="row testimonials-items">
        {/* client item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-carousel default-revs">
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Volkan Bey tanıdığım en bilgili ve becerili üst düzey
                    yöneticilerden biridir. Üretim, verimlilik ve işletme
                    yönetimine dair yetkinlikleri hayranlık vericidir. Ekip
                    oluşturmayı ve ekibi hedeflere uygun şekilde yönetmeyi iyi
                    bilir. Sistem kurma, planlama yapma, ölçme ve denetleme
                    konusunda da oldukça etkilidir. Sonuç odaklı düşünür ve
                    çalışır.
                  </div>
                  <div className="user">
                   
                    <div className="info">
                      <div className="name">Murat Şaylan</div>
                      <div className="company">Çatalkaya Makina - Yönetim Danışmanı</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Aziz Volkan Tevik, iletişimi düzgün, detay odaklı, problem
                    çözme becerisi yüksek, sorumluluk almaktan çekinmeyen, en
                    alt kademedeki çalışanın işini yerinde öğrenerek tüm üretim
                    sürecinin yönetimini başarılı bir şekilde yerine
                    getirebilen, işine hakim, kurumsal bir yapıya rahatlıkla
                    uyum sağlayabilecek, çalışkan bir arkadaşımızdır.
                  </div>
                  <div className="user">
                    
                    <div className="info">
                      <div className="name">Yaşar Durmuş</div>
                      <div className="company">Yaparlar Tarım Ve İnşaat Malzemeleri A.Ş. - İnsan Kaynakları Müdürü</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Kendisi, işinde oldukça deneyimli, kararlı, istikrarlı,
                    sonuç ve müşteri odaklı, iletişim konusunda üstün yetenekli,
                    işini sahiplenen, sorumluluk sahibi, anahtar teslim zorlu
                    bir projede tüm işi verip gerisini bırakabileceğiniz gerçek
                    bir profesyoneldir. Aynı zamanda amatör ruhlu, çalışanları
                    arasında sevilen gerçek bir lider, ekibinin kilit taşı,
                    motivasyon kaynağı, sorunların çözümü, takımına katma değer
                    oluşturan başarılı bir yöneticidir. Karakteri ve saygın
                    duruşu ile firmanızı üst düzeyde temsil edebilen,
                    rakipleriniz tarafından bile saygı ile karşılanan, bilgisi
                    ve tecrübesiyle de saygı ile uğurlanan olgun bir insandır.
                    Çalıştıkça ve yaşadıkça görebileceğiniz, firmanız için
                    olmazsa olmaz, kaçırılmaması gereken bir fırsattır. En
                    önemlisi, kendisi ile çalışmak bir ayrıcalıktır.
                  </div>
                  <div className="user">
                    
                    <div className="info">
                      <div className="name">Oguz Torun</div>
                      <div className="company">Reis Maakina - Servis Hizmetleri Direktörü</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Volkan Bey, sıkı iş disiplinini ve bilgisine sahip,
                    tecrübeli, iyi ahlaklı, aile babası pırlanta değerinde bir
                    kişiliğe saahiptir... Onunla çalışmak bir ayrıcalıktır.
                  </div>
                  <div className="user">
                    
                    <div className="info">
                      <div className="name">Cem Çınar</div>
                      <div className="company">
                        Promaster Ltd. Şti. - Firma Sahibi
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Testimonials;
