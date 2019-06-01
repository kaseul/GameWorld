len = 2;
        n = 0;
        card = new Array(len);
        more_card = new Array(len);
        card_shape = new Array("♣","♠","◇","♡");
        card_num = new Array("A","2","3","4","5","6","7","8","9","10","J","Q","K");
        sum = new Array(0,0);
        for(i = 0; i < len; i++){
            card[i] = new Array(3);
        }
        
        function game(){
            for(i = 0; i < len; i++){
                if(more_card[i] == len){
                    card[i][n] = "00";
                    continue;
                }
            
            shape = parseInt(Math.random() * card_shape.length,10);
            num = parseInt(Math.random() * card_num.length,10);
            
            card[i][n] = card_shape[shape] + card_num[num] ;
            
            equal = i;
            
            same();
            
            } //for i
            
            card_A();
            
            sum_card();  
            
            n++;

        } //function

        function sum_card(){
            for(i = 0; i < len-1; i++){
                if(sum[i] <= 17) {
                    more_card[i] = i;
                }
                else{
                    more_card[i] = len;
                }
            } //for i         
        }

        function card_A(){
            for(i = 0; i < len-1; i++){
                if(card[i][n].charAt(1) == 'A'){
                    if(sum[i] <= 10) sum[i] += 11;
                    else sum[i] += 1;
                }
            }
        }
        
        function same(){
            for(j = 0; j < n; j++){
                for(k = 0; k < len; k++){
                    if(card[i][n] == card[k][j]){
                        i--;
                        break;
                    }
                }
                if(equal != i) break;
            }
            
            if(equal == i){
                for(j = 0; j < i; j++){
                    if(card[i][n] == card[j][n]){
                        i--;
                        break;
                    }
                }
                if(equal == i){
                    if(num >= 10) num = 9;
                    else if(num == 0) num = -1;
                    sum[i] += num+1;
                }
             }
        }
        
        function A(){
            while(true){
                a = prompt("A의 값을 정해주세요.(1 or 11) : 현재 카드의 합 : " + sum[i],"");
                if(a == 1 || a == 11) break;
                else alert("1 or 11만 입력해주세요.");
            }
            return parseInt(a);
        }
        
        function More() {
            more = confirm("카드를 한 장 더 받으시겠습니까? 당신 카드의 합 : " + sum[1] + " 딜러의 두번째 카드 : "+card[0][1]);
            if(more != true) return len; 
        }
        
        function print_card(c){
            if(c == 0) document['d' + (c+1)].src = "images/back.jpg";
            else document['d' + (c+1)].src = "images/"+card[0][c]+".gif";
            document['u' + (c+1)].src = "images/"+card[1][c]+".gif";
            if(card[1][c].charAt(1) == 'A'){
                sum[1] += A();
            }
            if(c == 1) more_card[1] = More();
            if(c != 2) game();
        }
        
        function result(){
            blackjack();
            document['d1'].src = "images/"+card[0][0]+".gif";
            
            if(sum[0] <= 21){
                if(sum[1] > 21 || sum[0] > sum[1]) answer = "딜러가 이겼습니다.";
                else if(sum[0] == sum[1]) answer = "비겼습니다.";
                else answer = "당신이 이겼습니다.";
            }
            else{
                if(sum[0] < sum[i]) answer = "딜러가 이겼습니다.";
                else answer = "당신이 이겼습니다.";
            }
            alert("딜러의 합 : " + sum[0] + " 당신의 합 : "+sum[1]+"로  " + answer);
        }
        
        function blackjack(){
            if(more_card[0] == len && sum[0] == 21) alert("Black Jack!");
            if(more_card[1] == len && sum[1] == 21) alert("Black Jack!");
        }
        
        function restart(){
            for(j = 0; j < card[0].length; j++){
                document['d' + (j+1)].src = "images/00.gif";
                document['u' + (j+1)].src = "images/00.gif";
                card[0][j] = "";
                card[1][j] = "";
            }
            for(i = 0; i < len; i++){
                sum[i] = 0;
                more_card[i] = 0;
            }
            n = 0;
        }