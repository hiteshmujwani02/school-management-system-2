import Head from "next/head"
import Header from "../../components/Header"
import HeroSection from "../../components/HeroSection"
import Image from 'next/image'
import About from '../../components/About'
import ScrollFeatures from "../../components/ScrollFeatures"
import pageData from "./data.json"
import GridSection from "../../components/GridSection"
import WhyNeed from "../../components/WhyNeed"
import Benefits from "../../components/Benefits"
import FaqSection from "../../components/FaqSection "
import WhyChooseSection from "../../components/WhyChooseSection"

const TransportManagement = () => {
  const {features, usedFor, needFor, benefits, faqDataOne, faqDataTwo, Choose} = pageData;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title>Best School Transport Management System - Vigorous IT</title>
        <meta name="description" content="Vigorous IT offers a cutting-edge Transport Management System for schools, streamlining bus operations, enhancing safety, and optimizing routes with AI-driven technology." />
        <link rel="canonical" href="https://" />
        <meta name="robots" content="noindex" />
        <meta property="og:url" content="https://" />
        <meta property="og:title" content="Best School Transport Management System - Vigorous IT" />
        <meta property="og:site_name" content="Vigorous IT" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Vigorous IT offers a cutting-edge Transport Management System for schools, streamlining bus operations, enhancing safety, and optimizing routes with AI-driven technology." />
        <meta property="og:image" content="https:/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vigorousit.com" />
        <meta name="twitter:site" content="@vigorousit" />
        <meta property="twitter:url" content="https://" />
        <meta name="twitter:title" content="Best School Transport Management System - Vigorous IT" />
        <meta name="twitter:description" content="Vigorous IT offers a cutting-edge Transport Management System for schools, streamlining bus operations, enhancing safety, and optimizing routes with AI-driven technology." />
        <meta name="twitter:image" content="https:/" />
      </Head>

      <section>
        <div className="max-width w-full bg-primary">
          <Header />
          <div className="lg:flex justify-between items-center space-x-5 w-11/12 mx-auto 2xl:pt-[8rem] 2xl:pb-[8rem] pt-[10rem] pb-[3rem] md:space-y-0 space-y-10 max-w-7xl">
            <div className="lg:w-1/2 w-full">
              <HeroSection
                title="Transport Management System for Schools"
                titleOne=""
                para="The modern world brings modern problems in every sector, which is the same when it comes to managing transportation for a school. Planning complex routes on the basis of students picking points and keeping buses on time are both big headaches for school administration. With it, handling parent queries and ensuring student safety also have their consequences, but with a modern transport management system for school, we let you cover everything effortlessly. "
                para1="With this comprehensive digital solution that automates, streamlines, and enhances school transport operations from end to end, we offer exactly what is required. "
                callToActionLine="Experience The Smart Way To Handle School Transportation With This System"
                buttonCount={1}
                buttonNames={["Request Demo"]}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:flex lg:justify-center">
              <Image src={'/images/RFID-banner.png'} alt='' width={500} height={200} />
            </div>
          </div>
        </div>

        <About
          title="What is a Transport Management System?"
          paraOne="A transport management system is a perfect solution that uses automation to help schools in managing all transport-related tasks. From tracking school buses in real-time to managing driver schedules, creating optimized routes for efficient fuel usage, and sending live updates to parents and staff all is under control through just some clicks"
          paraTwo="Integration with modern tracking technologies like cloud-based dashboards, GPS and RFID tags, this system lets school admins monitor routes, update schedules, track delays, and ensure that each student boards and exits the correct vehicle on time. "
          paraThree="Here is how this system keeps things in the queue and doesn't let them stay wrong. "
          paraFour=""
          btnName="Request Demo"
          img="/images/Student-Attendance-System.webp" type={1}
          bulletPoints={[
            "Enhance transparency by pinpointing the real-time location of their buses",
            "Smart bus routes lead to efficient fuel use & longer student travel times",
            "RFID-based check-ins and geofencing avoid serious safety concerns",
            "Automated alerts keep parents informed about bus arrivals or delays",
            "Helps in coordinating shifts, leaves, and performance of bus drivers"
          ]}
        />

        <ScrollFeatures heading="Features Of The Transport Management System" features={features} />

        <div className="mx-auto w-11/12 max-w-7xl font-nunito">
          <GridSection
            values={usedFor}
            title="What Are Transport Management Systems Used For?"
            para="From boosting operational efficiency to enhancing student safety, this Transport Management System plays a much larger role in transforming how schools manage transportation logistics."
            para1="This TMS is more than just a tool for schools, and here’s how:"
          />
        </div>

        <div className='bg-primary my-10 relative'>
          <div className="mx-auto w-11/12 max-w-7xl font-nunito">
            <WhyNeed
              values={needFor}
              title="Why Does Your Institution Need A Transport Management System?"
              para="This TMS simplifies daily operations by digitizing every transport-related task, but beyond convenience, there are specific reasons why your school or institution needs one."
            />
          </div>
          <div className="absolute left-10 bottom-[10%] lg:block hidden circle-motion">
            <Image src="/images/tri1.png" alt="" width={50} height={200} className="orbit" />
          </div>
          <div className="absolute left-10 bottom-[60%] lg:block hidden">
            <Image src="/images/sq.png" alt="" width={20} height={200} className="orbit" />
          </div>
          <div className="absolute right-10 bottom-[60%] lg:block hidden half-circle-motion">
            <Image src="/images/tri1.png" alt="" width={50} height={200} className="orbit" />
          </div>
          <div className="absolute right-10 bottom-[20%] lg:block hidden">
            <Image src="/images/tri4.png" alt="" width={20} height={200} className="orbit" />
          </div>
        </div>

        <Benefits
          title="Benefits Of A Transport Management System"
          desc="A TMS has numerous benefits for educational institutes that are clearly mentioned below. Let's delve into the key benefits:"
          benefits={benefits}
        />

        <WhyChooseSection
          title="Why Choose Our Transport Management System?"
          featureMobileTitle=""
          featureMobiledesc=""
          Choose={Choose}
        />

        <FaqSection faqDataOne={faqDataOne} faqDataTwo={faqDataTwo} />
      </section>
    </>
  );
};

export default TransportManagement;