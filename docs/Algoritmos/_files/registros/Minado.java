import java.util.Scanner;

class Casa {
    boolean bomba = false;
    boolean jogado = false;
    boolean bandeira = false;
    int n_bombas_vizinhas = 0;
}

public class Minado {

    // Configuração
    static int n_dim = 3;
    static int n_bombas = 2;

    static Scanner entrada = new Scanner(System.in);

    // Retorna uma valor inteiro no intervalo [min, max[
    public static int randomInt(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }

    public static void mostraTabuleiro(Casa[][] tab, boolean completo) {
        int i, j;

        // Números superiores
        // verifica se os números ocupam apenas um caractere
        if (tab.length < 10) {
            System.out.printf("     ");
            for (i = 0; i < tab.length; i++) {
                System.out.printf("%d", i);
            }
            System.out.println();

        } else {
            // verifica se os números ocupam dois caracteres
            if (tab.length < 100) {
                // printa o primeiro caractere
                System.out.printf("   ");
                for (i = 0; i < tab.length; i++) {
                    System.out.printf("%d", i / 10);
                }
                System.out.println();
                // printa o segundo caractere
                System.out.printf("   ");
                for (i = 0; i < tab.length; i++) {
                    System.out.printf("%d", i % 10);
                }
                System.out.println();
            }

        }

        // Linha superior
        System.out.printf("     ");
        for (i = 0; i < tab.length; i++) {
            System.out.printf("_");
        }
        System.out.println();

        // Mostra o tabuleiro
        if (completo) {
            // mostrar o tabuleiro completo (são necessários apenas bombas e numeros)
            for (i = 0; i < tab.length; i++) {
                {
                    System.out.printf("%3d |", i); // Número e coluna à esquerda
                }
                for (j = 0; j < tab.length; j++) {

                    if (tab[i][j].bomba) {
                        System.out.printf("%s", getEmoji("bomba"));
                    } else {

                        System.out.printf("%s", getEmojiNumber(tab[i][j].n_bombas_vizinhas));

                    }

                }
                System.out.printf("|\n"); // Coluna à direita
            }
        } else {
            // mostra o tabuleiro apenas onde foi jogado (bombas, nao jogado, numeros e
            // bandeiras)
            for (i = 0; i < tab.length; i++) {
                {
                    System.out.printf("%3d |", i); // Número e coluna à esquerda
                }
                for (j = 0; j < tab.length; j++) {
                    // verifica se já foi jogado naquela casa
                    if (tab[i][j].jogado) {
                        // caso sim, mostra
                        // verifica se é uma bandeira
                        if (tab[i][j].bandeira) {
                            System.out.printf("%s", getEmoji("bandeira"));
                        } else {
                            // mostra o numero
                            System.out.printf("%s", getEmojiNumber(tab[i][j].n_bombas_vizinhas));
                        }
                    } else {
                        // caso não, mostra como não jogado
                        System.out.printf("%s", getEmoji("nao jogado"));
                    }
                }
                System.out.printf("|\n"); // Coluna à direita
            }
        }

        // Linha inferior
        System.out.printf("     ");
        for (i = 0; i < tab.length; i++) {
            System.out.printf("_");
        }
        System.out.println();

    }

    // verifica se ainda há casas não jogadas
    public static boolean tabuleiroCompleto(Casa[][] tab) {
        int i, j;
        for (i = 0; i < tab.length; i++) {
            for (j = 0; j < tab.length; j++) {
                if (tab[i][j].jogado == false) {
                    return false;
                }
            }
        }
        return true;
    }

    // verifica se apenas há bandeiras nas casas com bomba
    public static boolean bandeirasCorretas(Casa[][] tab) {
        int i, j;
        for (i = 0; i < tab.length; i++) {
            for (j = 0; j < tab.length; j++) {
                if (tab[i][j].bandeira == true && tab[i][j].bomba == false) {
                    return false;
                }
            }
        }
        return true;
    }

    public static String getEmoji(String emoji) {
        if (emoji.equals("bomba")) {

            return "B";
        }

        if (emoji.equals("bandeira")) {

            return "?";
        }
        if (emoji.equals("nao jogado")) {

            return ".";
        }

        return "/";
    }

    public static String getEmojiNumber(int emoji) {
        switch (emoji) {
            case 0:

                return (" ");
            case 1:

                return ("1");
            case 2:

                return ("2");
            case 3:

                return ("3");
            case 4:

                return ("4");
            case 5:

                return ("5");
            case 6:

                return ("6");
            case 7:

                return ("7");
            case 8:

                return ("8");
            case 9:

                return ("9");
        }
        return "";
    }

