#include <stdio.h>
#include <math.h>

int main(void){

  int valor_i;
  float valor_f;
  int k;
//   double valor_d;

  valor_i = 5+10;
  printf("%d\n", valor_i); //15
  valor_i = 8-4;
  printf("%d\n", valor_i); //4
  valor_i = 6*4;
  printf("%d\n", valor_i); //24
  valor_i = 10/2;
  printf("%d\n", valor_i); //5
  valor_f = 10/2;
  printf("%f\n", valor_f); //5.000000  - Atenção ao %f
  valor_f = (float) 10/6;
  printf("%f\n", valor_f); //1.666667 - Atenção ao %f
  valor_i = 25%11;
  printf("%d\n", valor_i); //3
  valor_f = pow(4,3);
  printf("%f\n", valor_f); //64.000000
  valor_f = sqrt(16);
  printf("%f\n", valor_f); //4.000000

  printf("%f - %d - %d\n", (float) 10/6, (int) 10/6, 10/6); //4.000000
  k = 3;
  printf("%f - %d - %d\n", (float) 10/k, (int) 10/k, 10/k); //4.000000

    return 0;
}