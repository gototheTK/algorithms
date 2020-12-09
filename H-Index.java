class Solution {
    public int solution(int[] citations) {
        int answer = 0;
        int[] counts = new int[citations.length+1]; 
        
        
        for(int i=0; i<counts.length; i++){
            
            for(int j=0; j<citations.length; j++){
                
                if(citations[j] >= (i)){
                    
                    counts[i]++;
                    
                }

            }
            
        }
        
        
        for(int i=0; i<counts.length; i++){
            
            answer = i;
            if(counts[i]<i){
                answer = i-1;
                break;
            }
            
        }
        
        
        
        return answer;
    }
}
