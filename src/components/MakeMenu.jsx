import styles from './MakeMenu.module.css';

const carsInventory = [
    {
      make: "Audi",
      model: ['A Series', 'Q Series', 'R Series', 'S Series', 'R Series', "Diesel"],
    },
    {
      make: "BMW",
      model: ['1-2 Series', '3-4 Series', '5-6 Series', '7-8 Series', 'i Series', 'M Series', 'X Series', 'Diesel'],
    },
    {
      make: "Bentley",
      model: ['Bentayga', 'Continental', 'Mulsanne'],
    },
    {
      make: "Ford",
      model: ['F-150', 'Raptor', 'Transit'],
    },
    {
      make: "Ferrari",
      model: ['300-500', '500+', 'Berlinetta', 'California', 'FF', 'GTC 4 Lusso', 'Portofino'],
    },
    {
      make: "Maserati",
      model: ['Ghibli', 'Gran Turismo', 'Levante', 'Quattroporte'],
    },
    {
      make: "Chevrolet",
      model: ['Cruze'],
    },
  ];
  

  function MakeMenu() {
    return (
      <section className={styles.makeMenuContainer}>
      <div className={styles.makeDropdown}>
        <menu>
          <li>
            <a>Make</a>
            <menu className={styles.make}>
                {carsInventory.map((car, index) => (
                  <li>
                  <a key={index}>{car.make}</a>
                  <menu className={styles.model}>
                    {car.model.map((model, index) => 
                     (<li key={index}><a>{model}</a></li>)
                    )}
                  </menu>
                  </li>
                ))}
            </menu>
          </li>
        </menu>
      </div>
      </section>
    );
  }

export default MakeMenu