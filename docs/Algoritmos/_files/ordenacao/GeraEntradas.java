import java.io.PrintWriter;
import java.util.Random;

public class GeraEntradas {
    public static void gerar(int n_values, int max_val, String filename) {
        int i;
        Random random = new Random();
        PrintWriter out;
        try {
            out = new PrintWriter(filename);
            out.println(n_values);
            for (i = 0; i < n_values; i++) {
                out.println(random.nextInt(max_val));
            }
            out.close();
        } catch (Exception e) {
            System.out.println(e);

        }

    }

    public static void main(String[] args) {
        int max_val = 10000;
        gerar(10, max_val, "10.txt");
        gerar(100, max_val, "100.txt");
        gerar(1000, max_val, "1000.txt");
        gerar(10000, max_val, "10000.txt");
        gerar(100000, max_val, "100000.txt");
        gerar(1000000, max_val, "1000000.txt");
        gerar(10000000, max_val, "10000000.txt");

        max_val = Integer.MAX_VALUE;
        gerar(10, max_val, "10_max.txt");
        gerar(100, max_val, "100_max.txt");
        gerar(1000, max_val, "1000_max.txt");
        gerar(10000, max_val, "10000_max.txt");
        gerar(100000, max_val, "100000_max.txt");
        gerar(1000000, max_val, "1000000_max.txt");
        gerar(10000000, max_val, "10000000_max.txt");
    }
}