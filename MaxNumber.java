import java.util.*;

class Solution {
    
    public void quickSort(int[] arr){
        quickSort(arr, 0, arr.length-1);
    }
    
    public void quickSort(int[] arr, int start, int end){
        
        int pivot = partition(arr, start, end);
        
        if(start < pivot-1){
            quickSort(arr,start, pivot-1);
        }
        if(pivot < end){
            quickSort(arr, pivot, end);
        }
        
    }
    
    public static int partition(int[] arr, int start, int end){
        int pivot = arr[(start  + end) /2];
        while(start <= end){
            while((arr[start]+""+pivot).compareTo(pivot+""+arr[start])>0 ) start++;
            while((pivot+""+arr[end]).compareTo(arr[end]+""+pivot)>0) end--;
            if(start <= end) {
                swap(arr, start, end);
                start++;
                end--;
            }
        }
        return start;
    }

    public static void swap(int[] arr, int start, int end){

        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

    }
    
    
    public String solution(int[] numbers) {
        
        //숫자를 퀵정렬로 비교한다
        //  피벗을 기준으로 문자열 순서로 비교한다
        //  피벗보다 앞에서 결합한거보다 뒤에 결합한게 더 크면 뒤로간다.
        //  계속 분할해서 정렬한다.
        
        String answer = "";
        String zero = "";
        quickSort(numbers);
        
        for(int num : numbers){
            
            answer += num;
            zero += "0";
        }

        
        return answer.equals(zero) ? "0" : answer;
        
    
    }
}
