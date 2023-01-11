import dynamic from "next/dynamic";
import Head from "next/head";
import { useContext } from "react";
import ActiveSection from "../src/activeSection";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import ContactForm from "../src/components/sections/ContactForm";
import { ResumeSectionLawyer } from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import { SkillsLawyer } from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import Service from "../src/components/Service";
import Work from "../src/components/Work";
import Context from "../src/context/context";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
Ulusal / uluslararası endüstri firmalarında 30 yılı aşkın deneyime sahip, üst düzey yöneticilik yapmış, stratejik yönetim, ÜrGe / ArGe, üretim tesislerinde operasyonel mükemmellik için verimli bir ortam oluşturulması, sıfırdan başlayıp yeni sistemler kurma,  üretim sitemlerini verimli bir şekilde çalıştırması, üretim tesislerinde kalite sistemi kurulumu, müşteri problemlerine çözümler bulunması, mavi ve beyaz yaka motivasyonu ve zorlu durumlarda analitik problem çözme konularında uzun yıllara varan deneyimleri bulunan, iyi derecede İngilizce ve Almanca bilen bir makine mühendisiyim. 2022 yılında emekli olduktan sonra firmalara tecrübelerimi aktarmak üzere danışmanlık vermeye başladım.
</p>`;

const serviceList = [
  {
    icon: "fa fa-industry",
    title: "Üretim sistemleri kurulumu",
    desc: "Ürün ve hizmet üretimi süreçlerini verimlilik, maliyet etkinliği ve kalite optimizasyonu açılarından analizi ve bu sürçlerin optimizasyonu için algoritmalar veya modeller geliştirmek sureti ile performansı iyileştirmek üzere sıfırdan tasarlanması.",
  },
  {
    icon: "fa fa-line-chart",
    title: "İşletmelerde verimlilik arttırma",
    desc: "Verimlilik maliyetleri düşürecek, dolayısıyla karlılığı artıracak en önemli silahtır ve bir ürün ya da hizmet üretmek sureti ile oluşturduğumuz değerin üretimi esnasında harcanan kaynaklarla olan ilişkisini gösterir.",
  },
  {
    icon: "fa fa-diamond",
    title: "Stratejik Yönetim / Stratejik Planlama",
    desc: "Stratejik yönetim, bir organizasyonun geleceğini planlama ve bu planı uygulamak için kaynaklarını tahsis etme konusunda kararlar alma sürecidir. Hedeflerin belirlenmesini, rekabet ortamının analiz edilmesini ve hedeflere ulaşmak için planların uygulanmasını içerir. Stratejik yönetim, önemli kararlar almayı ve devamlılığı gerektiren sistematik bir süreçtir.",
  },
  {
    icon: "fa fa-check-square-o",
    title: "Kalite",
    desc: "Karlılık ve satışlarını artırmak isteyen şirketlerin müşteri memnuniyetini yükseltmek, kusurları ve iadeleri azaltmak ve müşteri sadakatini artırmak üzere müşteri beklentilerini karşılayan veya aşan ürün veya hizmet üretmesi ve sunmasıdır. Bunun için Kalite standartlarını belirleme, Test etme ve denetleme, Sürekli iyileştirme, Eğitim ve geliştirme gibi uygulamaalara odaklanmayı gerektirir.",
  },
  {
    icon: "fa fa-steam",
    title: "Robot Otomasyon",
    desc: "Yoğun adetlerde üretim yapan firmalarında tekrrlaanabilirliğin önemli olduğu durumlaarda otmosaayonaa geçiş kararı verilmelidir.",
  },
  {
    icon: "fa fa-money",
    title: "Yalın Üretim",
    desc: "Yalın üretim, en üst seviyede değeri elde etmeye ve israfı en aza indirmeye odaklanan bir üretim felsefesidir. Sürekli iyileştirme fikrine ve tümüyle verimliliğe odaklanmaya dayanır.",
  },
  {
    icon: "fa fa-rocket",
    title: "Yönetim Danışmanlığı",
    desc: "Kuruluşların mevcut sorunlarının analizi ve iyileştirme planlarının geliştirilmesi yoluyla performanslarını geliştirmelerine yardımcı olmak üzere şirket üst düzey yönetimine verilen hizmetleri kapsar ve her bir müşteriye özel olan ihtiyaçlara bağlı olarak değişiklik gösterir.",
  },
  {
    icon: "fa fa-trophy",
    title: "Kurumsallaşma",
    desc: "Şirketlerin genel kabul görmüş sistem, uygulama veya organizasyon oluşturma sürecidir. işltmelerin daha verimli, tutarlı ve öngörülebilir bir şekilde çalışmasını desteklemek ve sürdürülebilirliğin sağlanabilmesi adına tasarlanmış kurallar, prosedürler ve yapılar oluşturmayı içerir.",
  },
  {
    icon: "fa fa-users",
    title: "Mavi Yaka / Beyaz Yaka motivasyon",
    desc: "Şirketlerin verimlilik ve performansları üzerinde doğrudan etkilidir. Motive olmuş çalışanların ilgili, kararlı ve üretken olma olasılığı daha yüksektir, bu da bir şirketin hedeflerine ulaşmasına ve pazarda başarılı olmasına yardımcı olacaktır.",
  },
  {
    icon: "fa fa-graduation-cap",
    title: "ÜrGe /ArGe",
    desc: "Şirketlerin büyümesinin ve başarısının önemli bir parçası olan inovasyon, yeni fikirleri ortya çıkarmak sureti ile bunları değere, ürünlere, hizmetlere veya süreçlere dönüştürme sürecidir.",
  },
  {
    icon: "fa fa-gears",
    title: "ERP entegrasyonu",
    desc: "İşletmelerin ticari faaliyet, finans, İK, tedarik zinciri yönetimi ve üretim gibi çeşitli iş süreçlerini optimum fayda için gözden geçirilmesi otomatize edilmesi sürecidir. Tipik ERP entegrasyon süreci Planlama, Analiz, Tasarım, Uygulama, Devreye Alma, Test etme ve doğrulama adımlarını içerir. ERP entegrasyon süreçleri genelde karmaşık ve başarı için net bir plana, güçlü bir proje yönetimine ve yönetim istikrarına ihtiyaç duyar.",
  },
];

const headerMenus = [
  { title: "Hakkında", link: "about", icon: "icon ion-person" },
  { title: "Özgeçmiş", link: "resume", icon: "icon ion-android-list" },
  { title: "Hizmetler", link: "works", icon: "icon ion-filing" },
  { title: "Makaleler", link: "blog", icon: "icon ion-ios-paper" },
  { title: "İletişim", link: "contacts", icon: "icon ion-paper-airplane" },
];

const Index = () => {
  const { changeNav, nav, changeSideBar } = useContext(Context);

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-2-colors.css" />
      </Head>
      <Header menus={headerMenus} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile5.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Aziz Volkan Tevik</div>
          <div className="subtitle">Makina Mühendisi</div>
          <div className="subtitle">Yönetim Danışmanı</div>
          {/* profile socials */}
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/azizvolkantevik/"
            >
              <span className="fa fa-linkedin" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a
              href="#contacts"
              className="lnk discover"
              onClick={() => changeNav("contacts")}
            >
              <span className="text">Mesaj Yaz</span>
              <span className="ion ion-android-contact" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Testimonials />
        </About>
        <Resume>
          <ResumeSectionLawyer />
          <SkillsLawyer />
        </Resume>
        <Work>
          <Services serviceList={serviceList} />
        </Work>
        <Blog>
          <RecentWorks user={"lawyer"} />
        </Blog>
        <Contact>
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index;
