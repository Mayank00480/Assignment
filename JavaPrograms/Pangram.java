class Pangram{
static void checkPanaram(String str)
{
for(int i = 0;i<str.length();i++)
{
if((str.charAt(i) < 97 || str.charAt(i) > 122) && str.charAt(i) != ' ')
{
System.out.print("String is not Panagram");
return ;
}
}
System.out.print("String is panagram");
}
public static void main(String[] args)
{
checkPanagram("my name is mayankA");
}
}