import java.util.*;

class Solution {
    public int[] solution(int[] arr, int divisor) {
        
        int count = 0;
        
        Arrays.sort(arr);
        
        for(int i=0; i<arr.length; i++){
            
            if(arr[i]%divisor==0){
                count++;
            }
            
        }
        
        if(count==0){
            return new int[] {-1};
        }
        
        int[] answer = new int[count];
        
        for(int i=0; i<arr.length; i++){
            
            if(arr[i]%divisor==0&&count>0){
                answer[answer.length-count] = arr[i];
                count--;
            }
            
        }
    
    
        return answer;
    }
}
