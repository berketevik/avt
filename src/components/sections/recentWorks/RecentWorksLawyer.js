import Isotope from "isotope-layout";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksLawyer = () => {
  // useEffect(() => {
	// 	const container = containerRef.current;
	// 	let PSPDFKit;

	// 	(async function () {
	// 		PSPDFKit = await import('pspdfkit');

	// 		if (PSPDFKit) {
	// 			PSPDFKit.unload(container);
	// 		}

	// 		await PSPDFKit.load({
	// 			container,
	// 			document: '/pdsf/Mavi.pdf',
	// 			baseUrl: `${window.location.protocol}//${window.location.host}/`,
	// 		});
	// 	})();

	// 	return () => PSPDFKit && PSPDFKit.unload(container);
	// }, []);



  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Kaleme aldığım makalalerim</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              Tümü
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("photo")}`}
            onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="photo" />
              Üretim
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("eff")}`}
            onClick={handleFilterKeyChange("eff")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="eff" />
              Verimlilik
            </label>
          </div>
       
          <div
            className={`f_btn ${activeBtn("design")}`}
            onClick={handleFilterKeyChange("design")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="design" />
              Genel Yönetim
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* WorkItem */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/kurum.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/kurum.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Kurumsallaşma adımları</h1>
                        <div className="blog-detail">Genel Yönetim</div>
                        <div className="blog-content">
                          <p>
                            Kurumsallaşma, bir şirketin ya da organizasyonun
                            belirli kurallar ve süreçler çerçevesinde
                            yürütülmesidir. Kurumsallaşma, şirketin hedeflerine
                            ulaşmasına yardımcı olur ve aynı zamanda şirketin
                            düzenli ve etkin bir şekilde işletilmesini
                            sağlarken, şirketin çalışanlarının da davranışlarını
                            belirleyen bir yapı oluşturarak onların da belirli
                            kurallar ve bir düzen içerisinde çalışmalarına
                            olanak tanır. Bu durum, şirketin çalışanları
                            arasında düzen ve uyum sağlarken çalışan motivasyonu
                            üst seviyeye çıkarır ve bu da şirketin verimliliğini
                            artırır.
                          </p>
                          <p>
                            Kurumsallaşma adımlarını tamamlamış firmalarda
                            aşağıdaki temel değişimlerin hayata geçirildiği
                            görülür;
                          </p>

                          <ul>
                            <li>
                              Genellikle daha büyük işletmelerdir ve daha fazla
                              çalışanı vardır.
                            </li>
                            <li>
                              İşletme belli bir yapı ve kurallar çerçevesinde
                              yürütülür ve çalışanlar işlerini düzenli ve etkin
                              bir şekilde yaparlar.
                            </li>
                            <li>
                              Çalışanlarını işe alım, eğitim ve yönetim
                              süreçlerini düzenli bir şekilde yürütürler.
                            </li>
                            <li>
                              İşletmeleriyle ilgili bilgi ve haberleri düzenli
                              olarak paylaşırlar.
                            </li>
                            <li>
                              İşyeri kültürünü belirleyen kurallar ve değerler
                              oluştururlar.
                            </li>
                            <li>
                              Müşterilerine düzenli ve kaliteli hizmet vermeye
                              önem verirler.
                            </li>
                            <li>
                              Yıllık veya uzun dönemli hedeflerine ulaşmak için
                              bir işletme planı oluştururlar.
                            </li>
                            <li>
                              İç denetim mekanizmaları ile işletmelerinin
                              işleyişini ve finansal durumunu sürekli olarak
                              denetlerler.
                            </li>
                            <li>
                              Marka değerlerini korumaya özen gösterirler ve bu
                              değeri artırmak için çalışırlar.
                            </li>
                          </ul>
                          <h5>İŞLETMELERDE KURUMSALLAŞMA ADIMLARI:</h5>
                          <p>
                            1. İşletme Modeli Belirleme: Kurumsallaşma sürecinin
                            başlangıcında, işletmenin ne tür faaliyetler içinde
                            olacağını ve bu faaliyetleri nasıl
                            gerçekleştireceğini belirlenmelidir. Bu, genelde
                            mevcut firmalar için zaten belirli olan ve kağıda
                            dökülmesi nispeten kolay bir adım olacaktır.
                          </p>
                          <p>
                            2. Hedefleri Belirleme: Kurumun işletme modeli ve
                            faaliyetleri çerçevesinde uzun, kısa ve orta vadeli
                            hedefler belirlemek önemlidir.
                          </p>
                          <ul>
                            <li>
                              Şirketin geçmiş performansını inceleyin. Şirketin
                              nereden geldiğini ve nereye gittiğini anlamak
                              için, şirketin mevcut durumu ile ilgili tüm
                              verileri toplanmalı ve analiz edilmelidir
                            </li>
                            <li>
                              Şirketin mevcut ve gelecekteki hedeflerini
                              belirleyin. Şirketin amacını ve hedeflerini çok
                              iyi anlamak önemlidir.
                            </li>
                            <li>
                              Şirketin uzun vadeli hedeflerine ulaşmak için kısa
                              ve orta vadeli hedefler belirlemek önemlidir. Uzun
                              vadeli hedeflere ulaşılması için ara hedefler
                              şeklinde belirlenmiş hedefler ana amaca
                              ulaşılmasını kolaylaştıracak ve sürecin
                              izlenmesini basitleştirecektir.
                            </li>
                            <li>
                              Ulaşılması gereken hedefleri sınıflandırın. Her
                              hedefin geçici veya sürekli olması, işlevsel veya
                              stratejik olması gibi özellikleri göz önünde
                              bulundurulmalıdır.
                            </li>
                            <li>
                              Hedefleri ölçümleyin. Bu, şirketin hedefleri ne
                              kadar başarılı bir şekilde gerçekleştirdiğini
                              anlamak için önemlidir.
                            </li>
                            <li>
                              Hedefleri sık sık gözden geçirin. Şirketin amacı
                              ve faaliyetleri veya piyasa koşulları
                              değiştiğinde, hedeflerin gözden geçirilmesi ve
                              gerekli ayarlamaların yapılması gereklidir. Buna
                              PUKO döngüsü denir. Hedefleri SWOT yöntemi ile
                              stratejik anlamda değerlendirmek önemlidir.
                            </li>
                          </ul>
                          <p>
                            3. Yönetim Kurulu Oluşturma: Kurumsallaşma sürecinin
                            bir parçası olarak, kurumun yönetim kurulunu
                            oluşturmak gerekir. Yönetim kurulu, firma için
                            stratejik kararların alınmasında ve yönetimin
                            denetlenmesinde çok önemli bir rol oynayacaktır.
                            Yönetim kurulu, gerektiğinde değişiklikler
                            yapabilecek ve kurumsal yönetim uygulamalarının
                            denetlenmesine yönelik raporlar sunabilecektir.
                          </p>
                          <p>4. Yönetim Sistemi Geliştirme:</p>
                          <ul>
                            <li>
                              Kurumsal Yönetim Kuralları: Kurumsallaşma
                              sürecinde, firmanın yönetim sisteminin
                              geliştirmesi için, öncelikle kurumsal yönetim
                              kurallarının oluşturulması gerekir. Bu kurallar,
                              özellikle firma içerisinde yönetim haklarını,
                              sorumluluklarını, görev dağılımlarını ve
                              yetkilerin nasıl dağıtılacağını belirleyen
                              firmanın yönetim yapısını tanımlamalıdır
                            </li>
                            <li>
                              İdari Yönetim Oluşturulması: İdari yönetim, firma
                              içinde yönetimin gerçekleştirilmesinde çok önemli
                              bir rol oynayacak ve günlük işlerin organizasyonu,
                              kişi ve kaynakların yönetimi, kararların
                              uygulanması ve denetiminin yapılması gibi temel
                              görevleri üstlenecektir.
                            </li>
                            <li>
                              Çalışanların Eğitim ve Gelişiminin Sağlanması:
                              Kurumsallaşma sürecinde çalışanların eğitim ve
                              gelişiminin sağlanması son derece önemlidir. Bu,
                              firma içindeki iş süreçlerinin verimli bir şekilde
                              yürütülmesine ve standartlarının yükseltilmesine
                              yardımcı olacaktır. Eğitim ve gelişim,
                              çalışanların kurumsal yönetim kurallarına uyma
                              konusunda bilinçlendirilmesi ve kurumsallaşma
                              sürecinin başarıyla tamamlanmasını sağlayacaktır.
                            </li>
                          </ul>
                          <p>
                            5. İş Süreçlerini Belirleme ve İyileştirme:
                            İzlenebilirliğin sağlanması amacıyla kurumun iş
                            süreçlerini belirlemek ve iyileştirmek gerekir. Tüm
                            süreçler gözden geçirilerek birer iş akış şeması
                            şeklinde tanımlanmalı, geliştirilmeli ve
                            uygulamaların takibi denetlenmelidir.
                          </p>
                          <p>
                            6. İnsan Kaynağı Yönetimi: Bütün firmalar için en
                            değerli kaynak olan insan kaynağı yönetiminin
                            belirlenmesi ve geliştirmek gerekir.
                          </p>

                          <ul>
                            <li>
                              Öncelikle işe alımından başlamak üzere her bir
                              insan kaynakları faaliyetinin başarılı bir şekilde
                              uygulanmasını gerektirir. İşe alımının
                              başarısızlık riskini azaltmak için; işe alım
                              sürecinin detaylı bir şekilde planlanması, profil
                              arayışının doğru ve hedefe yönelik yapılması,
                              güvenilir seçim süreçlerinin uygulanması ve
                              kişinin yetenekleri ve potansiyelini
                              değerlendirecek uygun değerlendirme metotlarının
                              seçilmesi gerekir.
                            </li>
                            <li>
                              Çalışanların performanslarını izlemek, ödül ve
                              cezai davranışlarını belirlemek, verimliliği
                              artırmak ve çalışan memnuniyetini ölçmek gibi
                              amaçlarını gerçekleştirmek için kurumsal eğitim ve
                              geliştirme programları oluşturulmalıdır. Bu
                              programlar, çalışanların kariyer gelişimlerini
                              desteklemek, kurumsal kültüre katkıda bulunmak ve
                              çalışanların potansiyelini ön plana çıkarmak için
                              de kullanılabilir.
                            </li>
                            <li>
                              İnsan kaynaklarının yönetiminin belirlenmesi
                              amacıyla firma içindeki çalışanların arzuları,
                              beklentileri ve ihtiyaçlarının anlaşılması
                              gerekir. Ayrıca, çalışanların kişisel ve mesleki
                              gelişimlerinin desteklenmesi ve motivasyonlarını
                              artırıcı ödüllerin sağlanması da önemlidir.
                            </li>
                            <li>
                              İnsan kaynaklarının geliştirilmesi için,
                              çalışanların yeteneklerini geliştirme ve
                              yeteneklerini kullanma konusunda destek
                              sağlanmalıdır. Bu amaçla yöneticilerin
                              çalışanların becerilerini geliştirmek için eğitim
                              programlarına katılmayı teşvik edecek bir sistem
                              kurulası önerilir. Ayrıca, çalışanlarının
                              becerilerini geliştirmek için zaman zaman yeni
                              görevler vermekte fayda vardır. Bu, çalışanların
                              mevcut deneyimlerinden farklı olan yeni becerileri
                              edinmelerine ve öğrenmelerine yardımcı olur. Takım
                              olarak hareket etme ve ortak amaca yönelmeyi
                              teşvik için çalışanlar arasındaki işbirliğini
                              geliştirmek üzere çeşitli etkinlikler
                              düzenlenebilir. Çalışanlarının
                              becerilerinigeliştirmelerini desteklemek için ödül
                              ve teşvik sistemleri kurabilir ki bu sistemler,
                              çalışanların bireysel geliştirmelerini teşvik eder
                              ve çalışanların performanslarını arttırmayı
                              amaçlar.
                            </li>
                            <li>
                              Çalışanların güvenlik ve sağlık açısından uygun iş
                              ortamı ve koşullarının sağlanması ve bu koşulların
                              duyurulması önemlidir.
                            </li>
                          </ul>
                          <p>7. Ürün ve Hizmet Kalitesini İyileştirme:</p>
                          <ul>
                            <li>
                              Ürün ve hizmetlerin her aşamada güvenilirliğinin
                              ve kalitesinin kontrol edilmesi önemlidir.
                              Ölçülebilir durumlarda bu nispeten kolay olmakla
                              beraber, hizmet ağırlıklı ve ölçülebilirliğin zor
                              olduğu durumlarda ise yönetmeliklere ve iş
                              akışlarına uyum denetlenmek sureti ile standart
                              hizmetin tüm müşterilere ayni şeklide sunulduğunu
                              garanti edilmelidir.
                            </li>
                            <li>
                              Firma, ürün ve hizmetlerinin kalitesini
                              iyileştirmek için çalışanların eğitimlerini
                              arttırmak ve güncel teknolojileri kullanmayı
                              öğrenmelerini sağlamalıdır.
                            </li>
                            <li>
                              Müşteri memnuniyetini artırmak için müşteri odaklı
                              çözümler üretilebilir
                            </li>
                            <li>
                              Ürün ve hizmet kalitesinin en basit tespiti
                              müşteri geri bildirimlerini incelmek ve geri
                              bildirim almakla sağlanabilir. Bu geri
                              bildirimlere göre çeşitli değişiklikler
                              öngörülebilir.
                            </li>
                            <li>
                              Sürekli gelişim ve yenilikçi yaklaşımları
                              desteklemeli ve uygulamalıdır.
                            </li>
                          </ul>
                          <p>8. Kurumun İmajını Geliştirme:</p>
                          <ul>
                            <li>
                              Öncelikle, firmanın pazarlama stratejisini gözden
                              geçirmek ve mümkünse genişletmek faydalı
                              olacaktır. Bu amaçla yeni ürünler ve hizmetler
                              sunmak, ürün ve hizmetlerin geniş bir kitle ile
                              paylaşılmasını sağlamak gibi farklı stratejiler
                              uygulanabilir.
                            </li>
                            <li>
                              İyi bir web sitesi oluşturup, firmanın ürün ve
                              hizmetlerini yayınlamak ve çevrimiçi iletişim
                              kanallarının kullanımını artırmak gerekiyor.
                            </li>
                            <li>
                              Müşterilerin ihtiyaçlarını tanımlamak ve onların
                              karşılanmasını sağlayacak hizmetler sunmak
                              önemlidir.
                            </li>
                            <li>
                              Profesyonel sosyal medya hesapları oluşturulmalı
                              ve sürekli olarak etkin tutulmalıdır
                            </li>
                            <li>
                              Ürün ve hizmetlerinin reklamını iyi planlamak ve
                              firma hakkındaki olumlu haberleri ve görüşleri
                              etkin bir şekilde yaymak gerekir.
                            </li>

                            <li>
                              İyi bir müşteri hizmetleri politikası oluşturmak
                              ve bunu uygulamak, müşterilerin memnuniyetini
                              artırır ve firmanın imajını güçlendirir.
                            </li>
                            <li>
                              Firma ile ilgili ödüller, sertifikalar ve
                              başarıların paylaşımı da önemlidir.
                            </li>
                            <li>
                              Dürüstlük, açıklık ve çevreye duyarlılık gibi
                              ilkeleri benimsemek ve bunları uygulamak, firmanın
                              üstün kalite ve müşteri memnuniyeti güvencesi
                              olur.
                            </li>
                          </ul>
                          <p>
                            9. Pazarlama ve Satış Stratejileri Belirlemesi:
                            Şirketin öncelikle müşterileri ve rakiplerini iyi
                            analiz etmesi gerekir. Şirketin satışlarını artırmak
                            ve müşteri sadakatini geliştirmek için hedef
                            kitlesinin ihtiyaçlarını karşılayacak ürünleri
                            sunmalıdır. Şirketin mevcut ve potansiyel
                            müşterileri ile etkileşim kurmasını sağlayacak
                            pazarlama araçları kullanması, rakiplerinin
                            kullandığı araçları göz önünde bulundurması, mevcut
                            satış kanallarının etkin kullanılması, fiyat
                            stratejisinin doğru belirlenmesi gibi faktörler de
                            stratejilerin oluşturulmasında önemlidir. Şirketin
                            reklam ve pazarlama stratejileri ile hedef kitlesine
                            ulaşması, ürünlerinin tanıtımını yapması ve
                            satışlarını arttırması gerekmektedir. Ayrıca,
                            müşterilerin memnuniyetini sağlamak için ürün ve
                            hizmetlerin kalitesinde düzenli geliştirmeler
                            yapılmalıdır.
                          </p>
                          <p>10. Finansal Yönetimi İyileştirme:</p>
                          <ul>
                            <li>
                              Firmanın gelir ve giderlerini kontrol etmek,
                              faturalar, çekler, nakit ödemeler ve diğer
                              harcamaların sıkı bir denetimden geçmesi
                              gerekiyor.
                            </li>
                            <li>
                              Gelir ve giderlerinin sürekli izlenmesi. Gelir ve
                              giderleri arasındaki denge, firmanın
                              sürdürülebilirliği açısından çok önemlidir.
                            </li>
                            <li>
                              Firmanın alacak ve verdiği borçları içeren
                              bütçesi, tahmin edilen gelir ve giderlerle dengeye
                              getirilmelidir.
                            </li>
                            <li>
                              Yatırımların karlılığı sürekli izlenmeli ve ortaya
                              çıkan sonuçlar gözden geçirilerek uygun
                              değişiklikler yapılmalıdır.
                            </li>
                            <li>
                              Optimizasyon. Firmanın masraflarının optimize
                              edilmesi, verimliliğin ve üretkenliğin
                              arttırılması için önemlidir.
                            </li>
                            <li>
                              Planlanmış projeler ve harcamalar sürekli
                              izlenmelidir.
                            </li>
                            <li>
                              Risk yönetimi. Firmanın karşılaşabileceği tüm
                              riskleri önceden tespit etmek ve sonuçlarını
                              azaltmak için önlemler almak gerekecektir.
                            </li>
                          </ul>
                          <blockquote>
                            Sonuç: Bu adımların atılması ve sıkı takibi ile
                            firma kurumsal yapıya dönüşüm gerçekleşecektir.
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Kurumsallaşma Adımları
                </a>
                <div className="category">Genel Yönetim</div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item eff border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/maviyaka.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/maviyaka.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Maviyaka Yönetimi</h1>
                        <div className="blog-detail">Verimlilik</div>
                        <div className="blog-content">
                          <p>
                            <strong>
                              <u>MAVİ YAKA Y&Ouml;NETİMİ</u>
                            </strong>
                          </p>
                          <p>
                            Mavi yaka kavramı, emek yoğun işletmelerde bedenen
                            &ccedil;alışan personelimizi tanımlamak i&ccedil;in
                            kullanılır. Beyaz yaka &ccedil;alışanlarımızdan
                            farklı olarak bir işletmedeki planlama, hesaplama,
                            tasarım veya genel idari işler gibi daha &ccedil;ok
                            masa başında yapılan işler yerine sahada kas
                            g&uuml;c&uuml; ve emek gerektiren faaliyetleri
                            yerine getirirler.
                          </p>
                          <p>
                            Mavi yaka &ccedil;alışanlar, emek yoğun işletmelerin
                            &ouml;z&uuml;d&uuml;r ve bel kemiğidir. Aslında
                            onlar olmadan t&uuml;m makina yatırımları
                            anlamsızdır. Bir bakıma, mavi yaka sahadaki
                            &ccedil;abaları ile işletmenin geleceğini
                            şekillendirir. Mavi yaka &ccedil;alışanlardan
                            genelde daha dikkatli ve verimli &ccedil;alışmaları,
                            başladıktan kısa s&uuml;re sonra işten ayrılmamaları
                            beklenir. Personel &ccedil;alıştığı ortamda kendini
                            iyi hissediyorsa aidiyet duygusunu, moral
                            motivasyonunu, performansını ve &uuml;retkenliğini
                            y&uuml;kseltebilir. &Ccedil;alışanın kendini iyi
                            hissetmesi i&ccedil;in ise t&uuml;m
                            &ccedil;alışanlara değer verilen,
                            g&ouml;r&uuml;şleri dinlenen, kimseye haksızlık
                            yapılmayan ve gelişme imkanı tanınan bir ortamın
                            sağlanması gerekir.
                          </p>
                          <p>
                            Diğer yandan, temel beklentileri
                            ger&ccedil;ekleştirmek i&ccedil;in en baştan doğru
                            kişinin se&ccedil;ilmiş olması da &ccedil;ok
                            &ouml;nemlidir. İşe doğru kişiyi aldığımızdan emin
                            olmak i&ccedil;in iş g&ouml;r&uuml;şmelerini gelişi
                            g&uuml;zel yapmak yerine belirli bir plan
                            &ccedil;er&ccedil;evesinde adaya en baştan temel
                            yetkinliklerin ne olması gerektiği ve bu
                            g&ouml;revde beklentilerin neler olduğu
                            a&ccedil;ıkca anlatılmalı ve firma hakkında
                            &ouml;zet ama &ouml;zenli bilgilendirme yapılmalı.
                            Ardından işbaşı eğitimleri d&uuml;zg&uuml;n bir
                            şekilde verilmeli ve iyi bir oryantasyon eğitimi ile
                            işe başlaması sağlanmalıdır. Bu sayede personel
                            devir oranlarımızı d&uuml;ş&uuml;rmek ve bu nedenle
                            oluşan kayıpları azaltmak m&uuml;mk&uuml;n olabilir.
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            <strong>
                              <u>Mavi Yaka ile iletişim</u>
                            </strong>
                          </p>
                          <p>
                            Bir topluluğu y&ouml;netebilmeniz bireysel olarak ne
                            kadar sağlıklı bir iletişim kurduğunuz ile direkt
                            alakalıdır. <br /> Astınız da olsalar mavi yaka
                            &ccedil;alışanlarınızı "iş arkadaşları" olarak
                            d&uuml;ş&uuml;nmek daha a&ccedil;ık ve akıcı
                            iletişimi kolaylaştıracaktır.
                          </p>
                          <p>
                            &Ccedil;alışanlarınız ile sağlıklı bir iletişim
                            i&ccedil;in aklınızda bulundurmanız gereken
                            birka&ccedil; &ouml;nemli &ouml;neri;
                            <br /> <br /> <strong>Şeffaf olun</strong>
                            <br /> Mavi yakalı &ccedil;alışanlara karşı
                            d&uuml;r&uuml;st ve a&ccedil;ık s&ouml;zl&uuml; olun
                            ve onları işinizdeki gelişmelerden haberdar edin.
                            Hassas stratejiler veya finansal bilgileri paylaşmak
                            sorun olabilir ama işletmenin genel gidişatı,
                            hedefler ve beklentiler konusunda &ccedil;alışanları
                            g&uuml;ncel tutmaya &ccedil;alışmalısınız. Diğer
                            yandan &uuml;st y&ouml;netimin b&uuml;y&uuml;k
                            değişiklik durumlarında veya en azından senede bir
                            kez mavi yakalı &ccedil;alışanlara bazı bilgileri
                            direkt iletmesinde fayda olacaktır.
                            <br /> <br />{" "}
                            <strong>
                              Hitabet bi&ccedil;iminize dikkat edin
                            </strong>
                            <br /> Mavi yakalı &ccedil;alışanlar işletme
                            b&uuml;t&uuml;n&uuml; ile ilgili konularda teknik ve
                            ticari olarak yeterli derecede bilgili
                            olmayabilirler. Meslekten olmayan kişilere yabancı
                            olabilecek terimleri veya insanların kafasını
                            karıştıran sekt&ouml;re &ouml;zel jargonları
                            kullanmaktan ka&ccedil;ının. Mavi yakalı
                            &ccedil;alışanların işin
                            b&uuml;t&uuml;n&uuml;n&uuml; sizinle aynı şekilde
                            kavraması pek olası değildir. Bu nedenle
                            g&ouml;revleri ile ilgili işlerin ayrıntısını
                            tartışmıyorsanız, tecr&uuml;besiz bir kitleyle
                            konuştuğunuzu varsayın. Ayrıca sizin &uuml;st
                            onların ast olduğunu hissettirecek tarzda &uuml;st
                            tonda konuşmalardan da ka&ccedil;ınmak gerekir. "İş
                            arkadaşlarınızla" iletişim kurmanın amacının, sadece
                            akıllı g&ouml;r&uuml;nmek değil, bir mesajı iletmek
                            ve işleri halletmek olduğunu unutmayın.
                            <br /> <br />{" "}
                            <strong>
                              Y&uuml;z y&uuml;ze iletişim &ouml;nemlidir
                            </strong>
                            <br /> Personeliniz ile m&uuml;mk&uuml;n olan
                            durumlarda bireysel olarak konuşmak i&ccedil;in
                            zaman ayırın. Bu konuşmaların monolog olmaması
                            i&ccedil;in gayret edin ve iyi bir dinleyici olun.
                            Bu, her &ccedil;alışanın değerli hissetmesini ve
                            detayda sizin g&ouml;remediğiniz ya da
                            performansları hakkında &ouml;zel bilgileri
                            &ouml;ğrenmenizi sağlayacaktır. Diğer yandan, her
                            &ccedil;alışanın b&ouml;l&uuml;m y&ouml;neticisi ile
                            en azından her yıl performans değerlendirmeleri
                            yapması kendine olan g&uuml;veni arttıracaktır.
                            &Ouml;nemli bir konu da, eğer bir sorun
                            g&ouml;z&uuml;n&uuml;ze &ccedil;arpmışsa bunu direkt
                            siz tebliğ etmeyin, mavi yakalı &ccedil;alışanlar
                            genellikle &uuml;st d&uuml;zey personelden bir uyarı
                            almaktan hoşlanmazlar. Bunun yerine ilk amirlerini
                            bilgilendirin ve konuyu ona devredin.
                            <br /> <br /> <strong>Ulaşılabilir olun</strong>
                            <br /> Mavi yakalı &ccedil;alışanlar endişe veya
                            &ouml;nerilerini doğrudan y&ouml;neticilere dile
                            getirmekten hoşlanırlar. Periyodik personel
                            toplantılarının veya bire bir toplantılarınızın
                            sonuna soru-cevap b&ouml;l&uuml;m&uuml;
                            ekleyebilirsiniz. Ayrıca, personeliniz herhangi biri
                            işle ilgili bir konuyu g&ouml;r&uuml;şmek
                            istediğinde size rahatlıkla gelebileceğini ve
                            kapınızın hep a&ccedil;ık olduğunu bilmelidir.
                          </p>
                          <p>
                            <strong>
                              Beden dilinize &ouml;zen g&ouml;sterin
                            </strong>
                            <br /> Beden dilinizi kontrol etmek mavi yaka ile
                            iletişimde &ccedil;ok &ouml;nemlidir. Konuşurken,
                            s&ouml;zs&uuml;z iletişim yolu olan beden dilinizin
                            mutlaka farkında olun. Araştırmalar bireyler arası
                            iletişimde beden dilinin s&ouml;zlerden &ccedil;ok
                            daha fazla etkili olduğunu g&ouml;steriyor.
                            &Ouml;rneğin, elinizi &ccedil;enenizde tutar ve
                            &ccedil;alışanınızı dinlerken aralıklı olarak
                            g&ouml;zlerinizi devirirseniz, bu onun
                            s&ouml;yleyecekleriyle ger&ccedil;ekten
                            ilgilenmediğiniz intibağını bırakır. Ya da
                            kollarınızı g&ouml;ğs&uuml;n&uuml;zde
                            &ccedil;aprazlama bağlamış vaziyette bir duruş
                            aslında iletişime &ccedil;ok da a&ccedil;ık
                            olmadığınızı karşı tarafa fısıldarken &ldquo;patron
                            benim&rdquo; g&ouml;r&uuml;nt&uuml;s&uuml; verir.
                            İyi bir dinleyici olun, personelinizin kendisini
                            serbest&ccedil;e ifade etmesine m&uuml;saade edin ve
                            bu esnada g&ouml;z temasını asla kesmeyin. Zira, siz
                            konuşurken başka yerlere bakan, başka işlerle
                            uğraşan bir dinleyiciden rahatsız oluruz. Mavi yaka
                            da bir konuyu dile getirirken t&uuml;m ilgiyi kendi
                            &uuml;zerinde tutmak ister. Diğer yandan konuşma
                            esnasında mavi yaka ile s&uuml;rekli g&ouml;z teması
                            kurulması hem bir saygı g&ouml;stergesidir hem de
                            &ccedil;alışanın s&ouml;ylediklerinize odaklanmasını
                            sağlar. <br /> <br />{" "}
                            <strong>Olumlu c&uuml;mleler kurun</strong>
                            <br /> &Ccedil;alışanınızla konuşurken olumsuz
                            iletişim ve kelimelerden ka&ccedil;ının.
                            &Ouml;zellikle hararetli tartışmalarda
                            m&uuml;mk&uuml;n olduğunca olumlu c&uuml;mleler
                            kurarak gidişatı olumluya &ccedil;evirmeye
                            &ccedil;alışmak gerekir. &Ouml;rneğin, bir hatasını
                            tartışıyorsanız, &ldquo;neden bu hatayı
                            yaptın?&rdquo; şeklinde onu sert&ccedil;e uyarmak
                            yerine basit&ccedil;e "peki, en azından artık hatayı
                            tanımış olduk ve tekrar etmemesi i&ccedil;in gerekli
                            &ouml;nlemleri beraber alabiliriz" diye durumu
                            olumluya &ccedil;evirebilirsiniz.
                            <br /> <br /> <strong>Dozunda mizah</strong>
                            <br /> Etkili iletişimi desteklemek i&ccedil;in
                            m&uuml;mk&uuml;n olduğunda &ccedil;alışanlarınızla
                            konuşmalarınıza mizah katın. Mizah, &ccedil;alışanın
                            dağılan ilgisini tekrar toplayacak ve konuşmayı daha
                            akıcı hale getirecektir. <br />{" "}
                          </p>
                          <p>
                            <strong>
                              <u>Mavi yaka &ccedil;alışan motivasyonu</u>
                            </strong>
                            <br /> Mavi yaka &ccedil;alışanların işletmelerin
                            bel kemiği olduğundan bahsetmiştik. Fakat neredeyse
                            t&uuml;m işletmelerin mavi yaka &ccedil;alışanlar
                            konusunda benzer şikayetleri bulunuyor; iletişim,
                            motivasyon, verimlilik ve &ccedil;ok y&uuml;ksek
                            personel devir oranları. Bu konular her zaman
                            &ouml;n&uuml;m&uuml;zde b&uuml;y&uuml;k bir problem
                            olarak duruyor. &Ouml;yleyse, bu değerli kaynağımızı
                            daha verimli ve daha faydalı hale getirmek s&ouml;z
                            konusu olduğunda neden gerekli adımları atmıyoruz?
                            İşte bunu tam da &ccedil;alışanların aidiyet
                            duygusunu ve motivasyonlarını arttırarak
                            başarabiliriz.
                            <br /> <br /> Aidiyet duygusu hisseden bir
                            &ccedil;alışan, daha iyisini yapmak i&ccedil;in
                            g&ouml;n&uuml;ll&uuml; &ccedil;aba g&ouml;sterir.
                            Kendi işi olmadığı halde devrilmiş &ccedil;&ouml;p
                            kutusunu kaldıran ya da vardiyası bittiği halde son
                            yaptığı işleri kontrol eden &ccedil;alışanlar buna
                            bir &ouml;rnektir. Aidiyet duygusu &ccedil;ok
                            &ouml;nemlidir, &ccedil;&uuml;nk&uuml; motive olmuş
                            &ccedil;alışanların firmalarından ayrılma
                            olasılıkları %65 daha d&uuml;ş&uuml;kt&uuml;r, iş
                            kazası riskleri %48 daha azdır ve %21 daha
                            &uuml;retkendirler. Bu durumun işletmeye yansıması
                            daha d&uuml;ş&uuml;k kayıplar ve daha y&uuml;ksek
                            k&acirc;rlılık anlamına gelir.
                            <br /> <br />{" "}
                            <strong>Motivasyon arttırıcı dokunuşlar</strong>
                            <br /> Birka&ccedil; basit dokunuş yaparak
                            &ccedil;alışanların motivasyonunu
                            y&uuml;kseltebilirsiniz. Bu &ccedil;alışanların
                            şirket i&ccedil;erisinde daha iyi hissetmelerine
                            yardımcı olacak ve aidiyet duygusunu
                            geliştirecektir. İşte bu amaca hizmet edecek
                            birka&ccedil; &ouml;neri;
                            <br /> <br />{" "}
                            <strong>Personel eğitimi &ouml;nemlidir</strong>
                            <br /> İster yeni isterse de eski bir
                            &ccedil;alışanın sorumluluklarını sağlam bir şekilde
                            kavrayamaması durumunda kafası karışır, motivasyonu
                            d&uuml;şer ve hata yapma ihtimali artar. Bu,
                            &ccedil;alışanlarımızın mutsuz olmasına ve veriminin
                            d&uuml;şmesine yol a&ccedil;ar.
                          </p>
                          <p>
                            <br /> Kapsamlı eğitim, yeni personelin işin
                            &ouml;zelliklerini ve kendi rol&uuml;n&uuml;
                            anlamasına yardımcı olur. Unutulmaması gereken bu
                            aşamanın personelin eğitmen ile iletişime
                            ge&ccedil;ebileceği, sorular sorabileceği ve
                            endişelerini giderebileceği aşamadır. Kaldı ki ilk
                            izlenimi iyi olan bir &ccedil;alışanın şirketinizde
                            &uuml;&ccedil; yıldan fazla kalma olasılığı
                            &ccedil;ok y&uuml;ksektir.
                            <br /> <br />{" "}
                            <strong>
                              İletişim kanallarını s&uuml;rekli geliştirin
                            </strong>
                            <br /> Emek yoğun end&uuml;strilerde genelde
                            i&ccedil; iletişim tek y&ouml;nl&uuml; meydana
                            geliyor. Duyurular ve g&uuml;ncellemeler
                            y&ouml;netimden aşağıya doğru gider ve konuşma
                            burada biter. Oysa g&uuml;n&uuml;m&uuml;z&uuml;n
                            mavi yakalı &ccedil;alışanları daha fazla şeffaflık
                            talep ediyor, Z kuşağının genel davranış
                            bi&ccedil;imine g&ouml;re iletişim yolları
                            geliştirmek faydalı olacaktır.
                            &Ccedil;alışanlarınızın işe katılımını sağlayın ve
                            fikirlerini sık sık sorun. Bu onların kendilerini
                            değerli hissetmelerini sağlayacak ve bağlılıklarını
                            arttıracaktır. &Ccedil;alışanlarınızla nasıl
                            iletişim kurduğunuz da &ccedil;ok &ouml;nemlidir, bu
                            nedenle yukarıda bahsedilen mavi yaka ile iletişim
                            &ouml;nerilerine dikkat edilmelidir.
                          </p>
                          <p>
                            <strong>Değer verdiğinizi g&ouml;sterin</strong>
                            <br /> &Ccedil;alışanların &ouml;zel ve &ouml;nemli
                            g&uuml;nlerini hatırlamak ve yanlarında olduğumuzu
                            hissettirmek onlara değer verdiğimizi g&ouml;sterir.
                            Burada ayrımcılık yapılmaması &ouml;nemlidir, zira
                            bir &ccedil;alışanın yaş g&uuml;n&uuml;
                            hatırlanmışken diğerlerinin ki unutulursa kişinin
                            kendisini değersiz hissetmesine neden oluruz. Diğer
                            yandan &ccedil;alışan i&ccedil;in hazırladığımız
                            ortama da yeterli &ouml;nemi g&ouml;stermeliyiz.
                            &Ccedil;alışma ortamı kadar, soyunma odaları, servis
                            ara&ccedil;ları, yemek d&uuml;zeni ve tuvaletlere
                            g&ouml;sterilen &ouml;zen motivasyonu &uuml;st
                            d&uuml;zeye &ccedil;ıkarır. Ayrıca dini vecibelere
                            saygı g&ouml;sterilmesi ve bunun i&ccedil;in de
                            uygun bir ortam sunulması &ccedil;alışanın
                            bağlılığını &uuml;st seviyelere &ccedil;ekecektir.
                            İSG a&ccedil;ısından dikkatli &ccedil;alışmak ve
                            bunu teşvik etmek &ccedil;alışana değer verdiğimizin
                            en &ouml;nemli g&ouml;stergelerindendir.
                            &Ccedil;alışan, kendisine değer verildiğini ve
                            organizasyonun &ouml;nemli bir par&ccedil;ası
                            olduğunu hissetmelidir.
                            <br /> <br />{" "}
                            <strong>
                              &Ouml;nemli bir &ouml;d&uuml;l: teşekk&uuml;r ve
                              taktir edin
                            </strong>
                            <br /> Hepimizde olduğu gibi &ccedil;alışanlarımızın
                            da s&uuml;rekli teşvik edilmeye ihtiyacı vardır.
                            Başarıları mutlaka &ouml;v&uuml;n ve bunu kişisel
                            bir tebrik olarak ifade etmeyi unutmayın. Parasal
                            olmayan &ouml;d&uuml;ller de &ccedil;ok
                            &ouml;nemlidir ve hatta daha b&uuml;y&uuml;k etkiye
                            sahiptir. &Ccedil;alışan bu sayede fark edildiğini
                            anlayacak ve bundan b&uuml;y&uuml;k mutluluk
                            duyacaktır. Diğer yandan &ouml;vg&uuml; ve tebrik
                            &ccedil;alışanlarınızın daha fazlasını başarmasına
                            yardımcı olmanın başka bir yoludur. Olumlu bir
                            hareket nedeniyle yaptığınız bu davranış yeni
                            standart haline gelebilir ve hatta diğer
                            &ccedil;alışanlar tarafından da &ouml;rnek olarak
                            alınır. Teşvik edici girişimler, &ccedil;alışan
                            motivasyonunu, katılımını, &uuml;retkenliği ve
                            aidiyet duygusunu iyileştirir.
                          </p>
                          <p>
                            <strong>
                              Hatalar karşısında olumlu bir tutum sergileyin
                            </strong>
                            <br /> Hepimiz hata yaparız. Sorun oluştuğu anda
                            ceza vermek yerine, ekibinizin neyin yanlış
                            gittiğini tartışmasını ve bir &ccedil;&ouml;z&uuml;m
                            bulmasını sağlayın. Bu ortam &ccedil;alışanların
                            yapılan hata ve sorunlar hakkında daha fazla bilgi
                            edinmelerine ve bilin&ccedil;lenmelerine yardımcı
                            olurken aynı zamanda s&uuml;rekli gelişim ilkesini
                            teşvik edecektir. Bu konuda diğer &ouml;nemli bir
                            husus da hata durumunda olayları
                            kişiselleştirmemektir. &ldquo;Sen hata yaptın&rdquo;
                            yerine &ldquo;bu hatayı nasıl &ouml;nleriz&rdquo;
                            şeklinde bir yaklaşım hem motivasyonu
                            d&uuml;ş&uuml;rmeyecek hem de hataların
                            &ouml;nlenmesine olumlu katkı sunacaktır.
                          </p>
                          <p>
                            <strong>Sistem kurun</strong>
                            <br /> Sistematik &ccedil;alışma mavi yaka
                            motivasyonunu &uuml;st seviyelere taşır. En
                            k&ouml;t&uuml; sistem dahi sistemsizlikten iyidir.
                            Sistemsizlik i&ccedil;erisinde kaos oluşması
                            ihtimali artar, bu da &ccedil;alışanın hangi durumda
                            ne tepki vermesi gerektiği konusunda endişelenmesine
                            neden olur.
                            <br /> <br />{" "}
                            <strong>
                              G&ouml;r&uuml;ş bildirmelerine olanak vererek
                              şirket y&ouml;netimine katılmalarını teşvik edin
                            </strong>
                            <br /> İşi ger&ccedil;ekleştiren mavi yaka
                            personelinizden her konuda geri bildirim toplamak
                            i&ccedil;in bir i&ccedil; iletişim platformu
                            oluşturun. B&ouml;yle bir enstr&uuml;man
                            &ccedil;alışanlarınızın şirket ile ilgili konularda
                            fikirlerini paylaşma olasılığı arttıracaktır.
                            Mesela, &ccedil;alışanların &ouml;neri ve
                            taleplerini yazılı olarak y&ouml;netime
                            iletebilecekleri bir sistemi kurun. Firmaya katkıda
                            bulunan personelin iş tatmini ve şirkete bağlığı
                            artacaktır. Dolayısı ile &ccedil;alışanların şirket
                            y&ouml;netimine katılımı teşvik edilmeli,
                            d&uuml;ş&uuml;nce ve fikirlerini paylaşmaları
                            i&ccedil;in uygun ortam sağlanmalıdır. Bu onlara
                            saygı, g&uuml;ven ve sadakat duyduğunuzu
                            g&ouml;sterecek ve nihayetinde personel devir
                            oranları d&uuml;şecek, işyeri &uuml;retkenliği
                            y&uuml;kselecek ve k&acirc;rlılığınız artacak.
                            Unutmayın, mavi yaka &ccedil;alışanlarınıza
                            yaptığınız yatırımın pozitif getirisi mutlaka
                            olacaktır.
                            <br /> <br />{" "}
                            <strong>Kişisel gelişim imkanı verin</strong>
                            <br /> Kişisel gelişim eğitimleri
                            &ccedil;alışanların eksiklerini fark etmelerine
                            yardımcı olurken, motivasyonu ve nihayetinde aidiyet
                            duygusunu artırır.
                            <br /> <br />{" "}
                            <strong>
                              &Ccedil;alışanların birbirlerine olumlu geri
                              bildirim vermelerini teşvik edin
                            </strong>
                            <br /> Aralarında ast-&uuml;st ilişkisi olmayan iş
                            arkadaşlarının herkese a&ccedil;ık bir platformda
                            birbirlerine olumlu geribildirim (takdir ve
                            &ouml;vg&uuml;) vermesi, &ccedil;alışan bağlılığı
                            ile pozitif bir ilişkiye sahiptir. Bunun i&ccedil;in
                            iletişim panolarında ayın elemanı, başarı hikayeleri
                            veya periyodik &ouml;d&uuml;llendirme toplantıları
                            d&uuml;ş&uuml;n&uuml;lebilir. Bu t&uuml;r
                            uygulamalar, şirket b&uuml;t&uuml;n&uuml;nde başarı
                            elde etmiş personellerin tanınmasına fırsat
                            vereceğinden, &ccedil;alışanların şirket
                            y&ouml;netimine, iyileştirme &ccedil;alışmalarına ve
                            &ouml;neri sistemlerine katılımını teşvik eder.
                            Y&ouml;netim b&ouml;ylece hem başarılı
                            &ccedil;alışanları bu şekilde
                            &ouml;d&uuml;llendirmiş olacak hem de personeli
                            s&uuml;rekli daha iyiyi aramaya teşvik edecektir.
                          </p>
                          <p>
                            <strong>
                              İlk kademe y&ouml;neticilerini
                              bilin&ccedil;lendirin
                            </strong>
                            <br /> İşletmelerde mavi yaka &ccedil;alışanların
                            problemleri genelde birinci kademe y&ouml;neticileri
                            ile yaşadıkları sorunlardan kaynaklıdır. Aslında bu
                            &ccedil;ok normaldir, zira g&uuml;n
                            i&ccedil;erisinde en &ccedil;ok iletişimde oldukları
                            kişiler de bunlardır. İlk kademe y&ouml;neticileri
                            genelde işletmedeki işleyişi iyi bilen, işi daha
                            &ouml;nce kendi tecr&uuml;be etmiş ve burada
                            g&ouml;sterdiği başarı nedeniyle y&uuml;kselmiş
                            &ccedil;alışanlarımızdır. İşi teknik olarak iyi
                            yapan bir &ccedil;alışanı y&ouml;netici konumuna
                            getirirken, artık yeni g&ouml;revinde bir de insan
                            y&ouml;netmesi gerektiği i&ccedil;in gerekli
                            eğitimlerini aldırıyor muyuz? İlk kademe
                            y&ouml;neticileri etkili iletişime ve motivasyona ne
                            kadar dikkat ediyor? Taktir etme, geri besleme
                            verme, değer verme, motive etme, insiyatif verme
                            konularına ne kadar hakimler? Eğer burada bir hata
                            varsa bu tamamen bizim hatamızdır. İlk kademe
                            y&ouml;neticilerimizin bu konudaki yetkinliklerini
                            geliştirmek, mavi yaka motivasyonu &uuml;zerinde
                            direkt etkili olacaktır.
                            <br /> <br />{" "}
                            <strong>
                              Sağlıklı bir yaşam tarzını teşvik edin
                            </strong>
                            <br /> Sağlıklı bir &ccedil;alışan iş yerinde de
                            daha verimli olacaktır. &Ccedil;alışanların
                            &ouml;zel hayatlarında da daha sağlıklı bir yaşam
                            tarzına ge&ccedil;mesi i&ccedil;in
                            bilin&ccedil;lendirin. Doğru beslenme, uyku
                            d&uuml;zeni, sigara ve alkolun zararları gibi
                            konularda eğitimler d&uuml;zenleyebilir, iletişim
                            panolarında bu konuların s&uuml;rekli hatırda
                            kalmasını sağlayabilirsiniz.
                            <br /> <br />{" "}
                            <strong>A&ccedil;ma-germe molaları verin</strong>
                            <br /> Fiziksel &ccedil;alışma şartları personeli
                            g&uuml;n i&ccedil;erisinde &ccedil;ok zorlar.
                            A&ccedil;ma-germe egzersizleri, personelin
                            g&uuml;nl&uuml;k g&ouml;revlerini yerine getirmek
                            i&ccedil;in &ccedil;evik ve formda kalmasına
                            yardımcı olur.
                            <br /> <br /> <strong>Bir slogan aşılayın</strong>
                            <br /> Sloganlar şirket ve &ccedil;alışanlarınız
                            arasında g&uuml;&ccedil;l&uuml; bir bağ oluşturur.
                            İyi kurgulanmış bir slogan, insanları ortak bir
                            ama&ccedil; etrafında birleştirir ve bu da iş yeri
                            motivasyonunu ve bağlılığını artırır.
                            <br /> <br /> SONUÇ: Mavi yaka iletişiminizi sağlam
                            ve motivasyonlarını y&uuml;ksek tutarak şirket
                            verimliliğini arttırırken hata ve kayıpların da
                            &ouml;n&uuml;ne ge&ccedil;ebilirsiniz. Yukarıda
                            değindiğimiz basit &ouml;neri ve hatırlatmalar
                            aslında bu işin &ccedil;ok da karmaşık olmadığını
                            bize g&ouml;steriyor.
                          </p>
                          <p>
                            Son olarak değinmek istediğim konu, y&ouml;netici
                            eğer mavi yaka &ccedil;alışanı ile iyi bir iletişim
                            kurmak istiyorsa zaman zaman kendisini
                            &ccedil;alışanının yerine koyup &ldquo;ben olsaydım
                            bana nasıl davranılmasını isterdim&rdquo; şeklinde
                            d&uuml;ş&uuml;nmeli ve &ouml;zeleştiri
                            yapabilmelidir. Mavi yaka &ccedil;alışanı iyi
                            y&ouml;netmek istiyorsak temel yaklaşımımız da
                            b&ouml;yle olmalıdır.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Maviyaka Yönetimi
                </a>
                <div className="category">Verimlilik</div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/verimlilik.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/verimlilik.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Operasyon Yönetimi</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            Bir işletme birden &ccedil;ok işlev ve s&uuml;recin
                            y&uuml;r&uuml;t&uuml;lmesi ile faaliyette bulunur.
                            &Ouml;rneğin pazarlama, bir m&uuml;şteri tabanı ve
                            şirketin &uuml;r&uuml;n veya hizmetleri i&ccedil;in
                            bir talep oluşturmayı ama&ccedil;larken, finans
                            nakit akışı, maaşlar, varlıklar ve yatırımlarla
                            ilgilenir, &uuml;retim m&uuml;şteriye sunulacak
                            hizmet veya &uuml;r&uuml;n&uuml;
                            ger&ccedil;ekleştirir, lojistik malzeme
                            hareketlerini organize eder ve satış da m&uuml;şteri
                            ile ilişkileri y&uuml;r&uuml;t&uuml;r. Elbette ki
                            her işletmeye &ouml;zel başka işlevler de
                            bulunabilir. Bu bağımsız işlevler nihai olarak bir
                            &uuml;r&uuml;n veya hizmet sunumuna yol a&ccedil;an
                            t&uuml;m s&uuml;re&ccedil;leri i&ccedil;eren ticari
                            faaliyetlerdir.
                          </p>
                          <p>
                            Bu yazıda, operasyon y&ouml;netiminin neleri
                            kapsadığına dair genel bir bakış sunacağız.
                          </p>
                          <p>
                            <strong>İş operasyonları nelerdir?</strong>
                          </p>
                          <p>
                            İş operasyonları, şirketin işlevlerine ve
                            k&acirc;rlılığına katkıda bulunan t&uuml;m unsurları
                            ve faaliyetleri i&ccedil;erir. Operasyonları
                            etkileyen &ccedil;eşitli fakt&ouml;rler şirketten
                            şirkete farklılık g&ouml;sterse de, &ccedil;oğu
                            organizasyon lideri operasyonlarını planlarken
                            aşağıdakileri g&ouml;z &ouml;n&uuml;nde bulundurur;
                          </p>
                          <ol>
                            <li>S&uuml;re&ccedil;ler</li>
                          </ol>
                          <p>
                            İş s&uuml;re&ccedil;leri, etkili bir &uuml;r&uuml;n
                            veya hizmet sunumunu sağlamak i&ccedil;in
                            g&ouml;revlerin, personelin ve ekipmanın
                            hizalanmasını ifade eder. Operasyon
                            y&ouml;neticileri, engelleri kolayca tespit edip
                            &ccedil;&ouml;zebilmeleri ve faaliyetleri
                            kolaylaştırabilmeleri i&ccedil;in bu
                            s&uuml;re&ccedil;leri her departman i&ccedil;in ayrı
                            ayrı tasarlamalı ve belgelendirmelidir. Bu,
                            &ouml;rneğin, yinelenen işlerin ortadan
                            kaldırılmasını veya el emeğinin bir yazılım
                            programıyla değiştirilmesini gerektirebilir.
                          </p>
                          <ol start="2">
                            <li>İnsan Kaynağı</li>
                          </ol>
                          <p>
                            Şirketin s&uuml;re&ccedil;leri, bu
                            s&uuml;re&ccedil;ler i&ccedil;in ihtiya&ccedil;
                            duyulacak beceri d&uuml;zeyini ve &ccedil;alışan
                            sayısını belirleyecektir. Bazı şirketler
                            birka&ccedil; y&uuml;ksek vasıflı uzmana
                            ihtiya&ccedil; duyabilirken, diğerleri temel
                            g&ouml;revleri tamamlamak i&ccedil;in &ccedil;ok
                            sayıda ekip &uuml;yesi &ccedil;alıştırabilir.
                            &Ccedil;alışan kalitesi ve sayısı, bir şirketin
                            faaliyetleri ve kar marjı &uuml;zerinde doğrudan bir
                            etkiye sahiptir. Bu nedenle, bir şirketin uygun
                            beceri seviyelerine sahip yeterli ekip &uuml;yesine
                            sahip olması gerekir.
                          </p>
                          <ol start="3">
                            <li>Ekipman ve Teknoloji</li>
                          </ol>
                          <p>
                            Doğru ekipman veya teknoloji, bir şirketin
                            &uuml;retkenliğini ve karlılığını artıracaktır.
                            &Ouml;rneğin, yeni bir makine par&ccedil;a
                            &uuml;retimini hızlandırırken yeni bir dahili izleme
                            portalı, departmanların s&uuml;re&ccedil;leri
                            kolaylaştırmasına olanak sağlayabilir.
                          </p>
                          <ol start="4">
                            <li>Konum</li>
                          </ol>
                          <p>
                            Bir işletmenin konumu, &ouml;zellikle fiziksel mal
                            ve hizmet satıyorsa, operasyonlar ve karlılık
                            &uuml;zerinde b&uuml;y&uuml;k bir etkiye sahip
                            olabilir. Karar vericiler, iş yerine karar verirken
                            personel ulaşımı, m&uuml;şterinin erişilebilirliği,
                            kira, g&uuml;venlik ve malzemeler gibi temel
                            fakt&ouml;rleri g&ouml;z &ouml;n&uuml;nde
                            bulundurmalıdır.
                          </p>
                          <p>&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>
                            <strong>
                              Operasyon y&ouml;netimi nasıl &ccedil;alışır?
                            </strong>
                          </p>
                          <p>
                            İş operasyonları y&ouml;netimi, en etkili ve verimli
                            &uuml;r&uuml;n veya hizmet sunumunu elde etmek
                            i&ccedil;in personel, malzeme, ekipman ve teknoloji
                            gibi ilgili t&uuml;m kaynakların optimizasyonudur.
                            Bu alan, insan kaynakları, tesisler ve ekipman gibi
                            bir dizi girdinin nihai mal ve hizmetlere
                            d&ouml;n&uuml;şt&uuml;r&uuml;lmesini ele alır.
                            Şirketler geliştik&ccedil;e ve değiştik&ccedil;e,
                            y&ouml;neticiler verimli iş s&uuml;re&ccedil;lerini
                            benimsemelidir. &Ouml;rneğin, bir şirket hızlı bir
                            b&uuml;y&uuml;me yaşıyorsa, y&ouml;neticinin
                            personel sayısını, hammaddeleri, paketleme alanını
                            ve benzeri kaynakları artırması gerekir.
                          </p>
                          <p>
                            Operasyon y&ouml;netiminin temel işlevlerinden
                            bazıları şunlardır:
                          </p>
                          <ol>
                            <li>Denetleme s&uuml;re&ccedil;leri</li>
                          </ol>
                          <p>
                            Operasyon y&ouml;netiminin ana işlevi, bir
                            organizasyon i&ccedil;indeki iş
                            s&uuml;re&ccedil;lerini planlamak, organize etmek,
                            izlemek ve optimize etmektir. Bu, &ccedil;eşitli
                            departmanlar arasındaki s&uuml;re&ccedil;lerin
                            hizalanmasını i&ccedil;erir. &Ouml;rneğin, yeni ERP
                            yazılımın y&uuml;klenmesi departmanlar arasındaki
                            iletişimi geliştirebilir, hafalık sunum ve
                            raporlamalar biribiri peşisıra devam eden
                            s&uuml;re&ccedil;lerin daha iyi koordine olmalarını
                            kolaylaştırabilir.
                          </p>
                          <ol>
                            <li>Operasyon maliyetlerinin en aza indirilmesi</li>
                          </ol>
                          <p>
                            Operasyon y&ouml;netimi, faaliyetlerin bir
                            b&uuml;t&ccedil;e dahilinde kalmasını sağlar. Bu, en
                            uygun maliyetli malzemeleri satın almayı,
                            &uuml;retim s&uuml;re&ccedil;lerini modernize
                            etmeyi, doğru personeli atamayı veya modern makine
                            ve teknolojiye yatırım yapmayı i&ccedil;erebilir.
                          </p>
                          <ol>
                            <li>Strateji geliştirme</li>
                          </ol>
                          <p>
                            Operasyon y&ouml;netiminin &ouml;nemli bir
                            y&ouml;n&uuml;, kaynakları optimize etmek
                            i&ccedil;in stratejiler geliştirmeyi i&ccedil;erir.
                            Bu stratejiler, tedarik zinciri
                            yapılandırmalarındaki değişiklikleri veya
                            &ccedil;alışanların erişilebilirliğini iyileştirmek
                            i&ccedil;in insan kaynaklarını organize etmeyi
                            i&ccedil;erebilir.
                          </p>
                          <ol>
                            <li>&Uuml;r&uuml;n tasarımı</li>
                          </ol>
                          <p>
                            Operasyon y&ouml;netimi aynı zamanda &uuml;r&uuml;n
                            veya hizmetlerin pazar trendlerini ve m&uuml;şteri
                            ihtiya&ccedil;larını karşılamasını sağlamayı da
                            i&ccedil;erir. Şirket m&uuml;şterilerinin satın
                            almak isteyeceği &uuml;r&uuml;nleri &uuml;retmek
                            operasyon y&ouml;netiminin sorumluluğundadır. Bu
                            bağlamda diğer ilgili birimler ile istişareler
                            yapılarak ihtiya&ccedil; tespiti yapılır ve tasarım
                            &ouml;rnekleri oluşturulur. Y&ouml;netim onayından
                            sonra tasarımlar olgunlaştırılarak &uuml;retilebilir
                            modellere d&ouml;n&uuml;şt&uuml;r&uuml;l&uuml;r.
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            <strong>
                              Operasyon y&ouml;netiminin temel g&ouml;revleri
                              nelerdir?
                            </strong>
                          </p>
                          <p>
                            Operasyon y&ouml;netimi, işletmelerin başarısı
                            i&ccedil;in &ouml;nemlidir. Bu işlev, bir şirketin
                            kaynaklarını en iyi şekilde kullanmasını,
                            g&uuml;nl&uuml;k faaliyetlerin sorunsuz
                            &ccedil;alışmasını ve kaliteli &uuml;r&uuml;n ve
                            hizmetlerin m&uuml;şterilere hızlı bir şekilde
                            ulaşmasını sağlar.
                          </p>
                          <p>
                            Operasyon y&ouml;neticileri, aşağıdakiler dahil
                            olmak &uuml;zere sekt&ouml;re bağlı olarak
                            &ccedil;ok &ccedil;eşitli iş işlevlerini yerine
                            getirir;
                          </p>
                          <ul>
                            <li>
                              Finansal verilerin analiz edilmesi ve operasyon
                              b&uuml;t&ccedil;elerinin hazırlanması
                            </li>
                            <li>
                              Proje y&ouml;netimi metodolojileri hakkında
                              stratejik kararlar almak
                            </li>
                            <li>
                              IT ağlarının yapısının veya &uuml;retim
                              tesislerinin boyutunun belirlenmesi
                            </li>
                            <li>
                              İş operasyonlarının tasarlanması, uygulanması ve
                              y&ouml;netilmesi
                            </li>
                            <li>
                              Satışları desteklemek ve m&uuml;şteri desteğini
                              y&ouml;netmek
                            </li>
                            <li>
                              Farklı departmanların &uuml;retim
                              s&uuml;re&ccedil;lerini koordine etmek
                            </li>
                            <li>
                              Malların dağıtımını y&ouml;netmek ve teknik destek
                              sağlamak
                            </li>
                            <li>
                              Stratejik planlar &uuml;zerinde &uuml;st
                              y&ouml;netimle birlikte &ccedil;alışmak
                            </li>
                            <li>&Ccedil;alışanları denetlemek</li>
                          </ul>
                          <p>
                            Operasyon y&ouml;neticileri, maliyet etkinliğini ve
                            kaynakların optimum kullanımını g&ouml;z
                            &ouml;n&uuml;nde bulundururken aynı zamanda
                            end&uuml;stri trendlerinden haberdar olarak
                            m&uuml;şteri taleplerini ve ihtiya&ccedil;larını
                            karşılayabilmelidir. Dolayısı ile, sağlıklı bir
                            operasyon y&ouml;netimi i&ccedil;in;
                          </p>
                          <p>
                            Departmanlar arasındaki s&uuml;re&ccedil;ler
                            başarılı bir şekilde koordine edilmeli ve ortak
                            amaca y&ouml;nelik &ccedil;alışanları motive
                            edilmelidir.
                          </p>
                          <p>
                            Farklı departmanların etkin bir şekilde birlikte
                            &ccedil;alışmasının sağlanması ile &uuml;st
                            y&ouml;netim ve proje geliştirme departmanları
                            arasındaki iletişim geliştirilmeli. Taraflar
                            arasında etkili bir bilgi paylaşımı ekip
                            &ccedil;alışmasını teşvik edeceğinden
                            &ouml;nemlidir.
                          </p>
                          <p>
                            <strong>SONU&Ccedil;:</strong> Operasyon
                            y&ouml;netimi, birden &ccedil;ok s&uuml;reci
                            ayrıntılı bir d&uuml;zeyde g&ouml;zlemleme, anlama,
                            zorluklara &ccedil;&ouml;z&uuml;m bulmayı
                            gerektirir. T&uuml;m kompleks yapıyı kontrol etmek
                            &uuml;zere operasyon s&uuml;re&ccedil;lerini
                            yalınlaştırmak &ouml;nem kazanır. Yalın Felsefe
                            konulu makalem size bu konuda ışık tutacaktır.
                          </p>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Operasyon Yönetimi
                </a>
                <div className="category">Genel Yönetim</div>
              </div>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksLawyer;
