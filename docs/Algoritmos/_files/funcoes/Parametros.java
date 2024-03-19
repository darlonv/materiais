public class Parametros{
    
    public static void funcaoA(int valor){ //Parâmetros de funções são variáveis locais
        System.out.println("Valor na funcao A (antes)  : " + valor);
        funcaoB(valor +1);
        System.out.println("Valor na funcao A (depois) :" + valor);
    }

    public static void funcaoB(int valor){ //Parâmetros de funções são variáveis locais
        System.out.println("Valor na funcao B (antes)  : " + valor);
        valor++;
        System.out.println("Valor na funcao B (depois) : " + valor);
    }

    public static void main(String[] args){
        funcaoA(10);
    }
}