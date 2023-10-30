// package docs._files.arquivos;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class Arquivos {

    public static void leitura() {
        // variáveis
        Scanner entrada = null;
        File arquivo;

        // processamento
        try {
            // abre o arquivo
            arquivo = new File("compras.txt");
            entrada = new Scanner(arquivo);

            // leitura dos dados do arquivo
            String dados = entrada.next();

            // saída
            System.out.println(dados);

            // fecha o arquivo
            entrada.close();

        } catch (Exception e) {
            System.out.println("erro");

        }

    }

    public static void escrita() {
        String nome_arquivo = "arquivo.txt";
        String saida;
        try {
            FileWriter arq = new FileWriter(nome_arquivo);

            // arq.write(10);
            saida = String.format("%d\n", 105);

            arq.write(saida);
            // arq.flush();

            arq.close();

        } catch (Exception e) {
            System.out.println("Erro");
            System.err.println(e);
        }
    }

    public static void escritaPrintWriter() {
        String nome_arquivo = "arquivo.txt";
        PrintWriter arq;

        try {
            int idade = 28;
            arq = new PrintWriter(nome_arquivo, true);

            arq.println("arquivo aqui");
            arq.printf("%d\n", idade);
            arq.close();

        } catch (Exception e) {
            System.err.println(e);
        }
    }

    public static void main(String[] args) {
        escritaPrintWriter();

    }
}
