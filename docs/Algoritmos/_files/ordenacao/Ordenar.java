import java.io.File;
import java.util.Scanner;

class Ordenar {

    public static long getTime_long() {
        return System.currentTimeMillis();
    }

    public static void vetorPrint_int(int[] v) {
        int i;
        for (i = 0; i < v.length; i++) {
            System.out.printf("%d ", v[i]);
        }
        System.err.println();
    }

    public static void troca(int[] v, int i, int j) {
        int tmp = v[i];
        v[i] = v[j];
        v[j] = tmp;
    }

    // Bubble Sort
    public static int[] bubbleSort(int[] v) {
        int i, j;
        for (i = 0; i < v.length; i++) {
            for (j = i + 1; j < v.length; j++) {
                if (v[j - 1] > v[j]) {
                    troca(v, j - 1, j);
                }
            }
        }
        return v;
    }

    // Insertion Sort
    public static int[] insertionSort(int[] v) {
        return v;
    }

    // Selection Sort
    public static int[] selectionSort(int[] v) {
        return v;
    }

    // Merge Sort
    public static int[] mergeSort(int[] v) {
        return v;
    }

    // Counting Sort
    public static int[] countingSort(int[] v) {
        return v;
    }

    // Radix Sort
    public static int[] radixSort(int[] v) {
        return v;
    }

    // Quick Sort
    public static int[] quickSort(int[] v) {
        return v;
    }

    public static void ordenar(String filename, String algoritmo) {
        long tempo_antes = 0, tempo_depois = 0, tempo_segundos;
        int[] v;
        int n, val, i;

        try {
            // Carrega dados
            File file = new File(filename);
            Scanner sc = new Scanner(file);
            n = sc.nextInt();
            // System.out.println(n);
            v = new int[n];
            for (i = 0; i < n; i++) {
                v[i] = sc.nextInt();
            }
            sc.close();
            // vetorPrint_int(v);

            // Ordena
            tempo_antes = getTime_long();
            switch (algoritmo) {
                case "BubbleSort":
                    v = bubbleSort(v);
                    break;

                default:
                    System.err.println("Problemas ao identificar o algoritmo.");
                    break;
            }

            tempo_depois = getTime_long();

            // Mostra o tempo
            tempo_segundos = (tempo_depois - tempo_antes) / 1000;
            System.out.printf("%s\t%s\t%d segundos\n", algoritmo, filename, tempo_segundos);
            // vetorPrint_int(v);

        } catch (Exception e) {
            System.err.println(e);

        }
    }

    public static void main(String[] args) {
        System.out.println("Algoritmo\tEntrada\t\tTempo");
        ordenar("10_max.txt", "BubbleSort");
        ordenar("100_max.txt", "BubbleSort");
        ordenar("1000_max.txt", "BubbleSort");
        ordenar("10000_max.txt", "BubbleSort");
        ordenar("100000_max.txt", "BubbleSort");
        ordenar("1000000_max.txt", "BubbleSort");
        ordenar("10000000_max.txt", "BubbleSort");

    }
}
