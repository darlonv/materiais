class Tipos {

    public static void mostrarLiteraisInteiroDecimal() {
        int var_int;
        long var_long;

        // Decimal
        var_int = 10100;
        var_long = 10100l; // l ou L para long

        System.out.println("Valores em decimal: ");
        System.out.println("    10100  : " + var_int);
        System.out.println("    10100  : " + var_long);

    }

    public static void mostrarLiteraisInteiroHexadecimal() {
        int var_int;
        long var_long;

        // Hexadecimal
        var_int = 0x10100;
        var_long = 0x10100l; // l ou L para long

        System.out.println("Valores em hexadecimal: ");
        System.out.println("    0x10100  : " + var_int);
        System.out.println("    0x10100  : " + var_long);

    }

    public static void mostrarLiteraisInteiroBinario() {
        int var_int;
        long var_long;

        // Binário
        var_int = 0b10100;
        var_long = 0b10100l; // l ou L para long

        System.out.println("Valores em binário: ");
        System.out.println("    0b10100  : " + var_int);
        System.out.println("    0b10100  : " + var_long);

    }

    public static void mostrarLiteraisRealDecimal() {
        float var_float;
        double var_double;

        // Decimais
        var_float = 10100f;  // f ou F para float
        var_double = 10100d; // d ou D para double

        System.out.println("Valores em decimal: ");
        System.out.println("    10100f  : " + var_float);
        System.out.println("    10100d  : " + var_double);

    }

    public static void mostrarValoresMinimosInteiro() {

        byte var_byte = Byte.MIN_VALUE;
        short var_short = Short.MIN_VALUE;
        int var_int = Integer.MIN_VALUE;
        long var_long = Long.MIN_VALUE;

        System.out.println("Valores mínimos para inteiros: ");
        System.out.println("    min byte  : " + var_byte);
        System.out.println("    min short : " + var_short);
        System.out.println("    min int   : " + var_int);
        System.out.println("    min long  : " + var_long);

    }

    public static void mostrarValoresMaximosInteiro() {

        byte var_byte = Byte.MAX_VALUE;
        short var_short = Short.MAX_VALUE;
        int var_int = Integer.MAX_VALUE;
        long var_long = Long.MAX_VALUE;

        System.out.println("Valores máximos para inteiros: ");
        System.out.println("    max byte  : " + var_byte);
        System.out.println("    max short : " + var_short);
        System.out.println("    max int   : " + var_int);
        System.out.println("    max long  : " + var_long);

    }

    public static void mostrarValoresMinimosReal() {

        float var_float = Float.MIN_VALUE;
        double var_double = Double.MIN_VALUE;

        System.out.println("Valores mínimos para real: ");
        System.out.println("    min float  : " + var_float);
        System.out.println("    min double : " + var_double);

    }

    public static void mostrarValoresMaximosReal() {

        float var_float = Float.MAX_VALUE;
        double var_double = Double.MAX_VALUE;

        System.out.println("Valores máximos para real: ");
        System.out.println("    max float  : " + var_float);
        System.out.println("    max double : " + var_double);

    }

    public static void mostrarOverflowInteiro() {

        byte var_byte = Byte.MAX_VALUE;
        short var_short = Short.MAX_VALUE;
        int var_int = Integer.MAX_VALUE;
        long var_long = Long.MAX_VALUE;

        var_byte++;
        var_short++;
        var_int++;
        var_long++;

        System.out.println("Valores máximos +1 para inteiros: ");
        System.out.println("    ovf byte  : " + var_byte);
        System.out.println("    ovf short : " + var_short);
        System.out.println("    ovf int   : " + var_int);
        System.out.println("    ovf long  : " + var_long);

    }

    public static void mostrarOverflowReal() {

        float var_float = Float.MAX_VALUE;
        double var_double = Double.MAX_VALUE;

        var_float++;
        var_double++;

        System.out.println("Valores mínimos para real: ");
        System.out.println("    max float  : " + var_float);
        System.out.println("    max double : " + var_double);

    }

    public static void mostrarUnderflowReal() {

        float var_float = Float.MIN_VALUE;
        double var_double = Double.MIN_VALUE;

        System.out.println("Valores mínimos para real: ");
        System.out.println("    min float  : " + var_float);
        System.out.println("    min double : " + var_double);

        var_float = var_float / 2;
        var_double = var_double / 2;

        System.out.println("Valores mínimos / 2 para real: ");
        System.out.println("    udf float  : " + var_float);
        System.out.println("    udf double : " + var_double);

    }

    public static void main(String[] args) {
        // mostrarValoresMinimosInteiro();
        // mostrarValoresMaximosInteiro();
        // mostrarValoresMinimosReal();
        // mostrarValoresMaximosReal();
        // mostrarOverflowInteiro();
        // mostrarUnderflowReal();
        mostrarLiteraisInteiroDecimal();
        mostrarLiteraisInteiroHexadecimal();
        mostrarLiteraisInteiroBinario();
        mostrarLiteraisRealDecimal();
    }
}