public class Bug4 {
    public static void main(String[] args) {
        int[] scores = {85, 90, 78, 92, 88};

        int total = 0;

        // FIX: use < instead of <=
        for (int i = 0; i < scores.length; i++) {
            total += scores[i];
        }

        System.out.println("Total score: " + total);
    }
}
