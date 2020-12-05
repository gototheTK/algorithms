import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        int[] answer;
        int[] first = {1, 2, 3, 4, 5};
        int[] second= {2, 1, 2, 3, 2, 4, 2, 5};
        int[] third = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};

        int score1 = 0;
        int score2 = 0;
        int score3 = 0;

        int index1 =0;
        int index2 =0;
        int index3 =0;

        for(int i=0; i<answers.length; i++){


            if(first[index1]==answers[i]){
                score1++;
            }

            if(second[index2]==answers[i]){
                score2++;
            }

            if(third[index3]==answers[i]){
                score3++;
            }

            index1++;
            index1%=5;

            index2++;
            index2%=8;

            index3++;
            index3%=10;

        }

        String temp = "";

        if(score1>=score2&&score1>=score3){
            temp += 1;
        }

        if(score2>=score1&&score2>=score3){
            temp += 2;
        }

        if(score3>=score1&&score3>=score2){
            temp += 3;
        }

        answer = new int[temp.length()];

        for(int i=0; i<temp.length(); i++){
            answer[i] = Integer.parseInt(temp.charAt(i)+"");
        }




        return answer;


    }


}
