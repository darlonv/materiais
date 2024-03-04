public class Exercicios {

    public static void ex15() {
        int A = 5, B = 10, C = -8;
        float D = (float) 1.5;

        System.out.println("== Exercício 15 ===");

        System.out.println(2 * A % 3 - C);
        System.out.println(Math.sqrt(-2 * C) / 4);
        System.out.println(((20 / 3) / 3) + Math.pow(2, 8) / 2);
        System.out.println((30 % 4 * Math.pow(3, 3)) * (-1));
        System.out.println(Math.pow(-C, 2) + (D * 10) / A);
        System.out.println(Math.sqrt(Math.pow(A, B / A)) + C * D);
    }

    public static void ex16() {
        int P = 2, Q = 3, R = 12;
        float S = (float) 4.5;

        System.out.println("== Exercício 16 ===");

        System.out.println((int) ((100 * Q) / P + R));
        System.out.println((int) S % (P - 1) - Q * R);
        System.out.println((P * R) % 5 - Q / 2);
        System.out.println(1 + Math.sqrt(Math.pow(P, 3) + 3 * R + 5));
        System.out.println(1 + (int) ((R + P) / Math.pow(Q, 2)));
        System.out.println(Math.sqrt(Math.sqrt(16)) * Math.pow(2, 3));
    }

    public static void ex17() {
        int R = 2, S = 5, T = -2, X = -3, Y = -1, Z = 0;

        System.out.println("== Exercício 17 ===");

        System.out.println((R >= 5) || (T > Z) && (X - Y + R > 3 * Z));
        System.out.println((T + 3 >= 4) && !(3 * R / 2 < S * 3));
        System.out.println((X == 2) || (Y == 1) && ((Z == 0) || (R > 3) && (S < 10)));
        System.out.println((R != S) || !(Math.sqrt(R) < Math.sqrt(X)) && (8327 * X * S * Z == 0));
    }

    public static void ex18() {
        float PI = (float) 3.14;

        System.out.println("== Exercício 18 ===");

        System.out.println((18 / 3 / 2 - 1) * 5 - 4 - (2 + 3 + 5) / 2);
        System.out.println(26.0 / 6.0 / 2.0);
        System.out.println(7 % 4 - 8 / (3 + 1));
        System.out.println((5 != 2) || !(7 > 4) && (4 <= PI));
        System.out.println(((18 / 3) == 5) && Math.sqrt(100) == 11);
        System.out.println((12 >= 5 * 2) && (4 * 5 > 24 / 6));
        System.out.println((2 >= 5) && !(6 <= 2 * 3) || (10 != 10));
    }

    public static void ex19() {

        System.out.println("== Exercício 19 ===");

        System.out.println(2 * 4 == 24 / 3);
        System.out.println(15 % 4 < 19 % 6);
        System.out.println(3 * 5 <= Math.pow(3, 2) / 0.5);
        System.out.println(2 + 8 % 7 >= 3 * 6 - 15);
    }

    public static void ex20() {

        System.out.println("== Exercício 20 ===");

        System.out.println(2 < 5 || 15 / 3 == 5);
        System.out.println(false || 20.0 / (18.0 / 3) != (21.0 / 3) / 2);
    }

    public static void ex21() {
        int X = 2, Y = 5, Z = 9;
        String NOME = "MARIA";
        boolean SIM = true;

        System.out.println("== Exercício 21 ===");

        System.out.println(X + Y > Z && NOME == "MARIA");
        System.out.println(SIM || Y >= X);
        System.out.println(!SIM && Z / Y + 1 == X);
        System.out.println(NOME == "JORGE" && SIM || Math.pow(X, 2) < Z + 10);
    }

    public static void ex22() {
        int A = 1, C = 8;
        float B = (float) 4.5;
        boolean TESTE = true;

        System.out.println("== Exercício 22 ===");

        System.out.println(A == 1 && TESTE);
        System.out.println(A + C == Math.sqrt(81) || TESTE != false);
        System.out.println(!TESTE || C % 2 == 0.5);
        System.out.println(C < 10 || TESTE);
        System.out.println(TESTE && !TESTE);
        System.out.println(Math.pow(A, 2) + Math.sqrt(A + C) == 3 && (A + B > 13));
    }

    public static void ex23() {
        int A = 2, B = 7;
        float C = (float) 3.5;
        boolean L = false;

        System.out.println("== Exercício 23 ===");

        System.out.println(B == A * C && (L || true));
        System.out.println(B > A || B == Math.pow(A, A));
        System.out.println(L && (int) B / A >= C || !(A <= C));
        System.out.println(!L || true && Math.sqrt(A + B) >= C);
        System.out.println(B / A == C || B / A != C);
        System.out.println(L || Math.pow(B, A) <= C * 10 + A * B);
        System.out.println(!true || Math.pow(3, 2) / 3 < 15 - 35 % 7);
        System.out.println(!(5 != 10 / 2) || true && 2 - 5 > 5 - 2 || true);
        System.out.println(Math.pow(2, 4) != 4 + 2 || 2 + 3 * 5 / 3 % 5 > 0);
    }

    public static void ex24() {
        int A = 5, B = 4, C = 3, D = 6;

        System.out.println("== Exercício 24 ===");

        System.out.println((A > C) && (C <= D));
        System.out.println((A + B) > 10 || (A + B) == (C + D));
        System.out.println((A - C) == 0 || !(D >= 99) && (B + 2) == 6);
        System.out.println((A >= C) && (B >= C));
    }

    public static void ex25() {
        int A = 3, B = 7, C = 4;

        System.out.println("== Exercício 25 ===");

        System.out.println((A + C) > B);
        System.out.println(B >= (A + 2));
        System.out.println(C == (B - A));
        System.out.println((B + A) <= C);
        System.out.println((C + A) > B);
    }

    public static void main(String[] args) {
        ex15();
        ex16();
        ex17();
        ex18();
        ex19();
        ex20();
        ex21();
        ex22();
        ex23();
        ex24();
        ex25();
    }

}
