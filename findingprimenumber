class Solution {
    public int solution(int n) {
        int answer = 1;
        int[] numbers = new int[n+1];
        
        for(int i=3; i<=Math.sqrt(n); i+=2){
            
            if(numbers[i]==1){
                continue;
            }
            
            
            
            for(int j=i; i*j<=n && i*j>0; j+=2){
                
                numbers[i*j] = 1;
                
            }
            
        }
        
        for(int i=3; i<numbers.length; i+=2){
            
            if(numbers[i]==0){
                
                if(i==999983){
                    System.out.println("끝자락");
                }
                
                answer++;
            }
            
        }
        
        
        return answer;
    }
}
