#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdbool.h>

int main(void)
{

    // int A, B, C;
    // float D;

    // A = 5;
    // B = 10;
    // C = -8;
    // D = 1.5;

    // printf("%d\n", 2 * A % 3 - C);
    // printf("%f\n", sqrt(-2 * C) / 4);
    // printf("%f\n", ((20.0 / 3) / 3) + pow(2, 8) / 2);
    // printf("%f\n", (30 % 4 * pow(3, 3)) * (-1));
    // printf("%f\n", pow(-C, 2) + (D * 10) / A);
    // printf("%f\n", sqrt(pow(A, B / A)) + C * D);

    ///////////////////////////
    // int P=2, Q=3, R=12;
    // float S=4.5;

    // printf("%d\n",(int) ((100 * Q) / P + R));
    // printf("%d\n",(int) S % (P - 1) - Q * R);
    // printf("%d\n",(P * R) % 5 - Q / 2);
    // printf("%f\n",1 + sqrt( pow(P, 3) + 3 * R + 5));
    // printf("%d\n",1 + (int)((R + P) / pow (Q, 2)));
    // printf("%f\n",sqrt(sqrt(16)) * pow(2, 3));

    ////////////////////////////
    // int R=2, S=5, T=-1, X=-3, Y=-1, Z=-0;

    // printf("%d\n",(R >=5) || (T > Z) && (X - Y + R > 3 * Z));
    // printf("%d\n",(T + 3 >= 4) && !(3 * R/2 < S * 3));
    // printf("%d\n",(X == 2) || (Y == 1) && ((Z == 0) || (R > 3) && (S < 10)));
    // printf("%d\n",(R != S) || !sqrt(R) < sqrt(X) && (8327 * X * S * Z == 0));

    ////////////////////////////
    // float PI = 3.14;
    // printf("%d\n", (18 / 3 / 2 - 1) * 5 - 4 - (2 + 3 + 5) / 2);
    // printf("%f\n", 26.0 / 6.0 / 2.0);
    // printf("%d\n", 7 % 4 - 8 / (3 + 1));
    // printf("%d\n", (5 != 2) || !(7 > 4) && (4 <= PI));
    // printf("%d\n", ((18 / 3) == 5) && sqrt(100) == 11);
    // printf("%d\n", (12 >= 5 * 2) && (4 * 5 > 24 / 6));
    // printf("%d\n", (2 >= 5) && !(6 <= 2 * 3) || (10 != 10));

    ////////////////////////////
    // printf("%d\n", );

    // printf("%d\n", 2 * 4 == 24 / 3);
    // printf("%d\n", 15 % 4 < 19 % 6);
    // printf("%d\n", 3 * 5 <= pow(3, 2) / 0.5);
    // printf("%d\n", 2 + 8 % 7 >= 3 * 6 - 15);

    ////////////////////////////
    // printf("%d\n", );

    // printf("%d\n", 2 < 5 || 15 / 3 == 5);
    // printf("%d\n", 0 || 20.0 / (18.0 / 3) != (21.0 / 3) / 2);

    ////////////////////////////
    // printf("%d\n", );

    // int X = 2, Y = 5, Z = 9;
    // char NOME[] = "MARIA";
    // int SIM = 1;

    // printf("%d\n", X + Y > Z && strcmp(NOME,"MARIA"));
    // printf("%d\n", SIM || Y >= X);
    // printf("%d\n", !SIM && Z / Y + 1 == X);
    // printf("%d\n", strcmp(NOME,"JORGE") && SIM || pow(X, 2) < Z + 10);

    ////////////////////////////
    // printf("%d\n", );

    // int A = 1, C = 8;
    // float B = 4.5;
    // int TESTE = 1;

    // printf("%d\n", A == 1 && TESTE);
    // printf("%d\n", A + C == sqrt(81) || TESTE != 0);
    // printf("%d\n", !TESTE || C % 2 == 0.5);
    // printf("%d\n", C < 10 || TESTE);
    // printf("%d\n", TESTE && !TESTE);
    // printf("%d\n", pow(A, 2) + sqrt(A + C) == 3 && (A + B > 13));

    ////////////////////////////
    // printf("%d\n", );
    // int A = 2, B = 7;
    // float C = 3.5;
    // bool L = false;

    // printf("%d\n", B == A * C && (L || true));
    // printf("%d\n", B > A || B == pow(A, A));
    // printf("%d\n", L && B / A >= C || !(A <= C));
    // printf("%d\n", !L || true && sqrt(A + B) >= C);
    // printf("%d\n", B / A == C || B / A != C);
    // printf("%d\n", L || pow(B, A) <= C * 10 + A * B);
    // printf("%d\n", !true || pow(3, 2) / 3 < 15 - 35 % 7);
    // printf("%d\n", !(5 != 10 / 2) || true && 2 - 5 > 5 - 2 || true);
    // printf("%d\n", pow(2, 4) != 4 + 2 || 2 + 3 * 5 / 3 % 5 > 0);


    ////////////////////////////
    // printf("%d\n", );

    // int A=5, B=4, C=3, D=6;

    // printf("%d\n", (A > C) && (C <= D));
    // printf("%d\n", (A + B) > 10 || (A + B) == (C + D));
    // printf("%d\n", (A - C) == 0 || !(D >= 99) && (B + 2) == 6);
    // printf("%d\n", (A >= C) && (B >= C));

    int A=3, B=7, C=4;

    printf("%d\n", (A + C) > B);
    printf("%d\n", B >= (A + 2));
    printf("%d\n", C == (B - A));
    printf("%d\n", (B + A) <= C);
    printf("%d\n", (C + A) > B);


    return 0;
}