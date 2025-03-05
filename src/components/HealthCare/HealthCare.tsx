
import { Swiper, SwiperSlide } from "swiper/react";


const useCases = [
  { title: "24/7 Patient Assistance", description: "Offer virtual support for health queries and guidance." },
  { title: "Automated Appointment Booking", description: "Schedule patient appointments seamlessly." },
  { title: "Personalized Health Insights", description: "Generate reports based on patient data." },
  { title: "Insurance RPA", description: "Automate insurance processes efficiently." },
  { title: "Intelligent Prescription Detection", description: "Detect anomalies in prescriptions." },
  { title: "Medication Adherence Monitoring", description: "Track medication schedules for patients." },
  { title: "Operational Support for Staff", description: "Enhance workflow for healthcare workers." },
  { title: "Streamlined Emergency Handling", description: "Manage urgent patient cases effectively." },
  { title: "Real-Time Lab Results", description: "Provide instant access to lab reports." }
];


const HealthCare = () => {
  return (
       <div className='p-6'>
        <div className="bg-[#FCFCFD] "> 
          <div className="h-[80px] flex flex-col  ">
            <h1 className="font-semibold text-2xl text-[#20232C]">Healthcare</h1>
            <p
                className={'font-medium text-sm h-[40px]  mt-2  lg:text-left'}
                style={{ color: "#9199B0" }}
              >
                Empowering hospitals with Gen-AI chatbots and voicebots for efficient 24/7 patient support, personalized <br />
                assistance, and a seamless healthcare experience.
              </p>
          </div>
          <div className="mt-4">
            Use cases
            <div className="cards-continer ">
            <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Use Cases</h2>

      {/* Large Screens: Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {useCases.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Small Screens: Swiper Carousel */}
      <div className="md:hidden">
        <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
          {useCases.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 border rounded-lg shadow-md bg-white">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p> 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
            </div>
          </div>

        </div>

      </div>
  )
}

export default HealthCare