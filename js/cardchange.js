len = 16;
        card = new Array(len);
        compare = new Array(2);
        compare[0] = 8;
        compare[1] = 8;
        answer = 0;
        cnt = 0;
        
        
        for(i = 0; i < len; i++){
            num = parseInt(Math.random() * 8);
            card[i] = num;
            
            same();
        }
        
        function c(n){
            a = n;
            if(compare[0] == 8) compare[0] = a;
            else {
                compare[1] = a;
                answer = comp();
                compare[0] = 8;
            }
            if(answer == 1) {
                document[n].src = "images/white.png";  
                cnt += 2;
                answer = 0;
            }
            else{
                document[n].src = "images/" + card[n] + ".gif";
                ID = window.setTimeout("re_card(a);",500);
            }
            
            if(cnt == len) {
                alert("축하드립니다!");
                ans = confirm("다시 하시겠습니까?");
                if(ans == true) clear();
            }
        }
        
        function re_card(n){
            document[n].src = "images/card.png"; 
        }
        
        function comp() {
            if(compare[0] != compare[1]){
                if(card[compare[0]] == card[compare[1]]){
                    document[compare[0]].src = "images/white.png";
                    return 1;
                }
                else return 0;
            }
        }
        
        function clear(){
            location.href = "test_card_change.html";
        }
        
        function same() {
            count = 0;
            for(j = 0; j < i; j++){
                if(card[i] ==  card[j]) count++;
                if(count == 2){
                   i--;
                   break;
                }
            }
        }

