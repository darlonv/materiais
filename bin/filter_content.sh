#!/bin/bash


sed -n '/[#-]/,$p' ${1}

echo '
## Referências
::: {#refs}
:::
'