    public static int conta_n_bombas_vizinhos(Casa[][] tab, int i, int j) {

        int contador = 0;

        if (tab[i][j].bomba) {
            return 0;
        }

        // verifica casa à esquerda
        if (i - 1 >= 0 && tab[i - 1][j].bomba) {
            contador++;
        }

        // verifica casa à direita
        if (i + 1 < tab.length && tab[i + 1][j].bomba) {
            contador++;
        }

        // verifica casa acima
        if (j - 1 >= 0 && tab[i][j - 1].bomba) {
            contador++;
        }

        // verifica casa abaixo
        if (j + 1 < tab.length && tab[i][j + 1].bomba) {
            contador++;
        }

        // verifica casa esquerda acima
        if (i - 1 >= 0 && j - 1 >= 0 && tab[i - 1][j - 1].bomba) {
            contador++;
        }

        // verifica casa esquerda abaixo
        if (i - 1 >= 0 && j + 1 < tab.length && tab[i - 1][j + 1].bomba) {
            contador++;
        }

        // verifica casa direita acima
        if (i + 1 < tab.length && j - 1 >= 0 && tab[i + 1][j - 1].bomba) {
            contador++;
        }

        // verifica casa direita abaixo
        if (i + 1 < tab.length && j + 1 < tab.length && tab[i + 1][j + 1].bomba) {
            contador++;
        }

        return contador;
    }

    public static boolean marcarEJogar(Casa[][] tab) {
        int i, j;
        String jogada;

        System.out.println("(P|M) L C");
        jogada = entrada.next(); // Leitura da jogada (P ou M - Pisar ou Marcar)
        i = entrada.nextInt();
        j = entrada.nextInt();

        if (i < 0 || j < 0 || i >= tab.length || j >= tab.length) {
            System.out.printf("Valores de linha e coluna válidos: [0-%d] \n", tab.length - 1);
            return true;
        }

        return jogar(tab, i, j, jogada);

    }

    public static boolean jogar(Casa[][] tab, int i, int j, String jogada) {

        // verifica se é para marcar
        if (jogada.equals("M")) {
            // verifica não foi jogada
            if (!tab[i][j].jogado) {
                tab[i][j].bandeira = true;
                tab[i][j].jogado = true;
                return true;
            } else {
                // verifica se é uma bandeira
                if (tab[i][j].bandeira) {
                    tab[i][j].bandeira = false;
                    tab[i][j].jogado = false;

                }
                // caso já tenha sido jogada e não tiver marcada como bandeira, não precisa
                // mexer
            }
        }

        // verifica se é para pisar
        if (jogada.equals("P")) {
            // verifica se é uma bomba
            if (tab[i][j].bomba) {
                // se for pisado em uma bomba retorna falso, indicando que perdeu o jogo
                return false;
            } else {
                // verifica se já foi jogada
                if (tab[i][j].jogado) {
                    return true;
                }

                // marca a casa como jogada
                tab[i][j].jogado = true;
                // verifica se não há bombas vizinhas
                if (tab[i][j].n_bombas_vizinhas == 0) {
                    // caso não haja bombas vizinhas, já joga automaticamente nas casas
                    // da esquerda, direira, de cima e de baixo
                    // esquerda
                    if (i - 1 >= 0) {
                        if (!tab[i - 1][j].jogado)
                            jogar(tab, i - 1, j, "P");
                    }
                    // direita
                    if (i + 1 < tab.length) {
                        if (!tab[i + 1][j].jogado)
                            jogar(tab, i + 1, j, "P");
                    }
                    // de cima
                    if (j - 1 >= 0) {
                        if (!tab[i][j - 1].jogado)
                            jogar(tab, i, j - 1, "P");
                    }
                    // de baixo
                    if (j + 1 < tab.length) {
                        if (!tab[i][j + 1].jogado)
                            jogar(tab, i, j + 1, "P");
                    }
                }
                return true;
            }
        }
        return true;
    }

    public static void main(String[] args) {

        // Variáveis
        int count_bombas = 0;
        int i, j;

        boolean ganhou = true;

        // Tabuleiro
        Casa[][] tab = new Casa[n_dim][n_dim];

        // Aloca o tabuleiro
        for (i = 0; i < n_dim; i++) {
            for (j = 0; j < n_dim; j++) {
                tab[i][j] = new Casa();
            }
        }

        if (n_bombas > n_dim * n_dim) {
            System.err.println("Número de bombas maior que o número de casas no tabuleiro");

        } else {
            // coloca as bombas no tabuleiro
            while (count_bombas < n_bombas) {
                i = randomInt(0, n_dim);
                j = randomInt(0, n_dim);
                if (tab[i][j].bomba == false) {
                    tab[i][j].bomba = true;
                    count_bombas++;
                }
            }

            // conta a quantidade de bombas vizinhas
            for (i = 0; i < n_dim; i++) {
                for (j = 0; j < n_dim; j++) {
                    tab[i][j].n_bombas_vizinhas = conta_n_bombas_vizinhos(tab, i, j);
                }
            }

            while (ganhou && (!tabuleiroCompleto(tab) || !bandeirasCorretas(tab))) {
                System.out.println("+++++++++++++++++++++++++");
                mostraTabuleiro(tab, false);

                ganhou = marcarEJogar(tab);

                if (tabuleiroCompleto(tab) && !bandeirasCorretas(tab)) {
                    System.out.println("Cuidado! Há bandeiras colocadas em casas sem bombas.");
                }

            }

            if (!ganhou) {
                System.out.println("=========================");
                System.out.println("Que pena. Você perdeu...");
                mostraTabuleiro(tab, true);
                System.out.println("=========================");
            } else {
                System.out.println("=========================");
                System.out.println("Parabéns!! Você venceu.");
                mostraTabuleiro(tab, true);
                System.out.println("=========================");
            }
        }

        entrada.close();
    }
}
