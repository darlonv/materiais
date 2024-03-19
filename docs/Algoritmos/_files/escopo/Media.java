import java.util.Scanner;

public class Media{
    static Scanner entrada;
    //Módulo para abrir a entrada
 public static void entradaAbrir(){
    entrada = new Scanner(System.in);
  }
 
  //Módulo para fechar a entrada
  public static void entradaFechar(){
    entrada.close();
  }
 
  //Módulo para ler um valor inteiro
  public static int lerInt(){
    return entrada.nextInt();
  }

  //Módulo para ler um valor inteiro e mostrar uma mensagem
 public static int lerInt(String mensagem){
    //mostra a mensagem
    System.out.println(mensagem);
    //lê o valor e o retorna para que seja atribuído à variável
    return entrada.nextInt();
 } 

    public static float media3Valores(int a, int b, int c){
        //variáveis
        int soma;
        float media;
    
        //processamento
        soma = a+b+c;
        media = (float) soma/3;
    
        //retorno
        return media;
      }
    
      public static void main(String[] args){
        //variáveis e entrada
        int x,y,z;
    
        entradaAbrir();
        System.out.println("Entre com três valores: ");
        x = lerInt("X: ");
        y = lerInt("Y: ");
        z = lerInt("Z: ");
        entradaFechar();
    
        //chamada ao método e saída
        System.out.printf("A média é %f\n", media3Valores(x,y,z));
      }
}