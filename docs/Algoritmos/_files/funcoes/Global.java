public class Global{
    //variáveis globais
    static int var_global; //<- A variável é definida fora das funções

    public static void varGlobalSetar(int valor){
        var_global = valor;
    }

    public static void varGlobalIncrementar(){
        var_global++;
    }

    public static void varGlobalMostrar(){
        System.out.println(var_global);
    }

    public static void main(String[] args){

        varGlobalSetar(10);
        varGlobalIncrementar();
        varGlobalMostrar();
        varGlobalIncrementar();
        varGlobalMostrar();
    }
}