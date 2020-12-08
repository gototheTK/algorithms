class Solution {
    public String solution(String s, int n) {
        
        char[] temp = s.toCharArray();
        
        for(int i=0; i<temp.length; i++){
            
            if(temp[i]>='a' && temp[i]<='z'){
                
                temp[i] += n;
                
                if(temp[i]>'z'){
                    temp[i] -= 26;
                }
                
                
            }else if(temp[i]>='A' && temp[i]<='Z'){
                
                temp[i] += n;
                
                if(temp[i]>'Z'){
                    temp[i] -= 26;
                }
                
            }
            
            
        }
        
        return String.valueOf(temp);
    }
}
