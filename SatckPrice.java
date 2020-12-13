class Solution {
    
    
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        int length = prices.length;
        
        for(int i=0; i<length; i++){
            
            int duration = length-1-i;
            
            for(int j=i+1; j<length; j++){
                
                if(prices[i]>prices[j]){
                   duration -= length-1-j;
                    break;
                }
                
            }
            
            answer[i] = duration;
            
        }
        
        return answer;
    }
}
