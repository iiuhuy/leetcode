//题目来源: hihocode 1032
/**************************************************************************
描述: 小 Hi 和 Ho 是一对好朋友, 爱好编程。有一天他们遇到了一连串的字符串， 于是小 Hi 就向 Ho 提出了那个经典的问题："小 Ho 你能不能分别在这些字符串中找到他们每一个的最长回文子串呢？"

"什么叫做最长回文子串呢？"小 Ho奇怪问道。

小 Hi 回答道:"一个字符串中连续的一段就是这个字符串的子串， 而回文串指的是 12421 这中从前往后和从后往前读一模一样的字符串， 所以最长的回文子串的意思就是 这个字符串中最长的身为回文串的子串啦。"

小 Ho 道:"原来如此！那么我该怎得到这些字符串呢？我又应该怎么告诉你我所计算出的最长回文子串呢？"

小 Hi 笑着说道: "这个很容易啦， 你只需要写一个程序， 先从标准输入读取一个整数 N (N ≤ 30)，代表我给你的字符串的个数， 然后接下的就是我要给你的那 N 个字符串 ( 字符串长度 ≤ 10^6 )啦。而你要告诉我你的答案的话， 只要将你计算出的最长回文子串的长度按照我给你的顺序依次输出到标准输出就可以了！"

例如：

提示1 提示2 提示3 提示4

样例输入
3
abababa
aaaabaa
acacdas

样例输出
7
5
3

***************************************************************************/
//传说中的 Manacher 算法 （ 找到最长的回文子串 ）

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int length;

char *find_longest_parindrome(char s[], int n)
{
	int i,j;
	int max = 0;
	char *pointer;
	for(i=0; i<n; i++)
	{
		for(j=0; i-j>=0 && j+i<n; j++)
		{
			if(s[i-j] != s[i+j])
				break;
		}
		if(2 * (j-1) + 1 > max)
		{
			pointer = s+i-j+1;
			max = 2*j - 1;
		}

		for(j=0; i-j>=0 && j+i+1 < n; j++)
		{
			if(s[i-j] != s[i+j+1])
				break;
		}
		if(2*(j-1)+2 > max)
		{
			pointer = s+i-j+1;
			max = 2*j;
		}
	}

	length = max;
	return pointer;
}

int main(void)
{
	char s[] = "ceabeebad";
	int n = sizeof(s) - 1 ;
	char *pointer = find_longest_parindrome(s, n);
	int count;
	printf("the string is : %s\n it's longest parindrome is:\n", s );
	for(count=0; count<length; count++)
	{
		printf("%c", *(pointer + count));
	}
	printf("\n");
}




