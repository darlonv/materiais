public class Local{
    
    public static void funcaoA(){
        //variáveis declaradas dentro da função
        int valor; 
        valor = 10;
        System.out.println("Valor na funcao A (antes)  : " + valor);
        funcaoB();
        System.out.println("Valor na funcao A (depois) :" + valor);
    }

    public static void funcaoB(){
        //variáveis declaradas dentro da função
        int valor;
        valor = 20;
        System.out.println("Valor na funcao B: " + valor);
    }

    public static void main(String[] args){
        funcaoA();
    }
}