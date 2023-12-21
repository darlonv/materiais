
import React from 'react';

import { parseBibFile, normalizeFieldValue } from "bibtex";

//https://www.npmjs.com/package/citation-js
//https://www.npmjs.com/package/bibtex

export default function Bib({ entrada, tipo = "citation", link = false }) {
  //tipo: citation | bibliography

  const bibContent = {
    'mut2011': `
        @InProceedings{mut2011,
          author    = {Pradeep Muthukrishnan and Dragomir Radev and Qiaozhu Mei},
          title     = {Simultaneous Similarity Learning and Feature-Weight Learning for Document Clustering},
          booktitle = {Proceedings of TextGraphs-6: Graph-based Methods for Natural Language Processing},
          month     = {June},
          year      = {2011},
          address   = {Portland, Oregon},
          publisher = {Association for Computational Linguistics},
          url       = {http://www.aclweb.org/anthology/W11-1107},
          pages = {42--50}
        }`,

    'cormen2022': `
        @book{Cormen2022,
          author  = {Thomas Cormen, Charles E. Leiserson, Ronald L. Rivers, Clifford Stein},
          title  = {Algoritmos:  Teoria e Prática},
          publisher = {Grupo Gen},
          year   = {2022},
        }`
  }


  const Cite = require('citation-js');


  // let example = new Cite(entrada)
  let example = new Cite(bibContent[entrada])

  let output = "" + example.format(tipo, {
    format: 'text',
    template: 'apa',
    lang: 'en-US'
  })

  if (link) {
    //retorna a citação com o link para a url definida no bibtex.
    const bibFile = parseBibFile(bibContent[entrada]);
    output = <a href={normalizeFieldValue(bibFile.getEntry(entrada).getField("url"))}>{output}</a>

  }

  // let output = example.format(tipo, {
  //   format: 'string'
  // })
  // let data = normalizeFieldValue(bibFile.getEntry(entrada).getField(chave));

  return (
    <>
      {output}
    </>
  );
}
