import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type HiliteItem = {
  title: string;
  description: string;
};

const HiliteList: HiliteItem[] = [
  {
    title: 'Car types',
    description:
      'Flexible equipment types. Autogenerated car codes or use a custom or AAR car type code.',
  },
  {
    title: 'Modules and towns',
    description:
      'Easily specify the Modules or Towns on the layout. Add details for each as needed.',
  },
  {
    title: 'Consignees',
    description:
      'The businesses that bring your layout to life. Consignees are the producers and consumers requiring railroad service.',
  },
  {
    title: 'Drop zones',
    description:
      'Define track segments where rolling stock can be loaded or unloaded. Able to define large sidings holding large cuts of cars all the way down to a specific door at a warehouse, and everything in between!',
  },
  {
    title: 'Equipment needs',
    description:
      'Consignees requests made for a specific car type to be delivered to a specific drop zone with an optional frequency.',
  },
  {
    title: 'Yards',
    description:
      'All trains originate and terminate at a Yard. View the storage capacity and expected car types needed to run the layout based on the capacity of the yards.',
  },
  {
    title: 'Trains',
    description:
      'Define the symbol, origin, destination, length and type of trains. Add a job overview, crew instructions, termination instructions and additional train orders.',
  },
  {
    title: 'Train routes',
    description:
      'Train route definition allows for many unique options allowing for crews of all levels. Delivery can be made to all Consignees, specific consignees, or indicate to not send cars to a consignee. Easily label the work with optional "Direction" indicators.',
  },
  {
    title: 'Trainlists',
    description:
      'The "script" used by the crew to do their work. Print out designed to be easy to read and carry around while crews do their work. Crew work can be scheduled randomly or using weighted random selection.',
  },
  {
    title: 'Module export/import',
    description:
      'Modules can be exported to a standard text based format (json). The exported files can be stored in a central online repository available for import when a new layout is created.',
  },
];

function Feature({ title, description }: HiliteItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--left padding-horiz--md padding-bottom--lg">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageHilites(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <div className="text--left padding-horiz--md padding-bottom--lg">
              <h1>Packed with Features</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {HiliteList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}