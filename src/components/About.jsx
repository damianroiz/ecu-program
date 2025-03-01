import BookingBtn from '../ui/BookingBtn';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h1>We are tuning specialists</h1>
        <p>You have a passion and this passion is what you drive every day.</p>
        <p>
          At ECUPROGRAM, our team of automotive experts have 12 years of
          experience working for top companies like Bosch and Siemens. We offer
          the best in custom ECU tuning and remapping using the latest
          technology for a better driving experience.
        </p>
        <p>
          Experience quality in-house tuning services, by having your vehicle
          tuned and optimized right in our shop. Our state-of-the-art equipment
          and advanced technology allow us to deliver exceptional ECU tuning and
          dyno services in-house, saving you time and hassle.
        </p>
        <p>
          Whether you&pos;re looking for parts upgrade and install, a custom
          tune for your diesel engine or a simple ECU clone, our team of
          experienced technicians is here to help. With our commitment to
          quality and customer service, you can be confident that you&pos;re
          getting the best possible tuning experience. So, if you&pos;re looking
          for in-house tuning services in Calgary, look no further than
          ecuprogram.
        </p>
        <p>
          Contact us to book a consultation and experience the difference for
          yourself.
        </p>
      </div>
      <span>
        <BookingBtn className={styles.bookingBtn} text={'Come visit us'} />
      </span>
    </section>
  );
}

export default About;
