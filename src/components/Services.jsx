import styles from "./Services.module.css";

const service = [
    {
      title: "Tuning",
      type: [
        "Transmission",
        "ECU Cloning Service",
        "ECU DME Repair",
        "Performance Tuning",
        "Data logging",
        "Diesel DPF Delete",
        "Fuel Economy",
        "Dyno services"
      ],
      img:
        "url(https://static.wixstatic.com/media/0fe8f5_60437907532e4558912f79cbb8042579~mv2.png/v1/fill/w_925,h_925,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0fe8f5_60437907532e4558912f79cbb8042579~mv2.png)"
    },
    {
      title: "Service & Repair",
      type: [
        "Fuel & Ignition Service",
        "cheduled Maintenance",
        "Brakes Replacement",
        "Suspension Repair Service",
        "Electrical Diagnosis & Repair",
        "Engine Service",
        "Transmission Repair",
        "Performance Part Upgrades"
      ],
      img: "url(src/assets/repair.webp)"
    }
  ];
  
  const [tuning, repair] = service;
  
  function ServiceCard({ title, backgroundImage, service }) {
    return (
      <div
        className={styles.serviceCard}
        style={{
          backgroundImage: backgroundImage
        }}
      >
        <h2>{title}</h2>
        <ul>
          {service.type.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default function Services() {
    return (
      <div className={styles.serviceSection}>
        <ServiceCard title={tuning.title} backgroundImage={tuning.img} service={tuning} />
        <ServiceCard title={repair.title} backgroundImage={repair.img} service={repair} />
      </div>
    )
  }