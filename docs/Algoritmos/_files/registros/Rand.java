public class Rand {
    //Retorna uma valor inteiro no intervalo [min, max[
    public static int randomIntIntervalo(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }

    public static void main(String[] args) {
        System.out.println(randomIntIntervalo(0, 10));
    }

    
}
