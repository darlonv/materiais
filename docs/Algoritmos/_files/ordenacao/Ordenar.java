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

    public static int[] vetorSubVetor_copia(int[] v, int ini, int fim) {
        int i, k = 0;
        int[] sub_vetor = new int[fim - ini];

        for (i = ini; i < fim; i++) { // <- o valor na posição fim não é copiado
            sub_vetor[k] = v[i];
            k++;
        }
        return sub_vetor;
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

    // Merge Sort - Recursivo
    public static int[] mergeSort_rec(int[] v) {
        int[] vr, ve_ordenado, vd_ordenado;
        if (v.length <= 1) { // <- fim da recursão
            return v;
        }

        // Fase da divisão
        int[] ve, vd;
        int meio;

        meio = v.length / 2; // divisão inteira
        ve = vetorSubVetor_copia(v, 0, meio); // do início até a posição meio-1
        vd = vetorSubVetor_copia(v, meio, v.length); // de meio até tamanho-1

        // Recursivamente, ordena os vetores da esquerda e da direita
        ve_ordenado = mergeSort_rec(ve);
        vd_ordenado = mergeSort_rec(vd);

        // Fase da intercalação
        vr = mergeSort_intercalar(ve_ordenado, vd_ordenado);

        return vr;
    }

    public static int[] mergeSort_intercalar(int[] va, int[] vb) {
        int i = 0, j = 0, k = 0;
        int[] vr = new int[va.length + vb.length];

        // enquanto ambos i e j ainda apontem dentro dos vetores
        while (i < va.length && j < vb.length) {
            if (va[i] <= vb[j]) { // o menor dos valores apontados por i e j deve ser incluído em vr
                vr[k] = va[i];
                i++;
            } else {
                vr[k] = vb[j];
                j++;
            }
            k++;
        }
        // caso j já esteja fora de vb, basta incluir os valores de va.
        while (i < va.length) {
            vr[k] = va[i];
            i++;
            k++;
        }

        // caso i já esteja fora de va, basta incluir os valores de vb.
        while (j < vb.length) {
            vr[k] = vb[j];
            j++;
            k++;
        }

        return vr;
    }

    public static void mergeSort_intercalar_aux(int[] v, int ini, int meio, int fim, int[] aux) {
        int i = ini, j = meio, k = ini;

        while (i < meio && j < fim) {

            if (v[i] <= v[j]) {
                aux[k] = v[i];
                i++;
            } else {
                aux[k] = v[j];
                j++;
            }
            k++;
        }

        while (i < meio) {
            aux[k] = v[i];
            i++;
            k++;
        }

        while (j < fim) {
            aux[k] = v[j];
            j++;
            k++;
        }

        // os dados ordenados foram salvos no vetor aux.
        // é necessário copiá-los de volta ao vetor v
        for (k = ini; k < fim; k++) {
            v[k] = aux[k];
        }
    }

    public static void mergeSort(int[] v) {
        int[] aux = new int[v.length];
        mergeSort_aux(v, 0, v.length, aux);
    }

    public static void mergeSort_aux(int[] v, int ini, int fim, int[] aux) {

        if (fim - ini > 1) {
            int meio = (fim - ini) / 2 + ini;

            mergeSort_aux(v, ini, meio, aux); // parte esquerda
            mergeSort_aux(v, meio, fim, aux); // parte direita

            mergeSort_intercalar_aux(v, ini, meio, fim, aux);
        }
    }

    public static void mergeSort_iter(int[] v) {
        int[] aux = new int[v.length];
        mergeSort_iter_aux(v, aux);
    }

    public static void mergeSort_iter_aux(int[] v, int[] aux) {
        int ini, fim, meio, passo = 1, n = v.length;
        while (passo < n) {
            ini = 0;
            while (ini + passo < n) {
                fim = ini + passo * 2;
                meio = ini + passo;
                if (fim > n) {
                    fim = n;
                }
                mergeSort_intercalar_aux(v, ini, meio, fim, aux);
                ini = ini + passo * 2;
            }
            passo = passo * 2;
        }
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

    static int partition(int[] arr, int low, int high) {
        int pivot = arr[low];
        int i = low - 1, j = high + 1;

        while (true) {
            // Find leftmost element greater
            // than or equal to pivot
            do {
                i++;
            } while (arr[i] < pivot);

            // Find rightmost element smaller
            // than or equal to pivot
            do {
                j--;
            } while (arr[j] > pivot);

            // If two pointers met.
            if (i >= j)
                return j;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            // swap(arr[i], arr[j]);
        }
    }

    public static int quickSortParticionamentoHoare(int[] v, int lim_esq, int lim_dir) {
        int pivot = v[lim_esq]; // Escolha do pivô
        int idx_esq = lim_esq - 1, idx_dir = lim_dir + 1;

        while (true) {
            do {
                idx_esq++;
            } while (v[idx_esq] < pivot); // incrementa até achar um valor menor

            do {
                idx_dir--;
            } while (v[idx_dir] > pivot); // decrementa até achar um valor maior

            if (idx_esq >= idx_dir) {
                return idx_dir; // quando os índices se encontrarem, o índice da direita terá o pivô
            }

            troca(v, idx_esq, idx_dir);
        }
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

        // int[] v = { 10, 4, 1, 7, 0, 15, 8, 5, 2, 9, 6, 3 };
        int[] v = { 10, 7, 8, 9, 1, 5 };
        int j;

        vetorPrint_int(v);
        // j = quickSortParticionamentoHoare(v, 0, v.length - 1);
        j = partition(v, 0, v.length - 1);
        System.out.printf("pivot: pos %d\n", j);
        vetorPrint_int(v);

        // vc = mergeSort_intercalar(va, vb);
        // mergeSort_iter(v);
        // vetorPrint_int(v);

        // mergeSort_intercalar_aux(va, ini, meio, fim, aux);
        // vetorPrint_int(va);

        // System.out.println("Algoritmo\tEntrada\t\tTempo");
        // ordenar("10_max.txt", "BubbleSort");
        // ordenar("100_max.txt", "BubbleSort");
        // ordenar("1000_max.txt", "BubbleSort");
        // ordenar("10000_max.txt", "BubbleSort");
        // ordenar("100000_max.txt", "BubbleSort");
        // ordenar("1000000_max.txt", "BubbleSort");
        // ordenar("10000000_max.txt", "BubbleSort");

    }
}
