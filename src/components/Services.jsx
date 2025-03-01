import styles from './Services.module.css';
import PropTypes from 'prop-types';

const service = [
  {
    title: 'Tuning',
    type: [
      'Transmission',
      'ECU Cloning Service',
      'ECU DME Repair',
      'Performance Tuning',
      'Data logging',
      'Diesel DPF Delete',
      'Fuel Economy',
      'Dyno services',
    ],
    img: 'url(./tuning.webp)',
  },
  {
    title: 'Service & Repair',
    type: [
      'Fuel & Ignition Service',
      'cheduled Maintenance',
      'Brakes Replacement',
      'Suspension Repair Service',
      'Electrical Diagnosis & Repair',
      'Engine Service',
      'Transmission Repair',
      'Performance Part Upgrades',
    ],
    img: 'url(./repair.webp)',
  },
];

const { tuning, repair } = service;

function ServiceCard({ title, backgroundImage, ser }) {
  return (
    <div
      className={styles.serviceCard}
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <h2>{title}</h2>
      <ul>
        {service.map((ser, i) => (
          <li key={i}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <div className={styles.serviceSection}>
      <ServiceCard
        title={tuning.title}
        backgroundImage={tuning.img}
        ser={tuning}
      />
      <ServiceCard
        title={repair.title}
        backgroundImage={repair.img}
        ser={repair}
      />
    </div>
  );
}
