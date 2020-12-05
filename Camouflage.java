import java.util.*;

class Solution {
    public int solution(String[][] clothes) {
        int answer = 1;
        
        HashMap<String, Integer> map = new HashMap<String, Integer> ();
        
        for(int i=0; i<clothes.length; i++){
            
           map.put(clothes[i][1], 1);
        }
        
        for(int i=0; i<clothes.length; i++){
           map.replace(clothes[i][1], map.get(clothes[i][1])+1);
        }
        
        for (String mapkey : map.keySet()){
            answer *= map.get(mapkey);
        }
        
        return answer-1;
    }
}
