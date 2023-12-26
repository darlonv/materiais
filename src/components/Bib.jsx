
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
        }`,

    'kurose2013_book': `
        @book{kurose2013_book,
          author  = {Jim Kurose, Keith W. Ross},
          title  = {Redes de computadores e a internet: uma abordagem top-down},
          publisher = {Pearson},
          address   = {São Paulo},
          year   = {2013},
          number = {8},
          isbn   = {9788581436777},
          url    = {https://plataforma.bvirtual.com.br/Acervo/Publicacao/198909}
        }`,
    'torres2009_book': `
        @book{torres2009_book,
          author  = {Gabriel Torres},
          title  = {Redes de Computadores},
          publisher = {Novaterra},
          address   = {Rio de Janeiro},
          year   = {2009},
          isbn   = {978-85-61893-05-7},
          url    = {}
        }`,
    'stevens1994_book': `
        @book{stevens1994_book,
          author  = {W. Richard Stevens},
          title  = {TCP/IP Illustrated: The Protocols},
          volume = {1},
          publisher = {Addison-Wesley/Pearson Education},
          address   = {Boston, USA},
          year   = {1994},
          isbn   = {0-201-63346-9},
          url    = {}
        }`,
    'forbellone2022_book': `
        @book{forbellone2022_book,
          author  = {A. L. V. Forbellone, H. G. Heberspätcher},
          title  = {Lógica de programação: A construção de algoritmos e estruturas de dados},
          publisher = {},
          address   = {},
          year   = {2022},
          isbn   = {},
          url    = {https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/}
        }`,
    'tanenbaum2011_book': `
        @book{tanenbaum2011_book,
          author  = {A. S. Tanenbaum, D. Wetherall},
          title  = {Redes de Computadores},
          publisher = {Pearson do Brasil},
          address   = {São Paulo},
          year   = {2011},
          isbn   = {},
          url    = {https://plataforma.bvirtual.com.br/Acervo/Publicacao/2610}
        }`,
    'falcao2022_video': `
        @book{falcao2022_video,
          author  = {Eduardo de Lucena Falcão},
          title  = {QuickSort - Explicação e Implementação},
          publisher = {Youtube},
          address   = {},
          year   = {2022},
          isbn   = {},
          url    = {https://www.youtube.com/watch?v=AuiIZ_zFKP8}
        }`,
    'id': `
        @book{id,
          author  = {},
          title  = {},
          publisher = {},
          address   = {},
          year   = {},
          isbn   = {},
          url    = {}
        }`,
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
    output = <a href={normalizeFieldValue(bibFile.getEntry(entrada).getField("url"))} target="blank">{output}</a>

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
