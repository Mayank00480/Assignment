import java.util.*;
class RomantoInteger{

static void RomanToInt(String str)
{
HashMap<Character ,Integer> map = new HashMap<>();
map.put('I' , 1);
map.put('V' , 5);
map.put('X', 10);
map.put('L',50);
map.put('C' , 100);
map.put('D',500);
map.put('M',1000);
int sum = map.get(str.charAt(str.length()-1));
for(int i = str.length()-2;i>=0;i--)
{
if(map.get(str.charAt(i)) < map.get(str.charAt(i+1)))
{
sum = sum - map.get(str.charAt(i));
}
else {
sum = sum + map.get(str.charAt(i));
}
}
System.out.print(sum + " ");
}
public static void main(String[] args)
{
RomanToInt("III");
}

}