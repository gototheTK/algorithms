class Solution {
    public int solution(int n) {
        String answer = "";
        
        while(n!=0){
            
            if(n%3==0){
                answer+= 0;
                n = n/3;
            }else{
                answer += n%3;
                n -= n%3;
                n = n/3;
            }
            
        }
        
        int sum=0;
        int pow = answer.length()-1;
        for(String str : answer.split("")){
            
            int temp = Integer.parseInt(str);

            
            sum += Math.pow(3, pow)*temp;
            
            pow--;
            
        }
       

        return sum;
    }
}
