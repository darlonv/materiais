import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Algoritmos e Estruturas de Dados',
    Svg: require('@site/static/img/algorithm.svg').default,
    description: (
      <>
        Lógica de programação, estruturas de seleção, repetição e funções. Vetores, matrizes e algoritmos de busca e ordenação.
      </>
    ),
  },
  {
    title: 'Redes de Computadores',
    Svg: require('@site/static/img/sort_2.svg').default,
    description: (
      <>
        Introdução às redes de computadores, sockets, protocolos, pilhas
        de protocolos.
      </>
    ),
  },
  {
    title: 'Ciência de Dados',
    Svg: require('@site/static/img/sort.svg').default,
    description: (
      <>
        Extração de informações, manipulação e apresentação de dados. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
