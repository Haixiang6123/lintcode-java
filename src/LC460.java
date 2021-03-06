public class LC460 {

    public int[] kClosestNumbers(int[] A, int target, int k) {
        int left = findCloserLeft(A, target);
        int right = left + 1;

        int[] results = new int[k];
        int index = 0;
        for (int i = 0; i < k; i++) {
            if (isLeftCloser(A, target, left, right)) {
                results[index++] = A[left];
                left--;
            }
            else {
                results[index++] = A[right];
                right++;
            }
        }

        return results;
    }

    private boolean isLeftCloser(int[] A, int target, int left, int right) {
        if (left < 0) {
            return false;
        }
        if (right >= A.length) {
            return true;
        }

        if (target - A[left] != A[right] - target) {
            return target - A[left] < A[right] - target;
        }

        return true;
    }

    private int findCloserLeft(int[] A, int target) {
        int start = 0, end = A.length - 1;
        while (start + 1 < end) {
            int mid = start + (end - start) / 2;
            if (A[mid] < target) {
                start = mid;
            } else {
                end = mid;
            }
        }

        if (A[end] < target) {
            return end;
        }
        if (A[start] < target) {
            return start;
        }

        return -1;
    }
}
