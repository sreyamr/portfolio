import { motion } from "framer-motion";

const projects = [
  {
    title: "Cravia – Self Ordering System",
    image: "/portfolio/cravia.png",
    live: "https://m8-organization.github.io/m8craviamobile-kiosk/",
    desc: [
      "Flutter-based self ordering app",
      "REST API integration with real-time updates",
      "Hive local storage for offline support",
      "Kiosk, Web, Tablet & Mobile support",
      "Payment gateway + receipt printing",
    ],
  },
  {
  title: "Cravia KDS – Kitchen Display System (Web & Tablet)",
  image: "/portfolio/kds.png",
   live: "https://craviakds.m8talents.in/",
  desc: [
    "Developed a Kitchen Display System using Flutter to manage food orders in real time",
    "Designed responsive UI for web and tablet screens",
    "Integrated REST APIs to fetch order details and update order status",
    "Implemented real-time order tracking to improve kitchen workflow",
  ],
},
 {
    title: "Mart-Mart – Meat Ordering & Delivery System",
    image: "/portfolio/mba.png",
    live: "https://play.google.com/store/apps/details?id=com.mbamart.customer&hl=en_IN",
    desc: [
      "Developed a multi-app system using Flutter (Customer, Vendor, Delivery, Admin)",
      "Implemented location-based order routing to nearby vendors",
      "Built Vendor app for order processing and inventory availability",
      "Developed Delivery app with real-time order tracking and status updates",
      "Created Admin panel to manage vendors, delivery agents, and order flow",
    ],
  },
    {
    title: "Tirupur Job Hub – Job Search",
    image: "/portfolio/job.png",
    live: "https://play.google.com/store/apps/details?id=com.ask.candidate&hl=en_IN",
desc: [
  "Job search app for local opportunities in Tirupur",
  "Browse and apply for jobs across multiple categories",
  "Location-based job discovery",
  "User-friendly and intuitive UI",
  "Connects job seekers with local employers",
]
  },
    {
    title: "Tirupur Job Hub – Recruiter App",
    image: "/portfolio/recu.png",
    live: "https://play.google.com/store/apps/details?id=com.ask.recruiter&hl=en_IN",
desc: [
  "Recruiter app for managing hiring processes",
  "Create and publish job listings",
  "Candidate tracking and management",
  "Advanced search and filtering",
  "Interview scheduling and real-time notifications",
  "Analytics and recruitment insights",
]
  },
  {
    title: "HRMS – Human Resource Management System",
    image: "/portfolio/hrms.png",
    desc: [
      "Developed a Flutter-based HRMS application for employee management",
      "Implemented attendance tracking and leave management modules",
      "Built profile management and payslip generation features",
      "Integrated REST APIs for real-time data synchronization",
      "Designed clean and user-friendly UI for HR operations",
    ],
  },
    {
    title: "Prabodhanam – Subscription Management System (Halqa / Agency)",
    image: "/portfolio/prabo.png",
    live: "https://play.google.com/store/apps/details?id=com.infobreez.prabodhanam&hl=en_IN",
   desc: [
  "Subscription management system for Halqa and agencies",
  "Create, renew, and track subscriptions",
  "Expiry alerts and renewal management",
  "Suspend/resume subscription functionality",
  "Ledger tracking and payment history",
  "Bank payment reporting with screenshot upload",
  "Dispatch and delivery tracking",
]
  },
    {
    title: "BusiMate MX – Business Analytics & ERP Companion App",
    image: "/portfolio/mx.png",
    live: "https://play.google.com/store/apps/details?id=com.infobreez.busimatemx&hl=en_IN",
desc: [
  "ERP companion app for business insights and reporting",
  "Sales & collection reports (daily/weekly/monthly)",
  "Route & salesman-based performance tracking",
  "Receivable & payable financial summaries",
  "Customer & vendor ledger tracking",
  "GPS tracking with planned vs actual route",
]
  },
 
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-14">
        Featured Projects
      </h2>

      {/* List */}
      <div className="space-y-10">

        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md"
          >

            {/* Image */}
          <div className="md:w-1/2 flex justify-center bg-black p-2">
  <img
    src={p.image}
    alt={p.title}
    className="h-80 object-contain"
  />
</div>

            {/* Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">

              <h3 className="text-2xl font-semibold mb-4">
                {p.title}
              </h3>

              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                {p.desc.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">

                {/* Only Cravia has Live Demo */}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition"
                  >
                    Live Demo
                  </a>
                )}


              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}